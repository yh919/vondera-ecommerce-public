import { useState, useEffect } from 'react';
import type { VonderaProduct } from '@/types';
import { fetchWishlist, addToWishlist, removeFromWishlist } from '@/lib/vondera-api';

export function useWishlist() {
  const [items, setItems] = useState<VonderaProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      setLoading(true);
      const data = await fetchWishlist();
      setItems(data.items);
    } catch {
      setError('Failed to load wishlist');
    } finally {
      setLoading(false);
    }
  };

  const toggleWishlist = async (product: VonderaProduct) => {
    const isWishlisted = items.some((item) => item.id === product.id);
    try {
      if (isWishlisted) {
        await removeFromWishlist(product.id);
        setItems((prev) => prev.filter((item) => item.id !== product.id));
      } else {
        await addToWishlist(product.id);
        setItems((prev) => [...prev, product]);
      }
    } catch {
      setError('Failed to update wishlist');
    }
  };

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  return {
    items,
    loading,
    error,
    toggleWishlist,
    isInWishlist,
    refreshWishlist: loadWishlist,
  };
}
