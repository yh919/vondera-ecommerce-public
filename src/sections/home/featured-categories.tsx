import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const categories = [
  { name: 'Outerwear', image: '/category-outerwear.jpg', to: '/shop?category=outerwear' },
  { name: 'Knitwear', image: '/category-knitwear.jpg', to: '/shop?category=knitwear' },
  { name: 'Accessories', image: '/category-accessories.jpg', to: '/shop?category=accessories' },
];

export function FeaturedCategories() {
  return (
    <section className="bg-sand section-padding">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <span className="label-text block mb-3">Browse by Category</span>
          <h2 className="heading-2">Curated for Every Season</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <ScrollReveal key={cat.name} stagger={0.12}>
              <Link
                to={cat.to}
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.5)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <span className="font-display text-2xl text-warm-white transition-transform duration-400 ease-out-expo group-hover:-translate-y-2 inline-block">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
