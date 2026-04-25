import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>(options?: {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      duration = 0.8,
      delay = 0,
      stagger = 0,
      threshold = 0.15,
      once = true,
    } = options ?? {};

    const children = stagger > 0 ? el.children : [el];

    const ctx = gsap.context(() => {
      gsap.from(children, {
        y,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: `top ${100 - threshold * 100}%`,
          once,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [options]);

  return ref;
}
