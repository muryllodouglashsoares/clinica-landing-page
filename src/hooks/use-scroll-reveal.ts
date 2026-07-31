import { useEffect } from "react";

/**
 * Adds the `.is-visible` class to every `.reveal` element currently in the
 * DOM as it scrolls into view, then stops observing it (one-shot reveal).
 *
 * Runs once after the whole page has mounted so it can see every section,
 * including ones rendered by child components further down the tree.
 * Elements are staggered via a CSS transition-delay derived from their
 * index, mirroring the original design's cascading effect.
 */
export function useScrollReveal(deps: readonly unknown[] = []) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (prefersReducedMotion || nodes.length === 0) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((node, i) => {
      node.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
