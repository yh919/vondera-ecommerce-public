import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { fetchStore, calculateOrderPrice, createOrder } from "@/lib/vondera-api";
import type { VonderaStore, OrderPriceCalculation } from "@/types";

export function Checkout() {
  const { items, totalPrice: cartSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [store, setStore] = useState<VonderaStore | null>(null);
  const [priceData, setPriceData] = useState<OrderPriceCalculation | null>(null);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    cityId: "",
    state: "",
    zip: "",
    phone: "",
    notes: "",
  });
  const [shippingMethod, setShippingMethod] = useState("SHIPPING");
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [expandedItems, setExpandedItems] = useState(false);

  useEffect(() => {
    fetchStore().then(setStore);
  }, []);

  const updatePrice = useCallback(async () => {
    try {
      setCalculating(true);
      const data = await calculateOrderPrice({
        cityId: form.cityId,
        discountCode: "",
        products: items.map(item => ({
          id: item.productId,
          variantId: item.variantId || "",
          quantity: item.quantity,
          type: "PRODUCT"
        })),
        pickupMethod: shippingMethod,
        gatewayType: paymentMethod === "card" ? "CARD" : "CASH"
      });
      setPriceData(data);
    } catch {
      console.error("Failed to calculate price");
    } finally {
      setCalculating(false);
    }
  }, [items, form.cityId, shippingMethod, paymentMethod]);

  useEffect(() => {
    if (items.length > 0) {
      updatePrice();
    }
  }, [items, form.cityId, shippingMethod, paymentMethod, updatePrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderData = {
        name: `${form.firstName} ${form.lastName}`,
        phone: form.phone,
        otherPhone: "",
        countryCode: "+20", // Default or from a selector
        email: form.email,
        address: form.address,
        cityId: form.cityId,
        country: store?.country || "",
        notes: form.notes,
        paymentMethod: paymentMethod === "card" ? "GATEWAY" : "CASH",
        discountCode: "",
        products: items.map(item => ({
          id: item.productId,
          name: item.product.name,
          quantity: item.quantity,
          price: item.selectedVariant?.price ?? item.product.price,
          variantId: item.variantId || "",
          type: "PRODUCT"
        })),
        pickupMethod: shippingMethod
      };

      const order = await createOrder(orderData);
      clearCart();
      navigate("/order-confirmation", { state: { orderId: order.id } });
    } catch (err) {
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const total = priceData?.totalPrice ?? (cartSubtotal + (store?.zones?.find(z => z.id === form.cityId)?.fees || 0));
  const shipping = priceData?.shippingFees ?? (store?.zones?.find(z => z.id === form.cityId)?.fees || 0);

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
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <select
                    required
                    value={form.cityId}
                    onChange={(e) => setForm({ ...form, cityId: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(26,20,16,0.2)] py-3 font-body text-sm outline-none focus:border-[#1A1410] transition-colors"
                  >
                    <option value="">Select City</option>
                    {store?.zones?.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="ZIP / Postal Code"
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
                  <label
                    className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                      shippingMethod === "SHIPPING"
                        ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                        : "border-[rgba(26,20,16,0.1)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          shippingMethod === "SHIPPING"
                            ? "border-[#1A1410]"
                            : "border-[rgba(26,20,16,0.3)]"
                        }`}
                      >
                        {shippingMethod === "SHIPPING" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                        )}
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-[#1A1410]">
                          Standard Shipping
                        </p>
                        <p className="font-body text-xs text-taupe">
                          Door-to-door delivery
                        </p>
                      </div>
                    </div>
                    <span className="font-display text-base font-semibold text-[#1A1410]">
                      {shipping > 0 ? `${store?.currency} ${shipping}` : "Free"}
                    </span>
                    <input
                      type="radio"
                      name="shipping"
                      value="SHIPPING"
                      checked={shippingMethod === "SHIPPING"}
                      onChange={() => setShippingMethod("SHIPPING")}
                      className="sr-only"
                    />
                  </label>
                  <label
                    className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                      shippingMethod === "PICKUP"
                        ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                        : "border-[rgba(26,20,16,0.1)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          shippingMethod === "PICKUP"
                            ? "border-[#1A1410]"
                            : "border-[rgba(26,20,16,0.3)]"
                        }`}
                      >
                        {shippingMethod === "PICKUP" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                        )}
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-[#1A1410]">
                          Store Pickup
                        </p>
                        <p className="font-body text-xs text-taupe">
                          Collect from our physical location
                        </p>
                      </div>
                    </div>
                    <span className="font-display text-base font-semibold text-[#1A1410]">
                      Free
                    </span>
                    <input
                      type="radio"
                      name="shipping"
                      value="PICKUP"
                      checked={shippingMethod === "PICKUP"}
                      onChange={() => setShippingMethod("PICKUP")}
                      className="sr-only"
                    />
                  </label>
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
                  <label
                    className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "CASH"
                        ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                        : "border-[rgba(26,20,16,0.1)]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "CASH"
                          ? "border-[#1A1410]"
                          : "border-[rgba(26,20,16,0.3)]"
                      }`}
                    >
                      {paymentMethod === "CASH" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                      )}
                    </div>
                    <span className="font-body text-sm text-[#1A1410]">
                      Cash on Delivery
                    </span>
                    <input
                      type="radio"
                      name="payment"
                      value="CASH"
                      checked={paymentMethod === "CASH"}
                      onChange={() => setPaymentMethod("CASH")}
                      className="sr-only"
                    />
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "card"
                        ? "border-[#1A1410] bg-[rgba(26,20,16,0.03)]"
                        : "border-[rgba(26,20,16,0.1)]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "card"
                          ? "border-[#1A1410]"
                          : "border-[rgba(26,20,16,0.3)]"
                      }`}
                    >
                      {paymentMethod === "card" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1A1410]" />
                      )}
                    </div>
                    <span className="font-body text-sm text-[#1A1410]">
                      Credit / Debit Card
                    </span>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </ScrollReveal>

            <button
              type="submit"
              disabled={loading || calculating}
              className="btn-primary w-full disabled:opacity-70"
            >
              {loading ? "Processing..." : `Complete Order — ${store?.currency || "$"} ${total}`}
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
                        {item.product.currency} {price * item.quantity}
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
                  <span className="text-[#1A1410]">{store?.currency} {cartSubtotal}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-taupe">Shipping</span>
                  <span className="text-[#1A1410]">{store?.currency} {shipping}</span>
                </div>
                {priceData?.discount && priceData.discount > 0 && (
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-taupe">Discount</span>
                    <span className="text-green-600">-{store?.currency} {priceData.discount}</span>
                  </div>
                )}
              </div>
              <div className="border-t border-[rgba(26,20,16,0.1)] pt-3">
                <div className="flex justify-between">
                  <span className="font-body text-base font-medium text-[#1A1410]">
                    Total
                  </span>
                  <span className="font-display text-2xl font-semibold text-[#1A1410]">
                    {store?.currency} {total}
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
