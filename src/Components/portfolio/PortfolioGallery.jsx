import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioItems, serviceCategories } from "@/data/siteContent";

const categories = [
  { label: "All", value: "all" },
  ...serviceCategories.map((service) => ({
    label: service.shortLabel,
    value: service.slug,
  })),
];

export function PortfolioGallery() {
  const router = useRouter();
  const defaultCategory =
    typeof router.query.category === "string" ? router.query.category : "all";
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory]);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const currentIndex = portfolioItems.findIndex(
      (item) =>
        item.title === selectedItem.title && item.category === selectedItem.category
    );

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }

      if (event.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % portfolioItems.length;
        setSelectedItem(portfolioItems[nextIndex]);
      }

      if (event.key === "ArrowLeft") {
        const previousIndex =
          (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        setSelectedItem(portfolioItems[previousIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const navigateLightbox = (direction) => {
    if (!selectedItem) {
      return;
    }

    const currentIndex = portfolioItems.findIndex(
      (item) =>
        item.title === selectedItem.title && item.category === selectedItem.category
    );
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % portfolioItems.length
        : (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;

    setSelectedItem(portfolioItems[nextIndex]);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
              activeCategory === category.value
                ? "border-sand bg-sand text-ink"
                : "border-white/10 bg-white/5 text-white/75 hover:border-white/20"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 columns-1 gap-5 md:columns-2 xl:columns-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.button
              layout
              key={`${item.category}-${item.title}`}
              type="button"
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="group mb-5 block w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 text-left"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-sand">
                    {serviceCategories.find((service) => service.slug === item.category)?.shortLabel}
                  </p>
                  <p className="mt-2 font-display text-2xl text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  width={1400}
                  height={1600}
                  className="max-h-[75vh] w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox("previous")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white"
                >
                  Next
                </button>
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-sand">
                  {serviceCategories.find((service) => service.slug === selectedItem.category)?.shortLabel}
                </p>
                <p className="font-display text-3xl text-white">
                  {selectedItem.title}
                </p>
                <p className="text-sm text-white/55">
                  Use the arrow keys to move through the gallery.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
