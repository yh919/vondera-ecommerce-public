import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import type { VonderaProduct, VonderaCart } from '@/types';
import { fetchCart, addToCart, updateCartQuantity, removeFromCart, clearCart as apiClearCart } from '@/lib/vondera-api';

interface CartItem {
  productId: string;
  variantId: string | null;
  quantity: number;
  product: VonderaProduct;
  selectedVariant?: NonNullable<VonderaProduct['variantsSettings']>[number];
}

interface CartState {
  items: CartItem[];
  loading: boolean;
}

type CartAction =
  | { type: 'SET_CART'; payload: VonderaCart }
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'UPDATE_ITEM'; payload: { productId: string; variantId: string | null; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variantId: string | null } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_CART': {
      // We don't have full product data here, so we'll hydrate later
      return { ...state, items: [] };
    }
    case 'ADD_ITEM': {
      const existing = state.items.find(
        i => i.productId === action.payload.productId && i.variantId === action.payload.variantId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.productId === action.payload.productId && i.variantId === action.payload.variantId
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'UPDATE_ITEM': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            i => !(i.productId === action.payload.productId && i.variantId === action.payload.variantId)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === action.payload.productId && i.variantId === action.payload.variantId
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          i => !(i.productId === action.payload.productId && i.variantId === action.payload.variantId)
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
  loading: boolean;
  addItem: (product: VonderaProduct, variantId: string | null, quantity: number) => Promise<void>;
  updateItem: (productId: string, variantId: string | null, quantity: number) => Promise<void>;
  removeItem: (productId: string, variantId: string | null) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], loading: false });

  const refreshCart = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const cart = await fetchCart();
      // In a real app, we'd fetch product details for each cart item
      // For demo mode, the cart already has full item info
      dispatch({ type: 'SET_CART', payload: cart });
    } catch {
      // ignore
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addItem = useCallback(async (product: VonderaProduct, variantId: string | null, quantity: number) => {
    const variant = variantId ? product.variantsSettings?.find(v => v.id === variantId) : undefined;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        variantId,
        quantity,
        product,
        selectedVariant: variant,
      },
    });
    await addToCart(product.id, variantId, quantity);
  }, []);

  const updateItem = useCallback(async (productId: string, variantId: string | null, quantity: number) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { productId, variantId, quantity } });
    await updateCartQuantity(productId, variantId, quantity);
  }, []);

  const removeItem = useCallback(async (productId: string, variantId: string | null) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantId } });
    await removeFromCart(productId, variantId);
  }, []);

  const clearCartFn = useCallback(async () => {
    dispatch({ type: 'CLEAR_CART' });
    await apiClearCart();
  }, []);

  const totalPrice = state.items.reduce((sum, item) => {
    const price = item.selectedVariant?.price ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalPrice,
        totalQuantity,
        loading: state.loading,
        addItem,
        updateItem,
        removeItem,
        clearCart: clearCartFn,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
