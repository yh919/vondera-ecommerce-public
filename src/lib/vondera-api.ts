import type {
  VonderaProduct,
  VonderaCategory,
  VonderaCart,
  VonderaStore,
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

async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<{ status: number; message: string; data: T }> {
  if (DEMO_MODE) {
    // Return mock data based on endpoint
    throw new Error("Demo mode - use mock functions directly");
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API key not configured");
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      userid: getUserId(),
      ...options?.headers,
    },
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
