import { useEffect, useState } from "react";

/** True once the page has scrolled past a small threshold — used to switch the navbar to its "stuck" (frosted) style. */
export function useStickyNav(threshold = 8) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isStuck;
}
