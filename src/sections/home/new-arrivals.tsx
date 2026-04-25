import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/shared/product-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/vondera-api';
import type { VonderaProduct } from '@/types';

export function NewArrivals() {
  const [products, setProducts] = useState<VonderaProduct[]>([]);

  useEffect(() => {
    fetchProducts(1, 6).then((res) => setProducts(res.items));
  }, []);

  return (
    <section className="bg-cream section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="label-text block mb-2">New Arrivals</span>
              <h2 className="heading-2">This Week's Additions</h2>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 font-body text-sm text-[#1A1410] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1A1410] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-ghost">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
