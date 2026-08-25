import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Memecah daftar menjadi tampilan bertahap dengan infinite scroll:
 * hanya sebagian item yang dirender, sisanya dimuat saat sentinel
 * mendekati viewport (pra-muat 600px).
 */
export const usePaginatedList = <T,>(items: T[], pageSize = 9) => {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((count) => Math.min(count + pageSize, items.length));
  }, [items.length, pageSize]);

  // Reset ke halaman pertama setiap hasil filter berubah.
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items, pageSize]);

  useEffect(() => {
    const node = sentinelRef.current;

    if (!node || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMore();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return {
    visible: items.slice(0, visibleCount),
    totalCount: items.length,
    hasMore,
    loadMore,
    sentinelRef,
  };
};
