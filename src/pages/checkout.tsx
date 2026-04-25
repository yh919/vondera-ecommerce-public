import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const shippingMethods = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 8,
    days: "5-7 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 18,
    days: "2-3 business days",
  },
];

const paymentMethods = [
  { id: "cod", name: "Cash on Delivery" },
  { id: "card", name: "Credit Card" },
];

export function Checkout() {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [expandedItems, setExpandedItems] = useState(false);

  const shipping =
    shippingMethods.find((s) => s.id === shippingMethod)?.price || 0;
  const total = totalPrice + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/order-confirmation");
    }, 1500);
  };

  const visibleItems = expandedItems ? items : items.slice(0, 2);
  const hiddenCount = items.length - 2;

  return (
    <main className="pt-28 md:pt-32 pb-20">
      <div className="container-main max-w-[1000px]">
        <ScrollReveal>
          <h1 className="heading-1 mb-8">Checkout</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Contact */}
            <ScrollReveal>
              <div className="mb-8">
                <h2 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
                  Contact
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                />
              </div>
            </ScrollReveal>

            {/* Shipping */}
            <ScrollReveal delay={0.1}>
              <div className="mb-8">
                <h2 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe mt-4"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    required
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors placeholder:text-taupe mt-4"
                />
              </div>
            </ScrollReveal>

            {/* Shipping Method */}
            <ScrollReveal delay={0.2}>
              <div className="mb-8">
                <h2 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  {shippingMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                        shippingMethod === method.id
                          ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                          : "border-[rgba(26,20,16,0.1)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            shippingMethod === method.id
                              ? "border-[#1A1410]"
                              : "border-[rgba(26,20,16,0.3)]"
                          }`}
                        >
                          {shippingMethod === method.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                          )}
                        </div>
                        <div>
                          <p className="font-body text-sm font-medium text-[#1A1410]">
                            {method.name}
                          </p>
                          <p className="font-body text-xs text-taupe">
                            {method.days}
                          </p>
                        </div>
                      </div>
                      <span className="font-display text-base font-semibold text-[#1A1410]">
                        ${method.price}
                      </span>
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={shippingMethod === method.id}
                        onChange={() => setShippingMethod(method.id)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Payment */}
            <ScrollReveal delay={0.3}>
              <div className="mb-8">
                <h2 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
                  Payment
                </h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                        paymentMethod === method.id
                          ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                          : "border-[rgba(26,20,16,0.1)]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          paymentMethod === method.id
                            ? "border-[#1A1410]"
                            : "border-[rgba(26,20,16,0.3)]"
                        }`}
                      >
                        {paymentMethod === method.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                        )}
                      </div>
                      <span className="font-body text-sm text-[#1A1410]">
                        {method.name}
                      </span>
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-70"
            >
              {loading ? "Processing..." : `Complete Order — $${total}`}
            </button>
          </form>

          {/* Summary */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[rgba(26,20,16,0.1)] p-6">
              <h2 className="font-display text-xl font-normal text-[#1A1410] mb-4">
                Order Summary
              </h2>

              {/* Items */}
              <div className="mb-4">
                {visibleItems.map((item) => {
                  const price =
                    item.selectedVariant?.price ?? item.product.price;
                  return (
                    <div
                      key={`${item.productId}-${item.variantId}`}
                      className="flex gap-3 py-3 border-b border-[rgba(26,20,16,0.06)]"
                    >
                      <img
                        src={item.product.mainImage.smallSize}
                        alt={item.product.name}
                        className="w-14 h-[60px] object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm font-medium text-[#1A1410] truncate">
                          {item.product.name}
                        </p>
                        <p className="font-body text-xs text-taupe">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-display text-sm font-semibold text-[#1A1410]">
                        ${price * item.quantity}
                      </span>
                    </div>
                  );
                })}
                {!expandedItems && hiddenCount > 0 && (
                  <button
                    onClick={() => setExpandedItems(true)}
                    className="w-full py-3 text-center font-body text-sm text-taupe hover:text-[#1A1410] transition-colors flex items-center justify-center gap-1"
                  >
                    + {hiddenCount} more item{hiddenCount > 1 ? "s" : ""}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-taupe">Subtotal</span>
                  <span className="text-[#1A1410]">${totalPrice}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-taupe">Shipping</span>
                  <span className="text-[#1A1410]">${shipping}</span>
                </div>
              </div>
              <div className="border-t border-[rgba(26,20,16,0.1)] pt-3">
                <div className="flex justify-between">
                  <span className="font-body text-base font-medium text-[#1A1410]">
                    Total
                  </span>
                  <span className="font-display text-2xl font-semibold text-[#1A1410]">
                    ${total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
