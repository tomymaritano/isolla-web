'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        },
        { threshold }
      );

      observerRef.current.observe(node);
    }
  }, [threshold]);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { ref, isVisible };
}
