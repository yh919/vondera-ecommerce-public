export interface VonderaProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  crossedPrice?: number;
  mainImage: {
    small: string;
    large: string;
    originalSize?: string;
    smallSize?: string;
  };
  images?: string[];
  link: string;
  categoryName: string;
  categoryId?: string;
  categoryLink?: string;
  subCategoryName?: string;
  subCategoryId?: string;
  isAvailable: boolean;
  currency: string;
  country: string;
  quantity?: number;
  sold?: number;
  sku?: string;
  variants?: Record<string, string[]>;
  variantsDisplay?: Record<string, string[]>;
  variantsSettings?: Array<{
    id: string;
    quantity: number;
    price: number;
    sku: string;
    displayOptions: Record<string, string>;
    images?: {
      originalSize: string;
      smallSize: string;
    };
    currency: string;
    country: string;
  }>;
  rating?: {
    average: number;
    count: number;
  };
  labels?: {
    lastPiece: boolean;
    outOfStock: boolean;
  };
  isDigital?: boolean;
}

export interface VonderaCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  subCategories: Array<{
    id: string;
    name: string;
    categoryId: string;
    sortValue?: number;
    productCount: number;
  }>;
  productsCount: number;
}

export interface VonderaCartItem {
  id: string;
  name: string;
  image: string;
  categoryName: string;
  subCategoryName?: string;
  currency: string;
  link: string;
  isDigital?: boolean;
  variantId?: string;
  variantDisplay?: Record<string, string>;
  quantity: number;
  maxQuantity: number;
  price: number;
  totalPrice: number;
}

export interface VonderaCart {
  items: VonderaCartItem[];
  totalPrice: number;
  currency: string;
  totalQuantity: number;
  productsCount: number;
}

export interface CartItem {
  productId: string;
  variantId: string | null;
  quantity: number;
  product: VonderaProduct;
  selectedVariant?: NonNullable<VonderaProduct['variantsSettings']>[number];
}

export interface VonderaStore {
  id: string;
  name: string;
  logo: string;
  slogan: string;
  country: string;
  currency: string;
  domains: string[];
  social?: {
    phone?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  zones?: Array<{
    id: string;
    name: string;
    fees: number;
    enabled: boolean;
    estimatedDeliveryTimeInDays?: number;
  }>;
  themeing?: {
    primaryColor?: string;
    secondaryColor?: string;
    bgColor?: string;
    whatsappButton?: boolean;
  };
}

export interface VonderaCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  storeId: string;
  createDate: {
    _seconds: number;
    _nanoseconds: number;
  };
}

export interface VonderaWishlist {
  items: VonderaProduct[];
  isLastPage: boolean;
  nextPageNumber: number | null;
  currentPage: number;
  totalPages: number;
}

export interface OrderPriceCalculation {
  itemsPrice: number;
  shippingFees: number;
  discount: number;
  gatewayFees: number;
  totalTaxes: number;
  totalPrice: number;
  amountToPayLater: number;
  autoApplyPromo: unknown;
}

export interface CheckoutInitResponse {
  [key: string]: unknown;
}

export interface DiscountValidationResponse {
  valid: boolean;
  message: string;
  discountAmount?: number;
  discountType?: 'percent' | 'amount';
}

export interface StoreBuilderSettings {
  updatedAt: string;
  sections: Array<{
    id: string;
    enabled: boolean;
    order: number;
    settings: unknown;
  }>;
}

export interface VonderaOrder {
  id: string;
  status: string;
  date: { _seconds: number; _nanoseconds: number };
  link?: string;
  products: Array<{
    id: string;
    name: string;
    variantId?: string;
    link?: string;
    previewImage?: string;
    itemPrice: number;
    quantity: number;
    totalPrice?: number;
    variantDisplay?: Record<string, string>;
  }>;
  payment?: {
    gateway: string;
    method: string;
    paymentStatus: string;
    productsPrice: number;
    shippingFees: number;
    discount: number;
    totalPrice: number;
  };
  customer: {
    name: string;
    phone: string;
    email?: string;
    address: string;
    gov?: string;
  };
}
