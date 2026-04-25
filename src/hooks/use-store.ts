import { create } from 'zustand';

interface UIStore {
  menuOpen: boolean;
  cartOpen: boolean;
  filterOpen: boolean;
  demoBanner: boolean;
  setMenuOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  setFilterOpen: (open: boolean) => void;
  setDemoBanner: (show: boolean) => void;
  closeAll: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  menuOpen: false,
  cartOpen: false,
  filterOpen: false,
  demoBanner: true,
  setMenuOpen: (open) => set({ menuOpen: open }),
  setCartOpen: (open) => set({ cartOpen: open }),
  setFilterOpen: (open) => set({ filterOpen: open }),
  setDemoBanner: (show) => set({ demoBanner: show }),
  closeAll: () => set({ menuOpen: false, cartOpen: false, filterOpen: false }),
}));
