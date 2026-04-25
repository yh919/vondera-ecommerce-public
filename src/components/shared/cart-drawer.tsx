import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useUIStore } from "@/hooks/use-store";
import { useCart } from "@/hooks/use-cart";
import { QuantityStepper } from "./quantity-stepper";

export function CartDrawer() {
  const { cartOpen, setCartOpen } = useUIStore();
  const { items, totalPrice, totalQuantity, updateItem, removeItem } =
    useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    if (!drawerRef.current || !backdropRef.current) return;
    if (cartOpen) {
      backdropRef.current.style.opacity = "1";
      backdropRef.current.style.pointerEvents = "auto";
      drawerRef.current.style.transform = "translateX(0)";
    } else {
      backdropRef.current.style.opacity = "0";
      backdropRef.current.style.pointerEvents = "none";
      drawerRef.current.style.transform = "translateX(100%)";
    }
  }, [cartOpen]);

  const handleRemove = async (productId: string, variantId: string | null) => {
    const key = `${productId}-${variantId || "none"}`;
    setRemovingId(key);
    setTimeout(async () => {
      await removeItem(productId, variantId);
      setRemovingId(null);
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-[50] bg-[rgba(26,20,16,0.3)] opacity-0 pointer-events-none transition-opacity duration-300"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 w-full md:w-[440px] bg-cream z-[50] shadow-drawer flex flex-col transition-transform duration-500 ease-out-expo"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(26,20,16,0.08)]">
          <div>
            <h2 className="font-display text-2xl font-normal text-[#1A1410]">
              Your Cart
            </h2>
            <p className="font-body text-sm text-taupe mt-1">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6" ref={itemsRef}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <ShoppingBag className="w-12 h-12 stroke-[1] text-taupe" />
              <p className="font-body text-base text-taupe">
                Your cart is empty
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="btn-ghost mt-2"
              >
                <Link to="/shop" onClick={() => setCartOpen(false)}>
                  Start exploring
                </Link>
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item) => {
                const key = `${item.productId}-${item.variantId || "none"}`;
                const price = item.selectedVariant?.price ?? item.product.price;
                const isRemoving = removingId === key;
                return (
                  <div
                    key={key}
                    className={`flex gap-4 py-4 border-b border-[rgba(26,20,16,0.08)] transition-all duration-300 ${
                      isRemoving
                        ? "opacity-0 -translate-x-full"
                        : "opacity-100 translate-x-0"
                    }`}
                  >
                    <img
                      src={item.product.mainImage.smallSize}
                      alt={item.product.name}
                      className="w-20 h-[100px] object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-body text-sm font-medium text-[#1A1410] truncate">
                            {item.product.name}
                          </p>
                          {item.selectedVariant && (
                            <p className="font-body text-xs text-taupe mt-1">
                              {Object.entries(
                                item.selectedVariant.displayOptions,
                              )
                                .map(([_, v]) => v)
                                .join(" / ")}
                            </p>
                          )}
                          <p className="font-display text-base font-semibold text-[#1A1410] mt-2">
                            ${price}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            handleRemove(item.productId, item.variantId)
                          }
                          className="p-1 hover:text-terracotta transition-colors text-taupe flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.5]" />
                        </button>
                      </div>
                      <div className="mt-3">
                        <QuantityStepper
                          value={item.quantity}
                          onChange={(q) =>
                            updateItem(item.productId, item.variantId, q)
                          }
                          compact
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[rgba(26,20,16,0.08)] bg-cream">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-[#1A1410]">Subtotal</span>
              <span className="font-display text-xl font-semibold text-[#1A1410]">
                ${totalPrice}
              </span>
            </div>
            <p className="font-body text-xs text-taupe mb-4">
              Shipping calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setCartOpen(false)}
              className="btn-primary w-full block text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setCartOpen(false)}
              className="btn-ghost w-full mt-3 text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
