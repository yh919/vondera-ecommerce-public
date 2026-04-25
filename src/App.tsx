import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/hooks/use-cart';
import { AnnouncementBar } from '@/components/shared/announcement-bar';
import { Nav } from '@/components/shared/nav';
import { MenuOverlay } from '@/components/shared/menu-overlay';
import { CartDrawer } from '@/components/shared/cart-drawer';
import { Footer } from '@/components/shared/footer';
import { Home } from '@/pages/home';
import { Shop } from '@/pages/shop';
import { ProductDetail } from '@/pages/product-detail';
import { CartPage } from '@/pages/cart-page';
import { Checkout } from '@/pages/checkout';
import { OrderConfirmation } from '@/pages/order-confirmation';
import { isDemoMode } from '@/lib/vondera-api';
import { useUIStore } from '@/hooks/use-store';

function DemoBanner() {
  const { demoBanner, setDemoBanner } = useUIStore();
  if (!demoBanner || !isDemoMode()) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] bg-coffee text-warm-white p-4 z-[70] shadow-drawer">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-body text-sm font-medium mb-1">Demo Mode</p>
          <p className="font-body text-xs text-[rgba(250,250,248,0.7)]">
            Add your Vondera API key to connect your live store.
          </p>
        </div>
        <button
          onClick={() => setDemoBanner(false)}
          className="p-1 hover:opacity-60 transition-opacity flex-shrink-0"
          aria-label="Dismiss demo banner"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Nav />
      <MenuOverlay />
      <CartDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
      <DemoBanner />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </CartProvider>
  );
}

export default App;
