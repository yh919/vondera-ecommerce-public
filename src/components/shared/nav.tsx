import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { useUIStore } from "@/hooks/use-store";
import { useCart } from "@/hooks/use-cart";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { setMenuOpen, setCartOpen } = useUIStore();
  const { totalQuantity } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawers on route change
  useEffect(() => {
    useUIStore.getState().closeAll();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={` top-10 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-400 ease-smooth ${
        scrolled
          ? "bg-cream/95 backdrop-blur-[12px] shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="container-main w-full flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 hover:opacity-60 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
          <Link
            to="/shop"
            className="hidden md:block font-body text-[13px] uppercase tracking-[0.06em] text-[#1A1410] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1A1410] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Shop
          </Link>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-display text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-[#1A1410]">
            VONDERA
          </span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <Link
            to="/account"
            className="hidden md:flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.06em] text-[#1A1410] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1A1410] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            <User className="w-4 h-4 stroke-[1.5]" />
            Account
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="p-2 -mr-2 hover:opacity-60 transition-opacity relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {totalQuantity > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-bronze text-warm-white rounded-full flex items-center justify-center font-body text-[10px] font-medium">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
