"use client";

import React, { useState, useEffect, useRef } from 'react';

// Модули данных (отдельно от компонентов)
import { INFINITY_TEMPLATES } from '@/data/infinityTemplates';
import { HORECA_CONFIG } from '@/data/horecaConfig';

// Структурные компоненты (Layout)
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

// Секции страницы (Sections)
import HeroSection from '@/components/sections/HeroSection';
import Showroom from '@/components/sections/Showroom';
import AboutSection from '@/components/sections/AboutSection';
import TechSection from '@/components/sections/TechSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';

// Интерактивные модальные окна (Modals)
import InfinityModal from '@/components/modals/InfinityModal';
import HorecaModal from '@/components/modals/HorecaModal';

// ==========================================
// ГЛОБАЛЬНЫЕ СТИЛИ КОМПОНЕНТА
// ==========================================
const styles = `
  html {
    background-color: #050505;
    color: #F3F4F6;
    overscroll-behavior-y: none;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #050505;
    color: #F3F4F6;
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    cursor: auto;
    font-family: var(--font-sans), sans-serif;
  }

  img {
    -webkit-user-drag: none;
    user-drag: none;
  }

  .font-serif {
    font-family: var(--font-serif), serif;
  }

  @media (hover: none) and (pointer: coarse) {
    body {
      cursor: auto !important;
    }
    .custom-cursor {
      display: none !important;
    }
  }

  ::selection {
    background: rgba(229, 9, 64, 0.35);
    color: #F3F4F6;
  }

  .custom-cursor {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    transform: translate3d(-100px, -100px, 0) translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.12);
    transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease;
    will-change: transform, width, height;
  }

  .custom-cursor::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 45%, transparent 70%);
    filter: blur(20px);
    pointer-events: none;
    transition: width 0.4s ease, height 0.4s ease, background 0.4s ease;
  }
  
  .custom-cursor.hover {
    width: 64px;
    height: 64px;
    border-color: rgba(255, 255, 255, 0.5);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, transparent 70%);
    box-shadow: 0 0 32px rgba(255, 255, 255, 0.18), inset 0 0 12px rgba(255, 255, 255, 0.08);
  }

  .custom-cursor.hover::before {
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 70%);
  }

  .bg-glow {
    position: fixed;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    filter: blur(150px);
    z-index: -1;
    opacity: 0.15;
    animation: float 20s infinite ease-in-out alternate;
    pointer-events: none;
  }
  .bg-glow.wine { background: radial-gradient(circle, #A1A1AA 0%, #3F3F46 70%); top: -10%; left: -10%; opacity: 0.16; }
  .bg-glow.cyan { background: radial-gradient(circle, #E4E4E7 0%, #52525B 70%); bottom: -20%; right: -10%; animation-delay: -5s; opacity: 0.14; }

  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(10%, 15%) scale(1.2); }
  }

  .glass-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    background-clip: padding-box;
    backdrop-filter: blur(28px) saturate(140%);
    -webkit-backdrop-filter: blur(28px) saturate(140%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.18);
    border-radius: 28px;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -10px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.25);
  }

  .equal-subcards-grid {
    display: grid;
    grid-auto-rows: 1fr;
  }

  .luxury-subcard {
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.015) 100%);
    background-clip: padding-box;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    height: 100%;
    transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .luxury-subcard:hover {
    border-color: rgba(255, 255, 255, 0.24);
    transform: translateY(-2px);
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: var(--mouse-y, -100px);
    left: var(--mouse-x, -100px);
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .glass-card:hover::before {
    opacity: 1;
  }
  
  .glass-content {
    position: relative;
    z-index: 1;
  }

  .hero-3d-wrapper {
    perspective: 650px;
    touch-action: pan-y;
    user-select: none;
    -webkit-user-select: none;
    width: 15rem;
    height: 20rem;
  }
  @media (min-width: 768px) {
    .hero-3d-wrapper {
      width: 16rem;
      height: 20rem;
    }
  }
  .hero-3d-element {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease;
    will-change: transform;
  }
  .hero-3d-element.is-idle {
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease;
    animation: heroIdleTilt 6s ease-in-out infinite alternate;
  }
  .hero-flip-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }
  .hero-card-face {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .hero-card-face.hero-card-front {
    transform: rotateY(0deg) translateZ(1px) !important;
  }
  .hero-card-face.hero-card-back {
    transform: rotateY(180deg) translateZ(1px) !important;
  }

  @keyframes heroIdleTilt {
    0% { transform: rotateY(-2.5deg) rotateX(2deg) translateY(0px); }
    50% { transform: rotateY(2.5deg) rotateX(-1.5deg) translateY(-2px); }
    100% { transform: rotateY(-1deg) rotateX(2.5deg) translateY(1px); }
  }

  .fade-up-elem {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.45s ease-out, transform 0.45s ease-out;
    will-change: opacity, transform;
  }
  .fade-up-elem.visible {
    opacity: 1;
    transform: translateY(0);
  }

  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function LandingPage() {
  const cursorRef = useRef(null);
  const mobileSwitcherRef = useRef(null);
  const pushTouchStartYRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Состояния модалок
  const [isHorecaModalOpen, setIsHorecaModalOpen] = useState(false);
  const [horecaMode, setHorecaMode] = useState('flagship'); // 'classic' | 'flagship'
  const [horecaIframeLoaded, setHorecaIframeLoaded] = useState(false);
  const [showTgPopup, setShowTgPopup] = useState(false);

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(INFINITY_TEMPLATES[0]);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Навигация и интерактив
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroInteracting, setIsHeroInteracting] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Контактная форма в футере
  const [contactValue, setContactValue] = useState('');
  const [isContactSent, setIsContactSent] = useState(false);

  const handleContactSubmit = () => {
    const trimmed = contactValue.trim();
    const targetUrl = trimmed
      ? `https://t.me/appseapro?text=${encodeURIComponent('Здравствуйте, Елена! Хочу обсудить проект: ' + trimmed)}`
      : 'https://t.me/appseapro';

    setIsContactSent(true);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsContactSent(false);
    }, 2000);
  };

  // Реалистичный звук переворота 3D-визитки (Web Audio API)
  const playCardFlipSound = () => {
    if (!isSoundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const duration = 0.22;
      const bufferSize = Math.floor(ctx.sampleRate * duration);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.setValueAtTime(2.2, now);
      filter.frequency.setValueAtTime(280, now);
      filter.frequency.exponentialRampToValueAtTime(1100, now + 0.09);
      filter.frequency.exponentialRampToValueAtTime(220, now + duration);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.18, now + 0.06);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      whiteNoise.start(now);
      whiteNoise.stop(now + duration);

      const osc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.08);

      clickGain.gain.setValueAtTime(0.14, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(clickGain);
      clickGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);

      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(15);
      }
    } catch (err) {
      // Игнорируем ошибку при ограничениях автовоспроизведения браузера
    }
  };

  const handleCardFlip = () => {
    playCardFlipSound();
    setIsCardFlipped(prev => !prev);
  };

  const handleToggleSound = (e) => {
    e.stopPropagation();
    setIsSoundEnabled(prev => !prev);
  };

  // Инициализация скролла и защита картинок
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      document.head.appendChild(meta);
    }
    meta.content = 'width=device-width, initial-scale=1.0';

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

  // Плавное GPU-позиционирование курсора
  useEffect(() => {
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    if (isTouchDevice) return;

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

  // Анимация появления секций при скролле (срабатывает заранее, чтобы блоки не прыгали)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '250px 0px', threshold: 0.05 });

    document.querySelectorAll('.fade-up-elem').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Блокировка фонового скролла при открытых модалках
  useEffect(() => {
    document.body.style.overflow = (isHorecaModalOpen || isGalleryModalOpen || isMobileMenuOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isHorecaModalOpen, isGalleryModalOpen, isMobileMenuOpen]);

  // Авто-центрирование выбранной ниши в мобильном свитчере
  useEffect(() => {
    if (!isGalleryModalOpen || !mobileSwitcherRef.current || !activeTemplate) return;
    const activeEl = mobileSwitcherRef.current.querySelector(`[data-niche-id="${activeTemplate.id}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeTemplate, isGalleryModalOpen]);

  // Таймер для Telegram push-уведомления (7 секунд)
  useEffect(() => {
    if (!isHorecaModalOpen) return;
    const tgTimer = setTimeout(() => {
      setShowTgPopup(true);
    }, 7000);
    return () => clearTimeout(tgTimer);
  }, [isHorecaModalOpen, horecaMode]);

  // Обработчики HoReCa
  const handleOpenHorecaDemo = (mode = 'flagship') => {
    const targetMode = mode === 'classic' ? 'classic' : 'flagship';
    setHorecaMode(targetMode);
    setHorecaIframeLoaded(false);
    setShowTgPopup(false);
    setIsHorecaModalOpen(true);
  };

  const handleSwitchHorecaMode = (mode) => {
    if (mode === horecaMode) return;
    setHorecaMode(mode);
    setHorecaIframeLoaded(false);
    setShowTgPopup(false);
  };

  const handleCloseHorecaDemo = () => {
    setIsHorecaModalOpen(false);
    setShowTgPopup(false);
    setHorecaIframeLoaded(false);
  };

  const handlePushTouchStart = (e) => {
    pushTouchStartYRef.current = e.touches?.[0]?.clientY ?? null;
  };

  const handlePushTouchMove = (e) => {
    if (pushTouchStartYRef.current === null) return;
    const currentY = e.touches?.[0]?.clientY ?? pushTouchStartYRef.current;
    if (currentY - pushTouchStartYRef.current < -18) {
      setShowTgPopup(false);
      pushTouchStartYRef.current = null;
    }
  };

  // Обработчики Infinity
  const handleOpenGallery = () => {
    setActiveTemplate(INFINITY_TEMPLATES[0]);
    setIframeLoaded(false);
    setIsGalleryModalOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryModalOpen(false);
    setIframeLoaded(false);
  };

  const handleSelectNiche = (tpl) => {
    if (activeTemplate?.id === tpl.id) return;
    setIframeLoaded(false);
    setActiveTemplate(tpl);
  };

  const handleStepNiche = (direction) => {
    const currentIndex = INFINITY_TEMPLATES.findIndex(t => t.id === (activeTemplate?.id || INFINITY_TEMPLATES[0].id));
    const nextIndex = (currentIndex + direction + INFINITY_TEMPLATES.length) % INFINITY_TEMPLATES.length;
    handleSelectNiche(INFINITY_TEMPLATES[nextIndex]);
  };

  // Интерактив стеклянных карточек
  const handleGlassMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    e.currentTarget.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

  // 3D-наклон Hero-визитки
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

  const currentTemplate = activeTemplate || INFINITY_TEMPLATES[0];
  const activeHorecaConfig = HORECA_CONFIG[horecaMode] || HORECA_CONFIG.flagship;

  return (
    <div className="antialiased min-h-screen text-[#F3F4F6] bg-[#050505] w-full">
      <style>{styles}</style>

      {/* Кастомный курсор и фоновое свечение */}
      <div ref={cursorRef} className="custom-cursor" />
      <div className="bg-glow wine"></div>
      <div className="bg-glow cyan"></div>

      {/* Верхнее меню */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onGlassMove={handleGlassMove}
      />

      {/* Полноэкранный кинематографичный оверлей мобильного меню */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Основной контент */}
      <main className="relative z-10 bg-[#050505] pb-10">
        
        {/* Первый экран (Hero) */}
        <HeroSection
          isHeroInteracting={isHeroInteracting}
          isCardFlipped={isCardFlipped}
          isSoundEnabled={isSoundEnabled}
          onCardFlip={handleCardFlip}
          onToggleSound={handleToggleSound}
          onHeroMove={handleHeroMove}
          onHeroLeave={handleHeroLeave}
        />

        {/* Витрина продуктов (Showroom) */}
        <Showroom
          onGlassMove={handleGlassMove}
          onOpenGallery={handleOpenGallery}
          onOpenHorecaDemo={handleOpenHorecaDemo}
        />

        {/* Блок «Привет, я Елена» (About) */}
        <AboutSection />

        {/* Блок «Технологии Превосходства» */}
        <TechSection onGlassMove={handleGlassMove} />

        {/* Блок отзывов клиентов (Social Proof) */}
        <ReviewsSection onGlassMove={handleGlassMove} />

        {/* Блок «Инвестиции в Капитал Бренда» */}
        <PricingSection
          onGlassMove={handleGlassMove}
          onOpenGallery={handleOpenGallery}
          onOpenHorecaDemo={handleOpenHorecaDemo}
        />

        {/* Частые вопросы (FAQ) */}
        <FaqSection />

      </main>

      {/* Футер контактов */}
      <Footer
        contactValue={contactValue}
        setContactValue={setContactValue}
        isContactSent={isContactSent}
        onContactSubmit={handleContactSubmit}
      />

      {/* Модальное окно 3D-Шоурума Infinity (9 ниш) */}
      <InfinityModal
        isOpen={isGalleryModalOpen}
        onClose={handleCloseGallery}
        templates={INFINITY_TEMPLATES}
        currentTemplate={currentTemplate}
        iframeLoaded={iframeLoaded}
        setIframeLoaded={setIframeLoaded}
        onSelectNiche={handleSelectNiche}
        onStepNiche={handleStepNiche}
        switcherRef={mobileSwitcherRef}
      />

      {/* Модальное окно Smart HoReCa */}
      <HorecaModal
        isOpen={isHorecaModalOpen}
        onClose={handleCloseHorecaDemo}
        horecaMode={horecaMode}
        onSwitchMode={handleSwitchHorecaMode}
        activeConfig={activeHorecaConfig}
        iframeLoaded={horecaIframeLoaded}
        setIframeLoaded={setHorecaIframeLoaded}
        showTgPopup={showTgPopup}
        setShowTgPopup={setShowTgPopup}
        onTouchStart={handlePushTouchStart}
        onTouchMove={handlePushTouchMove}
      />

    </div>
  );
}