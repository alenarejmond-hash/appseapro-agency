"use client";

import { useState } from 'react';

export function useHeroTilt() {
  const [isHeroInteracting, setIsHeroInteracting] = useState(false);

  // 3D-наклон Hero-визитки и расчёт светового блика
  const handleHeroMove = (e) => {
    setIsHeroInteracting(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const isTouch = !!e.touches;
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const clampedX = Math.max(-1.6, Math.min(1.6, x));
    const clampedY = Math.max(-1.6, Math.min(1.6, y));

    const maxTilt = isTouch ? 32 : 20;
    const rotY = clampedX * maxTilt;
    const rotX = -clampedY * maxTilt;

    const cardEl = e.currentTarget.querySelector('.hero-3d-element');
    if (cardEl) {
      cardEl.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) scale3d(1.05, 1.05, 1.05)`;
      cardEl.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
      cardEl.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
    }

    const glareEls = e.currentTarget.querySelectorAll('.hero-glare');
    glareEls.forEach(glareEl => {
      glareEl.style.opacity = '1';
      glareEl.style.transform = `translate3d(${clampedX * 45}%, ${clampedY * 45}%, 0)`;
    });
  };

  const handleHeroLeave = (e) => {
    setIsHeroInteracting(false);
    const cardEl = e.currentTarget.querySelector('.hero-3d-element');
    if (cardEl) {
      cardEl.style.transform = `rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    }
    const glareEls = e.currentTarget.querySelectorAll('.hero-glare');
    glareEls.forEach(glareEl => {
      glareEl.style.opacity = '0.35';
      glareEl.style.transform = `translate3d(0%, 0%, 0)`;
    });
  };

  return {
    isHeroInteracting,
    handleHeroMove,
    handleHeroLeave,
  };
}

