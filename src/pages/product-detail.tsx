import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Heart, Check } from 'lucide-react';
import { fetchProductById, fetchProducts } from '@/lib/vondera-api';
import { useCart } from '@/hooks/use-cart';
import { ProductCard } from '@/components/shared/product-card';
import { QuantityStepper } from '@/components/shared/quantity-stepper';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import type { VonderaProduct } from '@/types';

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(26,20,16,0.1)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-body text-sm font-medium text-[#1A1410]"
      >
        {title}
        <ChevronDown className={`w-4 h-4 stroke-[1.5] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
        <div className="font-body text-sm text-taupe leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<VonderaProduct | null>(null);
  const [related, setRelated] = useState<VonderaProduct[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (!id) return;
    fetchProductById(id).then((p) => {
      if (p) {
        setProduct(p);
        setSelectedVariant(p.variantsSettings?.[0]?.id ?? null);
        // Fetch related products from same category
        fetchProducts(1, 4, p.categoryId).then((res) => {
          setRelated(res.items.filter((item) => item.id !== p.id).slice(0, 4));
        });
      }
    });
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    await addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product) {
    return (
      <main className="pt-28 md:pt-32 container-main">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-sand" />
          <div className="space-y-4">
            <div className="h-8 bg-sand w-3/4" />
            <div className="h-6 bg-sand w-1/4" />
            <div className="h-4 bg-sand w-full" />
            <div className="h-4 bg-sand w-full" />
          </div>
        </div>
      </main>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.mainImage.large];
  const variant = product.variantsSettings?.find((v) => v.id === selectedVariant);
  const price = variant?.price ?? product.price;

  // Extract color and size options
  const colorOptions = product.variants?.Color || product.variants?.color || product.variantsDisplay?.Color || product.variantsDisplay?.color || [];
  const sizeOptions = product.variants?.Size || product.variants?.size || product.variantsDisplay?.Size || product.variantsDisplay?.size || [];

  return (
    <main className="pt-28 md:pt-32">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 md:gap-12">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden ${
                      selectedImage === i ? 'ring-1 ring-[#1A1410]' : 'opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:pt-8">
            <p className="font-body text-xs text-taupe mb-2">
              Home / Shop / {product.categoryName}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-normal text-[#1A1410] mb-2">
              {product.name}
            </h1>
            <p className="font-display text-2xl font-semibold text-[#1A1410] mb-6">
              ${price}
            </p>
            <p className="font-body text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selector */}
            {colorOptions.length > 0 && (
              <div className="mb-6">
                <p className="font-body text-sm text-[#1A1410] mb-3">
                  Color — {variant?.displayOptions?.Color || colorOptions[0]}
                </p>
                <div className="flex gap-2">
                  {colorOptions.map((color) => {
                    const isSelected = variant?.displayOptions?.Color === color;
                    return (
                      <button
                        key={color}
                        onClick={() => {
                          const match = product.variantsSettings?.find((v) => v.displayOptions.Color === color);
                          if (match) setSelectedVariant(match.id);
                        }}
                        className={`w-8 h-8 border-2 transition-all ${
                          isSelected ? 'border-[#1A1410] ring-2 ring-warm-white ring-offset-1' : 'border-[rgba(26,20,16,0.15)]'
                        }`}
                        style={{
                          backgroundColor:
                            color.toLowerCase() === 'olive' ? '#6B7F5E' :
                            color.toLowerCase() === 'sand' ? '#C9B99A' :
                            color.toLowerCase() === 'charcoal' ? '#4A4A4A' :
                            color.toLowerCase() === 'burgundy' ? '#722F37' :
                            color.toLowerCase() === 'cream' ? '#F5F1EB' :
                            color.toLowerCase() === 'oatmeal' ? '#E8DFD0' :
                            color.toLowerCase() === 'black' ? '#1A1410' :
                            color.toLowerCase() === 'taupe' ? '#8B7E6A' :
                            color.toLowerCase() === 'navy' ? '#2C3E50' :
                            color.toLowerCase() === 'moss' ? '#5F6F52' :
                            color.toLowerCase() === 'rust' ? '#B85C50' :
                            color.toLowerCase() === 'tan' ? '#C4956A' :
                            color.toLowerCase() === 'brown' ? '#6B4423' :
                            color.toLowerCase() === 'indigo' ? '#3F51B5' :
                            '#E8E0D5'
                        }}
                        aria-label={`Select ${color}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {sizeOptions.length > 0 && (
              <div className="mb-6">
                <p className="font-body text-sm text-[#1A1410] mb-3">Size</p>
                <div className="flex gap-2">
                  {sizeOptions.map((size) => {
                    const isSelected = variant?.displayOptions?.Size === size;
                    return (
                      <button
                        key={size}
                        onClick={() => {
                          const color = variant?.displayOptions?.Color;
                          const match = product.variantsSettings?.find((v) =>
                            v.displayOptions.Size === size && (!color || v.displayOptions.Color === color)
                          );
                          if (match) setSelectedVariant(match.id);
                        }}
                        className={`w-12 h-12 flex items-center justify-center font-body text-[13px] border transition-colors ${
                          isSelected
                            ? 'border-[#1A1410] bg-[rgba(26,20,16,0.05)]'
                            : 'border-[rgba(26,20,16,0.15)] hover:border-[#1A1410]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-body text-sm text-[#1A1410] mb-3">Quantity</p>
              <QuantityStepper value={quantity} onChange={setQuantity} />
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className={`w-full btn-primary transition-all ${
                  added ? 'bg-sage' : ''
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  `Add to Cart — $${price * quantity}`
                )}
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="w-full btn-secondary flex items-center justify-center gap-2"
              >
                <Heart className={`w-4 h-4 stroke-[1.5] ${wishlisted ? 'fill-terracotta stroke-terracotta' : ''}`} />
                {wishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Details Accordion */}
            <div className="mt-8">
              <AccordionItem title="Details & Care">
                <p>Machine wash cold with like colors. Hang dry or tumble low. Iron on low heat if needed. Do not bleach.</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>Free standard shipping on orders over $150. Express shipping available at checkout. Returns accepted within 30 days of delivery in original condition with tags attached.</p>
              </AccordionItem>
              <AccordionItem title="Size Guide">
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-sm"><span>Size S</span><span>Chest 36" / Length 27"</span></div>
                  <div className="flex justify-between font-body text-sm"><span>Size M</span><span>Chest 39" / Length 28"</span></div>
                  <div className="flex justify-between font-body text-sm"><span>Size L</span><span>Chest 42" / Length 29"</span></div>
                  <div className="flex justify-between font-body text-sm"><span>Size XL</span><span>Chest 45" / Length 30"</span></div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-sand mt-16 md:mt-24 py-16 md:py-20">
          <div className="container-main">
            <ScrollReveal>
              <h2 className="heading-2 mb-2">You May Also Like</h2>
              <p className="font-body text-sm text-taupe mb-8">Curated pairs for this piece</p>
            </ScrollReveal>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {related.map((p) => (
                <div key={p.id} className="flex-shrink-0 w-[260px] md:w-[300px] snap-start">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
