"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Shared carousel logic used by ProjectsSection, BlogSection, etc.
 *
 * @param count  Total number of cards
 */
export function useCarousel(count: number) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const programmaticRef = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dynamically resize trailing spacer so last card can snap to left edge
  useEffect(() => {
    function updateSpacer() {
      const el = scrollRef.current;
      const spacer = spacerRef.current;
      if (!el || !spacer) return;
      const firstCard = el.children[0] as HTMLElement | null;
      if (!firstCard) return;
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      const needed = el.clientWidth - firstCard.offsetWidth - paddingLeft;
      spacer.style.minWidth = `${Math.max(needed, 0)}px`;
    }
    requestAnimationFrame(updateSpacer);
    window.addEventListener("resize", updateSpacer);
    return () => window.removeEventListener("resize", updateSpacer);
  }, []);

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    programmaticRef.current = true;
    const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
    el.scrollTo({ left: card.offsetLeft - paddingLeft, behavior: "smooth" });
    setActiveIndex(index);
    setTimeout(() => { programmaticRef.current = false; }, 600);
  }

  function scroll(dir: "left" | "right") {
    const next =
      dir === "right"
        ? Math.min(activeIndex + 1, count - 1)
        : Math.max(activeIndex - 1, 0);
    scrollToIndex(next);
  }

  function handleScroll() {
    if (programmaticRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) { setActiveIndex(count - 1); return; }
      if (el.scrollLeft <= 4) { setActiveIndex(0); return; }
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      const children = Array.from(el.children).slice(0, count) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - paddingLeft - el.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    }, 80);
  }

  return {
    scrollRef,
    spacerRef,
    activeIndex,
    scrollToIndex,
    scroll,
    handleScroll,
  };
}
