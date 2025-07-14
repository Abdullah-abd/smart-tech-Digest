import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

const useInView = (
  options?: IntersectionObserverInit,
  observeOnce: boolean = true
): { ref: RefObject<HTMLElement | null>; isInView: boolean } => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // SSR fallback or unsupported browser
      setIsInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (observeOnce) observer.unobserve(entry.target);
      } else {
        if (!observeOnce) setIsInView(false);
      }
    }, options || { threshold: 0.1 });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options, observeOnce]);

  return { ref, isInView };
};

export default useInView;
