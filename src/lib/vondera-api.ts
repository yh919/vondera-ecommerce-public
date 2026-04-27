import type {
  VonderaProduct,
  VonderaCategory,
  VonderaCart,
  VonderaStore,
  VonderaCustomer,
  VonderaWishlist,
  OrderPriceCalculation,
  CheckoutInitResponse,
  DiscountValidationResponse,
  StoreBuilderSettings,
  VonderaOrder,
} from "@/types";
import {
  getMockProducts,
  getMockProductById,
  getMockCategories,
  getMockStore,
} from "./mock-data";

const BASE_URL =
  "https://us-central1-brands-61c3d.cloudfunctions.net/app-api/api/public";
const DEMO_MODE = false; // Set to false when API key is available

function getUserId(): string {
  let uid = localStorage.getItem("vondera-userid");
  if (!uid) {
    uid = `user-${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem("vondera-userid", uid);
  }
  return uid;
}

function getApiKey(): string | null {
  return (
    import.meta.env.VITE_VONDERA_API_KEY ||
    localStorage.getItem("vondera-api-key") ||
    null
  );
}

function getToken(): string | null {
  return localStorage.getItem("vondera-token");
}

export function setToken(token: string | null): void {
  if (token) {
    localStorage.setItem("vondera-token", token);
  } else {
    localStorage.removeItem("vondera-token");
  }
}

async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<{ status: number; message: string; data: T }> {
  if (DEMO_MODE) {
    throw new Error("Demo mode - use mock functions directly");
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API key not configured");
  }

  const token = getToken();
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": apiKey,
    userid: getUserId(),
  });

  if (options?.headers) {
    const customHeaders = new Headers(options.headers);
    customHeaders.forEach((value, key) => {
      headers.set(key, value);
    });
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

// Public API methods that work in both demo and real mode
export async function fetchStore(): Promise<VonderaStore> {
  if (DEMO_MODE) return getMockStore();
  const res = await apiRequest<VonderaStore>("/store/");
  return res.data;
}

export async function fetchProducts(
  pageNo = 1,
  limit = 12,
  categoryId?: string,
): Promise<{
  items: VonderaProduct[];
  isLastPage: boolean;
  nextPageNumber: number | null;
  currentPage: number;
  totalPages: number;
}> {
  if (DEMO_MODE) return getMockProducts(pageNo, limit, categoryId);
  const params = new URLSearchParams({
    pageNo: String(pageNo),
    limit: String(limit),
  });
  if (categoryId) params.set("category", categoryId);
  const res = await apiRequest<{
    items: VonderaProduct[];
    isLastPage: boolean;
    nextPageNumber: number | null;
    currentPage: number;
    totalPages: number;
  }>(`/products?${params}`);
  return res.data;
}

export async function fetchProductById(
  id: string,
): Promise<VonderaProduct | undefined> {
  if (DEMO_MODE) return getMockProductById(id);
  const res = await apiRequest<VonderaProduct>(`/products/single/${id}`);
  return res.data;
}

export async function fetchCategories(): Promise<VonderaCategory[]> {
  if (DEMO_MODE) return getMockCategories();
  const res = await apiRequest<VonderaCategory[]>("/category");
  return res.data;
}

export async function fetchCategoryById(
  id: string,
): Promise<VonderaCategory | undefined> {
  if (DEMO_MODE) return getMockCategories().find((c) => c.id === id);
  const res = await apiRequest<VonderaCategory>(`/category/single/${id}`);
  return res.data;
}

export async function fetchCart(): Promise<VonderaCart> {
  if (DEMO_MODE) {
    const stored = localStorage.getItem("vondera-cart");
    if (stored) return JSON.parse(stored);
    return {
      items: [],
      totalPrice: 0,
      currency: "USD",
      totalQuantity: 0,
      productsCount: 0,
    };
  }
  const res = await apiRequest<VonderaCart>("/cart");
  return res.data;
}

export async function addToCart(
  productId: string,
  variantId: string | null,
  quantity: number,
): Promise<void> {
  if (DEMO_MODE) {
    const cart = await fetchCart();
    const product = getMockProductById(productId);
    if (!product) return;

    const existing = cart.items.find(
      (i) => i.id === productId && i.variantId === variantId,
    );
    if (existing) {
      existing.quantity += quantity;
      existing.totalPrice = existing.price * existing.quantity;
    } else {
      const variant = variantId
        ? product.variantsSettings?.find((v) => v.id === variantId)
        : undefined;
      const price = variant?.price ?? product.price;
      cart.items.push({
        id: productId,
        name: product.name,
        image: product.mainImage.small,
        categoryName: product.categoryName,
        currency: product.currency,
        link: product.link,
        variantId: variantId || undefined,
        variantDisplay: variant?.displayOptions,
        quantity,
        maxQuantity: product.quantity ?? 999,
        price,
        totalPrice: price * quantity,
      });
    }
    cart.totalQuantity = cart.items.reduce((s, i) => s + i.quantity, 0);
    cart.productsCount = cart.items.length;
    cart.totalPrice = cart.items.reduce((s, i) => s + i.totalPrice, 0);
    localStorage.setItem("vondera-cart", JSON.stringify(cart));
    return;
  }
  await apiRequest("/cart", {
    method: "POST",
    body: JSON.stringify({ productId, variantId, quantity }),
  });
}

export async function updateCartQuantity(
  productId: string,
  variantId: string | null,
  quantity: number,
): Promise<void> {
  if (DEMO_MODE) {
    const cart = await fetchCart();
    const item = cart.items.find(
      (i) => i.id === productId && i.variantId === variantId,
    );
    if (item) {
      if (quantity <= 0) {
        cart.items = cart.items.filter(
          (i) => !(i.id === productId && i.variantId === variantId),
        );
      } else {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
      }
    }
    cart.totalQuantity = cart.items.reduce((s, i) => s + i.quantity, 0);
    cart.productsCount = cart.items.length;
    cart.totalPrice = cart.items.reduce((s, i) => s + i.totalPrice, 0);
    localStorage.setItem("vondera-cart", JSON.stringify(cart));
    return;
  }
  await apiRequest("/cart", {
    method: "PUT",
    body: JSON.stringify({ productId, variantId, quantity }),
  });
}

export async function removeFromCart(
  productId: string,
  variantId: string | null,
): Promise<void> {
  if (DEMO_MODE) {
    await updateCartQuantity(productId, variantId, 0);
    return;
  }
  await apiRequest("/cart", {
    method: "DELETE",
    body: JSON.stringify({ productId, variantId }),
  });
}

export async function clearCart(): Promise<void> {
  if (DEMO_MODE) {
    localStorage.setItem(
      "vondera-cart",
      JSON.stringify({
        items: [],
        totalPrice: 0,
        currency: "USD",
        totalQuantity: 0,
        productsCount: 0,
      }),
    );
    return;
  }
  await apiRequest("/cart/clear", { method: "DELETE" });
}

export function setApiKey(key: string): void {
  localStorage.setItem("vondera-api-key", key);
}

export function isDemoMode(): boolean {
  return DEMO_MODE;
}

// --- Customer APIs ---

export async function login(credentials: Record<string, string>): Promise<{ user: VonderaCustomer; token: string }> {
  if (DEMO_MODE) throw new Error("Login not supported in demo mode");
  const res = await apiRequest<{ user: VonderaCustomer; token: string }>("/customer/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  setToken(res.data.token);
  return res.data;
}

export async function signup(data: Record<string, unknown>): Promise<VonderaCustomer> {
  if (DEMO_MODE) throw new Error("Signup not supported in demo mode");
  const res = await apiRequest<{ customer: VonderaCustomer }>("/customer/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.data.customer;
}

export async function fetchProfile(): Promise<VonderaCustomer> {
  if (DEMO_MODE) throw new Error("Profile not supported in demo mode");
  const res = await apiRequest<VonderaCustomer>("/customer/");
  return res.data;
}

export async function fetchCustomerOrders(): Promise<VonderaOrder[]> {
  if (DEMO_MODE) return [];
  const res = await apiRequest<VonderaOrder[]>("/customer/orders");
  return res.data;
}

// --- Wishlist APIs ---

export async function fetchWishlist(page = 1, limit = 12): Promise<VonderaWishlist> {
  if (DEMO_MODE) return { items: [], isLastPage: true, nextPageNumber: null, currentPage: 1, totalPages: 1 };
  const res = await apiRequest<VonderaWishlist>(`/customer/wishlist?page=${page}&limit=${limit}`);
  return res.data;
}

export async function addToWishlist(productId: string): Promise<void> {
  if (DEMO_MODE) return;
  await apiRequest("/customer/wishlist", {
    method: "POST",
    body: JSON.stringify({ productId }),
  });
}

export async function removeFromWishlist(productId: string): Promise<void> {
  if (DEMO_MODE) return;
  await apiRequest("/customer/wishlist", {
    method: "DELETE",
    body: JSON.stringify({ productId }),
  });
}

// --- Checkout & Order APIs ---

export async function initCheckout(data: Record<string, unknown>): Promise<CheckoutInitResponse> {
  if (DEMO_MODE) return {};
  const res = await apiRequest<CheckoutInitResponse>("/orders/init-checkout", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.data;
}

export async function validateDiscount(code: string): Promise<DiscountValidationResponse> {
  if (DEMO_MODE) return { valid: true, message: "Demo discount applied", discountAmount: 10, discountType: 'amount' };
  const res = await apiRequest<DiscountValidationResponse>("/orders/discount/validate", {
    method: "POST",
    body: JSON.stringify({ discountCode: code }),
  });
  return res.data;
}

export async function calculateOrderPrice(data: Record<string, unknown>): Promise<OrderPriceCalculation> {
  if (DEMO_MODE) {
    return {
      itemsPrice: 100,
      shippingFees: 10,
      discount: 0,
      gatewayFees: 0,
      totalTaxes: 0,
      totalPrice: 110,
      amountToPayLater: 0,
      autoApplyPromo: null
    };
  }
  const res = await apiRequest<OrderPriceCalculation>("/orders/price", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.data;
}

export async function createOrder(orderData: Record<string, unknown>): Promise<VonderaOrder> {
  if (DEMO_MODE) {
    return {
      id: "mock-order-id",
      status: "Pending",
      date: { _seconds: Date.now() / 1000, _nanoseconds: 0 },
      products: [],
      customer: { 
        name: String(orderData.name || ""), 
        phone: String(orderData.phone || ""), 
        address: String(orderData.address || "") 
      }
    };
  }
  const res = await apiRequest<VonderaOrder>("/orders", {
    method: "POST",
    body: JSON.stringify(orderData),
  });
  return res.data;
}

// --- Store Content APIs ---

export async function fetchBuilderSettings(withDraft = "false"): Promise<StoreBuilderSettings> {
  if (DEMO_MODE) return { updatedAt: new Date().toISOString(), sections: [] };
  const res = await apiRequest<StoreBuilderSettings>(`/store/builder/settings?withDraft=${withDraft}`);
  return res.data;
}

export async function fetchSitemap(): Promise<unknown[]> {
  if (DEMO_MODE) return [];
  const res = await apiRequest<unknown[]>("/store/sitemap");
  return res.data;
}

export async function fetchFunnel(linkId: string): Promise<unknown> {
  if (DEMO_MODE) return null;
  const res = await apiRequest<unknown>(`/funnels/${linkId}`);
  return res.data;
}
