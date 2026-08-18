"use client";

import { useEffect } from "react";

const revealGroups = [
  {
    selector: ".section-heading, .section-lead, .about-image-wrap, .contact-form",
    direction: "up",
  },
  {
    selector: ".about-copy > *, .testimonial > *, .contact-copy > *",
    direction: "up",
  },
  {
    selector: ".service-card, .steps article, .footer-main > *, .footer-bottom > *",
    direction: "up",
  },
];

export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animatedElements: HTMLElement[] = [];

    revealGroups.forEach(({ selector, direction }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.reveal = direction;
        element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
        animatedElements.push(element);
      });
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      animatedElements.forEach((element) => {
        element.classList.remove("is-visible");
        delete element.dataset.reveal;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
