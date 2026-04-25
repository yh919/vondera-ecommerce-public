import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useUIStore } from '@/hooks/use-store';
import gsap from 'gsap';

const navLinks = [
  { label: 'Shop All', to: '/shop' },
  { label: 'Outerwear', to: '/shop?category=outerwear' },
  { label: 'Knitwear', to: '/shop?category=knitwear' },
  { label: 'Trousers', to: '/shop?category=trousers' },
  { label: 'Accessories', to: '/shop?category=accessories' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function MenuOverlay() {
  const { menuOpen, setMenuOpen } = useUIStore();
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !linksRef.current) return;
    if (menuOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, pointerEvents: 'auto' });
      gsap.from(linksRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'expo.out',
        delay: 0.1,
      });
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
    }
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] bg-cream opacity-0 pointer-events-none flex flex-col"
    >
      {/* Header */}
      <div className="h-[72px] flex items-center justify-between container-main">
        <Link to="/" onClick={handleClose} className="font-display text-xl font-light tracking-[0.15em] uppercase text-[#1A1410]">
          VONDERA
        </Link>
        <button
          onClick={handleClose}
          className="p-2 hover:opacity-60 transition-opacity"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8" ref={linksRef}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={handleClose}
            className="font-display text-4xl md:text-5xl font-light text-[#1A1410] hover:text-bronze transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="h-20 flex items-center justify-center gap-8 container-main">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.08em] text-taupe hover:text-[#1A1410] transition-colors">
          Instagram
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.08em] text-taupe hover:text-[#1A1410] transition-colors">
          Facebook
        </a>
      </div>
    </div>
  );
}
