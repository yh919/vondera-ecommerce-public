import { useState } from "react";
import { Link } from "react-router-dom";
import type { VonderaProduct } from "@/types";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: VonderaProduct;
  index?: number;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const variantId = product.variantsSettings?.[0]?.id ?? null;
    await addItem(product, variantId, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <img
          src={product.mainImage.smallSize}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-600 ease-smooth ${
            hovered ? "scale-105" : "scale-100"
          }`}
          loading="lazy"
        />
        {/* Quick Add Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[rgba(26,20,16,0.85)] text-warm-white py-3 px-4 transition-transform duration-300 ease-out-expo ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full font-body text-xs uppercase tracking-[0.06em] font-medium text-center"
          >
            {added ? "Added!" : `Add to Cart — $${product.price}`}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-taupe mb-1">
          {product.categoryName}
        </p>
        <h3 className="font-body text-sm text-[#1A1410] group-hover:text-bronze transition-colors">
          {product.name}
        </h3>
        <p className="font-display text-lg font-semibold text-[#1A1410] mt-1">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
