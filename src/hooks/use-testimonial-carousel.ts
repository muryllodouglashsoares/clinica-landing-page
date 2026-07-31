import { useCallback, useEffect, useState } from "react";

function getPerView() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 900) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

/**
 * Drives the testimonials slider: how many cards are visible at once
 * (responsive), the current index, and clamped prev/next/goTo actions.
 */
export function useTestimonialCarousel(itemCount: number) {
  const [perView, setPerView] = useState(getPerView);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, itemCount - perView);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(0, itemCount - perView)));
  }, [perView, itemCount]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [maxIndex],
  );

  return {
    perView,
    index,
    maxIndex,
    goPrev: () => goTo(index - 1),
    goNext: () => goTo(index + 1),
    goTo,
  };
}
