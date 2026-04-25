import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/shared/product-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { useUIStore } from "@/hooks/use-store";
import { fetchProducts, fetchCategories } from "@/lib/vondera-api";
import type { VonderaProduct, VonderaCategory } from "@/types";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export function ShopHeader() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [categories, setCategories] = useState<VonderaCategory[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const categoryName = category
    ? categories.find((c) => c.id === category)?.name || "Shop All"
    : "Shop All";

  return (
    <div className="bg-sand pt-28 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 lg:px-12">
      <div className="container-main text-center">
        <p className="font-body text-xs text-taupe mb-2">
          Home / {categoryName}
        </p>
        <h1 className="heading-1">{categoryName}</h1>
        <p className="font-body text-sm text-taupe mt-2">
          Browse our curated collection
        </p>
      </div>
    </div>
  );
}

export function FilterBar({
  itemCount,
  activeCategory,
  onCategoryChange,
  activeSort,
  onSortChange,
}: {
  itemCount: number;
  activeCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
  activeSort: string;
  onSortChange: (sort: string) => void;
}) {
  const { setFilterOpen } = useUIStore();
  const [categories, setCategories] = useState<VonderaCategory[]>([]);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className=" top-[112px] md:top-[72px] z-40 bg-cream/95 backdrop-blur-[12px] border-b border-[rgba(26,20,16,0.08)]">
      <div className="container-main flex items-center justify-between py-4">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 stroke-[1.5]" />
            <span className="hidden md:inline">Filter</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`font-body text-[13px] px-3 py-1 transition-colors ${
                !activeCategory
                  ? "text-[#1A1410] bg-[rgba(26,20,16,0.05)]"
                  : "text-taupe hover:text-[#1A1410]"
              }`}
            >
              All
            </button>
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`font-body text-[13px] px-3 py-1 transition-colors ${
                  activeCategory === cat.id
                    ? "text-[#1A1410] bg-[rgba(26,20,16,0.05)]"
                    : "text-taupe hover:text-[#1A1410]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-1 font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors"
            >
              Sort
              <ChevronDown
                className={`w-4 h-4 stroke-[1.5] transition-transform ${showSort ? "rotate-180" : ""}`}
              />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 bg-cream border border-[rgba(26,20,16,0.1)] shadow-card min-w-[180px] z-50">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onSortChange(opt.value);
                      setShowSort(false);
                    }}
                    className={`block w-full text-left px-4 py-2 font-body text-sm hover:bg-sand transition-colors ${
                      activeSort === opt.value
                        ? "text-[#1A1410] font-medium"
                        : "text-taupe"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="font-mono text-[11px] text-taupe">
            {itemCount} items
          </span>
        </div>
      </div>
    </div>
  );
}

export function FilterSidebar({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
}) {
  const { filterOpen, setFilterOpen } = useUIStore();
  const [categories, setCategories] = useState<VonderaCategory[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[50] bg-[rgba(26,20,16,0.3)] transition-opacity duration-300 ${
          filterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setFilterOpen(false)}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-full md:w-[360px] bg-cream z-[50] shadow-drawer flex flex-col transition-transform duration-400 ease-out-expo ${
          filterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[rgba(26,20,16,0.08)]">
          <h2 className="font-display text-2xl font-normal text-[#1A1410]">
            Filters
          </h2>
          <button
            onClick={() => setFilterOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close filters"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h3 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 border transition-colors ${
                      activeCategory === cat.id
                        ? "bg-[#1A1410] border-[#1A1410]"
                        : "border-[rgba(26,20,16,0.3)] group-hover:border-[#1A1410]"
                    }`}
                  >
                    {activeCategory === cat.id && (
                      <svg
                        className="w-4 h-4 text-warm-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={activeCategory === cat.id}
                    onChange={() =>
                      onCategoryChange(
                        activeCategory === cat.id ? null : cat.id,
                      )
                    }
                  />
                  <span className="font-body text-sm text-[#1A1410]">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[rgba(26,20,16,0.08)] flex gap-3">
          <button
            onClick={() => onCategoryChange(null)}
            className="btn-secondary flex-1"
          >
            Clear All
          </button>
          <button
            onClick={() => setFilterOpen(false)}
            className="btn-primary flex-1"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<VonderaProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const activeCategory = searchParams.get("category") || null;
  const activeSort = searchParams.get("sort") || "featured";

  useEffect(() => {
    setLoading(true);
    setPage(1);

    fetchProducts(1, 12, activeCategory || undefined).then((res) => {
      setProducts(res.items);
      setHasMore(!res.isLastPage);
      setLoading(false);
    });
  }, [activeCategory]);

  const handleLoadMore = () => {
    const next = page + 1;
    fetchProducts(next, 12, activeCategory || undefined).then((res) => {
      setProducts((prev) => [...prev, ...res.items]);
      setHasMore(!res.isLastPage);
      setPage(next);
    });
  };

  const handleCategoryChange = (cat: string | null) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  const sortedProducts = [...products];
  if (activeSort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main>
      <ShopHeader />
      <FilterBar
        itemCount={sortedProducts.length}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        activeSort={activeSort}
        onSortChange={(sort) =>
          setSearchParams({ ...Object.fromEntries(searchParams), sort })
        }
      />
      <FilterSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="container-main py-12 md:py-16">
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-sand" />
                <div className="h-4 bg-sand mt-3 w-3/4" />
                <div className="h-4 bg-sand mt-2 w-1/2" />
              </div>
            ))}
          </div>
        ) : sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-lg text-taupe">
              No items match your selection
            </p>
            <button
              onClick={() => handleCategoryChange(null)}
              className="btn-ghost mt-4"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {sortedProducts.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-12">
                <button onClick={handleLoadMore} className="btn-ghost">
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
