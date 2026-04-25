import { forwardRef, type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className = '', y = 40, duration = 0.8, delay = 0, stagger = 0 }, ref) => {
    const localRef = useScrollReveal<HTMLDivElement>({ y, duration, delay, stagger });
    
    return (
      <div ref={ref || localRef} className={className}>
        {children}
      </div>
    );
  }
);
ScrollReveal.displayName = 'ScrollReveal';
