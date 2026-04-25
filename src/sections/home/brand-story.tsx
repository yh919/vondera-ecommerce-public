import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/about-atelier.jpg"
          alt="Our Atelier"
          className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
        />
        <div className="absolute inset-0 bg-[rgba(44,36,22,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[640px] px-6 py-32 md:py-40">
        <ScrollReveal>
          <span className="label-text block mb-4 text-bronze-light">Our Atelier</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-light text-warm-white mb-6">
            Clothes Made to Last
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-base md:text-lg text-[rgba(250,250,248,0.85)] leading-relaxed mb-8">
            We believe in the radical act of creating slowly. Each garment is designed with intention, cut from natural fibers, and finished by hands that care about the details you can't see.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-transparent border border-warm-white text-warm-white px-8 py-4 font-body text-xs uppercase tracking-[0.06em] transition-colors duration-300 hover:bg-warm-white hover:text-[#1A1410]"
          >
            Read Our Story
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
