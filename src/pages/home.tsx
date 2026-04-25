import { Hero } from '@/sections/home/hero';
import { FeaturedCategories } from '@/sections/home/featured-categories';
import { NewArrivals } from '@/sections/home/new-arrivals';
import { BrandStory } from '@/sections/home/brand-story';
import { Newsletter } from '@/sections/home/newsletter';

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <BrandStory />
      <Newsletter />
    </main>
  );
}
