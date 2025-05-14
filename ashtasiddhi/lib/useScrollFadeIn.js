// lib/useScrollFadeIn.js
import { useEffect } from 'react';

export default function useScrollFadeIn() {
  useEffect(() => {
    const elems = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          o.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    elems.forEach(el => obs.observe(el));
  }, []);
}
