"use client";

import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef(null);

  // Плавное GPU-позиционирование курсора через requestAnimationFrame
  useEffect(() => {
    // Проверка наличия точного указателя (мышь/трекпад), исключая тач-экраны
    const isFinePointer = window.matchMedia ? window.matchMedia('(pointer: fine)').matches : !('ontouchstart' in window);
    if (!isFinePointer) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = null;
    let isInitialized = false;

    const renderLoop = () => {
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }

      if (Math.hypot(targetX - currentX, targetY - currentY) > 0.15) {
        rafId = requestAnimationFrame(renderLoop);
      } else {
        rafId = null;
      }
    };

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isInitialized) {
        currentX = targetX;
        currentY = targetY;
        isInitialized = true;
      }
      if (!rafId) {
        rafId = requestAnimationFrame(renderLoop);
      }
    };

    const checkHover = (e) => {
      if (!cursorRef.current) return;
      const isInteractive = !!e.target.closest('.interactive-elem, a, button, input, summary, details');
      cursorRef.current.classList.toggle('hover', isInteractive);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', checkHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Интерактив подсветки стеклянных карточек при наведении мыши
  const handleGlassMove = (e) => {
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    e.currentTarget.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

  return {
    cursorRef,
    handleGlassMove,
  };
}

