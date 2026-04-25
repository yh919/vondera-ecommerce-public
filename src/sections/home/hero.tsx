import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    if (labelRef.current) {
      tl.from(labelRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'expo.out' }, 0);
    }
    if (headingRef.current) {
      tl.from(headingRef.current.querySelectorAll('.hero-line'), { 
        opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: 'expo.out' 
      }, 0.3);
    }
    if (bodyRef.current) {
      tl.from(bodyRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'expo.out' }, 0.6);
    }
    if (ctaRef.current) {
      tl.from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'expo.out' }, 0.8);
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[calc(100vh-112px)] flex flex-col md:flex-row mt-[112px]">
      {/* Image */}
      <div className="w-full md:w-[55%] h-[60vh] md:h-auto relative overflow-hidden">
        <img
          src="/hero-collection.jpg"
          alt="Autumn Winter Collection"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[45%] flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-0">
        <div>
          <span ref={labelRef} className="label-text block mb-4">
            Autumn / Winter 2024
          </span>
          <h1 ref={headingRef} className="heading-display mb-6">
            <span className="hero-line block">The Quiet</span>
            <span className="hero-line block">Craft of</span>
            <span className="hero-line block">Dressing</span>
          </h1>
          <p ref={bodyRef} className="body-large max-w-[360px] mb-8">
            A collection born from slow processes and natural materials. Each piece designed to be lived in, loved, and last.
          </p>
          <div ref={ctaRef}>
            <Link to="/shop" className="btn-primary group">
              Explore the Collection
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
