"use client";

import { useEffect } from 'react';

export function useScrollReveal() {
  // Сброс скролла наверх при первой загрузке и защита картинок от перетаскивания
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const preventImageDrag = (e) => {
      if (e.target?.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('dragstart', preventImageDrag);
    return () => {
      document.removeEventListener('dragstart', preventImageDrag);
    };
  }, []);

  // Плавное появление секций при попадании во вьюпорт
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up-elem').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

