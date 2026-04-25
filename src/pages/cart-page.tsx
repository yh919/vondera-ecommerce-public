import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { QuantityStepper } from "@/components/shared/quantity-stepper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function CartPage() {
  const { items, totalPrice, updateItem, removeItem } = useCart();

  return (
    <main className="pt-28 md:pt-32 pb-20">
      <div className="container-main max-w-[800px]">
        <ScrollReveal>
          <h1 className="heading-1 mb-2">Your Cart</h1>
          <p className="font-body text-sm text-taupe mb-8">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </ScrollReveal>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-12 h-12 stroke-[1] text-taupe mx-auto mb-4" />
            <p className="font-body text-lg text-taupe mb-4">
              Your cart is empty
            </p>
            <Link to="/shop" className="btn-primary">
              Start Exploring
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Items */}
            <div>
              {items.map((item) => {
                const price = item.selectedVariant?.price ?? item.product.price;
                return (
                  <div
                    key={`${item.productId}-${item.variantId}`}
                    className="flex gap-4 py-6 border-b border-[rgba(26,20,16,0.08)]"
                  >
                    <Link
                      to={`/product/${item.productId}`}
                      className="flex-shrink-0"
                    >
                      <img
                        src={item.product.mainImage.smallSize}
                        alt={item.product.name}
                        className="w-24 h-32 object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link to={`/product/${item.productId}`}>
                            <p className="font-body text-base font-medium text-[#1A1410]">
                              {item.product.name}
                            </p>
                          </Link>
                          {item.selectedVariant && (
                            <p className="font-body text-sm text-taupe mt-1">
                              {Object.entries(
                                item.selectedVariant.displayOptions,
                              )
                                .map(([_, v]) => v)
                                .join(" / ")}
                            </p>
                          )}
                          <p className="font-display text-lg font-semibold text-[#1A1410] mt-2">
                            ${price}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            removeItem(item.productId, item.variantId)
                          }
                          className="p-1 hover:text-terracotta transition-colors text-taupe flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.5]" />
                        </button>
                      </div>
                      <div className="mt-4">
                        <QuantityStepper
                          value={item.quantity}
                          onChange={(q) =>
                            updateItem(item.productId, item.variantId, q)
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-[rgba(26,20,16,0.1)] p-6">
                <h2 className="font-display text-xl font-normal text-[#1A1410] mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-taupe">Subtotal</span>
                    <span className="text-[#1A1410]">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-taupe">Shipping</span>
                    <span className="text-[#1A1410]">
                      Calculated at checkout
                    </span>
                  </div>
                </div>
                <div className="border-t border-[rgba(26,20,16,0.1)] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-body text-base font-medium text-[#1A1410]">
                      Total
                    </span>
                    <span className="font-display text-2xl font-semibold text-[#1A1410]">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="btn-primary w-full block text-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link
                  to="/shop"
                  className="btn-ghost w-full text-center mt-3 block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
