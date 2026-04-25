import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import gsap from 'gsap';

export function OrderConfirmation() {
  const { items, totalPrice, clearCart } = useCart();
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear cart on success
    clearCart();
    
    if (iconRef.current) {
      gsap.from(iconRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'expo.out',
      });
    }
  }, [clearCart]);

  return (
    <main className="pt-28 md:pt-32 pb-20">
      <div className="container-main max-w-[560px] text-center py-12 md:py-20">
        <ScrollReveal>
          <div
            ref={iconRef}
            className="w-16 h-16 rounded-full border-2 border-sage flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-8 h-8 text-sage stroke-[2]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="heading-2 mb-4">Thank you, Guest</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-base text-taupe mb-8">
            Your order <span className="font-medium text-[#1A1410]">#VND-4829</span> has been confirmed. You'll receive an email with tracking details once your order ships.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="bg-sand p-6 md:p-8 text-left mb-8">
            <h3 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => {
                const price = item.selectedVariant?.price ?? item.product.price;
                return (
                  <div key={`${item.productId}-${item.variantId}`} className="flex justify-between font-body text-sm">
                    <span className="text-[#1A1410]">{item.product.name} x{item.quantity}</span>
                    <span className="text-[#1A1410] font-medium">${price * item.quantity}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-[rgba(26,20,16,0.1)] pt-3 flex justify-between">
              <span className="font-body text-sm font-medium text-[#1A1410]">Total</span>
              <span className="font-display text-xl font-semibold text-[#1A1410]">${totalPrice}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
            <Link to="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
