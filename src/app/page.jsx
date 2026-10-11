"use client";

import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// ГЛОБАЛЬНЫЕ СТИЛИ КОМПОНЕНТА
// Вставляем их прямо сюда, чтобы не ломать основной конфиг
// ==========================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

  html {
    background-color: #050505;
    color: #F3F4F6;
    overscroll-behavior-y: none; /* Отключаем обновление страницы свайпом вниз */
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
    cursor: auto; /* Системный нативный курсор всегда активен без задержек */
    font-family: 'Inter', sans-serif;
  }

  img {
    -webkit-user-drag: none;
    user-drag: none;
  }

  .font-serif {
    font-family: 'Playfair Display', serif;
  }

  /* Полностью отключаем кастомный ореол на мобильных и тач-устройствах */
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

  /* Премиальный фоновый ореол вокруг системного курсора (GPU translate3d без лагов) */
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
    border: 1px solid rgba(0, 245, 212, 0.35);
    background: radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, rgba(0, 245, 212, 0) 70%);
    box-shadow: 0 0 24px rgba(0, 245, 212, 0.2), inset 0 0 12px rgba(0, 245, 212, 0.1);
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
    background: radial-gradient(circle, rgba(0, 245, 212, 0.12) 0%, rgba(229, 9, 64, 0.04) 45%, transparent 70%);
    filter: blur(20px);
    pointer-events: none;
    transition: width 0.4s ease, height 0.4s ease, background 0.4s ease;
  }
  
  .custom-cursor.hover {
    width: 64px;
    height: 64px;
    border-color: rgba(229, 9, 64, 0.55);
    background: radial-gradient(circle, rgba(229, 9, 64, 0.16) 0%, rgba(229, 9, 64, 0) 72%);
    box-shadow: 0 0 36px rgba(229, 9, 64, 0.32), inset 0 0 16px rgba(229, 9, 64, 0.15);
  }

  .custom-cursor.hover::before {
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(229, 9, 64, 0.18) 0%, rgba(0, 245, 212, 0.05) 45%, transparent 70%);
  }

  /* Фоновые градиенты (Glow) */
  .bg-glow {
    position: fixed;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    filter: blur(150px);
    z-index: -1;
    opacity: 0.4;
    animation: float 20s infinite ease-in-out alternate;
    pointer-events: none;
  }
  .bg-glow.wine { background: #E50940; top: -10%; left: -10%; }
  .bg-glow.cyan { background: #00F5D4; bottom: -20%; right: -10%; animation-delay: -5s; }

  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(10%, 15%) scale(1.2); }
  }

  /* Продвинутый Glassmorphism Карточек */
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

  /* Сетка с одинаковой высотой всех карточек даже в 1 колонку на мобильных */
  .equal-subcards-grid {
    display: grid;
    grid-auto-rows: 1fr;
  }

  /* Премиальные подкарточки в едином бутиковом стиле */
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

  /* Эффект фонарика под стеклом при наведении */
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

  /* 3D элемент в Hero (повышенная отзывчивость и фиксация на месте при развороте) */
  .hero-3d-wrapper {
    perspective: 650px;
    touch-action: none;
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
    0% { transform: rotateY(-8deg) rotateX(6deg) translateY(0px); }
    50% { transform: rotateY(8deg) rotateX(-5deg) translateY(-6px); }
    100% { transform: rotateY(-4deg) rotateX(8deg) translateY(2px); }
  }

  /* Нативные анимации появления */
  .fade-up-elem {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .fade-up-elem.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Скрытие маркера details */
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
`;

export default function LandingPage() {
  const cursorRef = useRef(null);
  const [isHorecaModalOpen, setIsHorecaModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroInteracting, setIsHeroInteracting] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Том Ям с креветками', desc: 'Острота: средняя', price: 850 },
    { id: 2, name: 'Стейк Рибай', desc: 'Прожарка: Medium', price: 2100 },
    { id: 3, name: 'Капучино на миндальном', desc: 'Объем: 300мл', price: 350 }
  ]);
  const [sandboxCart, setSandboxCart] = useState([]);
  const [tgMessages, setTgMessages] = useState([]);
  
  const audioCtxRef = useRef(null);

  // Реалистичный звук переворота 3D-визитки (Web Audio API)
  const playCardFlipSound = () => {
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

      // 1. Мягкий воздушный шелест (whoosh) при развороте грани
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

      // 2. Благородный тактильный щелчок фиксации
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
      // Игнорируем ошибку, если браузер заблокировал автовоспроизведение аудио
    }
  };

  const handleCardFlip = () => {
    playCardFlipSound();
    setIsCardFlipped(prev => !prev);
  };

  // Старт страницы строго с самого верха + доступный нативный зум (WCAG) + защита картинок от перетаскивания
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

  // Прямое GPU-позиционирование фонового ореола курсора через requestAnimationFrame (без ре-рендеров React)
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up-elem').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isHorecaModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isHorecaModalOpen]);

  const handleGlassMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    e.currentTarget.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

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

    // На мобильных делаем карточку гораздо более подвижной и объемной
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

  const handlePriceChange = (id, newPrice) => {
    setMenuItems(items => items.map(item => item.id === id ? { ...item, price: Number(newPrice) || 0 } : item));
  };
  
  const handleAddToCart = (item) => {
    setSandboxCart([...sandboxCart, item]);
  };
  
  const handleSandboxOrder = () => {
    if (sandboxCart.length === 0) return;
    const total = sandboxCart.reduce((sum, item) => sum + item.price, 0);
    const msg = {
      id: Date.now(),
      total,
      items: [...sandboxCart]
    };
    setTgMessages(prev => [msg, ...prev]);
    setSandboxCart([]);
  };

  return (
    <div className="antialiased min-h-screen text-[#F3F4F6] bg-[#050505] w-full">
      <style>{styles}</style>

      <div ref={cursorRef} className="custom-cursor" />
      <div className="bg-glow wine"></div>
      <div className="bg-glow cyan"></div>

      <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050505]/70 border-b border-white/5 py-4 px-4 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileMenuOpen(false); }}>
            AppSea<span className="text-[#E50940] italic">Pro</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
            <a href="#showroom" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Продукты</a>
            <a href="#nfc" className="hover:text-[#F3F4F6] transition-colors interactive-elem">NFC Брелоки</a>
            <a href="#about" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Подход</a>
            <a href="#investments" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Инвестиции</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }} className="glass-card px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-white/10 transition-colors interactive-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <span className="glass-content">Связаться</span>
            </button>

            {/* Кнопка мобильного меню */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
              className={`md:hidden glass-card w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 interactive-elem cursor-pointer ${
                isMobileMenuOpen
                  ? 'border-white/30 text-white'
                  : 'border-white/10 text-white/80 hover:text-white'
              }`}
            >
              <span className="glass-content flex flex-col justify-center items-center w-4 h-4 relative">
                <span className={`block w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[1.5px]' : '-translate-y-1'}`}></span>
                <span className={`block w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1.5px]' : 'translate-y-1'}`}></span>
              </span>
            </button>
          </div>
        </div>

        {/* Выпадающее мобильное меню в бутиковом стиле (Apple / Balenciaga / Porsche) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? 'max-h-[460px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          <nav className="glass-card px-6 py-5 rounded-[24px] border border-white/10 bg-[#08080A]/95 backdrop-blur-2xl shadow-[0_28px_60px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <div className="flex flex-col">
              <a
                href="#showroom"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 py-4 border-b border-white/5 group transition-colors active:opacity-70"
              >
                <span className="text-xs font-light tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors w-6 shrink-0">01.</span>
                <span className="font-serif text-lg sm:text-xl text-[#F3F4F6] group-hover:text-white tracking-wide text-left">Продукты и визитки</span>
              </a>

              <a
                href="#nfc"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 py-4 border-b border-white/5 group transition-colors active:opacity-70"
              >
                <span className="text-xs font-light tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors w-6 shrink-0">02.</span>
                <span className="font-serif text-lg sm:text-xl text-[#F3F4F6] group-hover:text-white tracking-wide text-left">NFC Брелоки Crazy Horse</span>
              </a>

              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 py-4 border-b border-white/5 group transition-colors active:opacity-70"
              >
                <span className="text-xs font-light tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors w-6 shrink-0">03.</span>
                <span className="font-serif text-lg sm:text-xl text-[#F3F4F6] group-hover:text-white tracking-wide text-left">Подход и технологии</span>
              </a>

              <a
                href="#investments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 py-4 border-b border-white/5 group transition-colors active:opacity-70"
              >
                <span className="text-xs font-light tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors w-6 shrink-0">04.</span>
                <span className="font-serif text-lg sm:text-xl text-[#F3F4F6] group-hover:text-white tracking-wide text-left">Инвестиции (Цены)</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
              className="mt-5 w-full py-3.5 px-5 rounded-xl bg-white text-black hover:bg-gray-200 active:scale-[0.99] transition-all text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <span>Написать лично в Telegram ➔</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-[#050505] mb-[60vh] md:mb-[70vh] shadow-[0_20px_50px_rgba(0,0,0,1)] rounded-b-[2rem] md:rounded-b-[3rem] border-b border-white/10 pb-10">
        
        <section className="min-h-screen flex flex-col items-center justify-start md:justify-center relative px-4 md:px-6 pt-24 md:pt-24 pb-16 md:pb-0">
          <div className="max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-start md:justify-center items-center w-full pt-2 md:pt-0 pb-14 md:pb-28">
            <p className="text-[#00F5D4] text-xs md:text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 fade-up-elem" style={{ transitionDelay: '0s' }}>
              Digital Boutique
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-5 md:mb-6 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
              Ваш цифровой <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#E50940] to-[#ff2a60]">статус</span>.
            </h1>

            <div className="max-w-2xl mx-auto mb-6 md:mb-8 fade-up-elem px-2" style={{ transitionDelay: '0.2s' }}>
              <p className="text-[#F3F4F6] text-lg sm:text-xl md:text-2xl font-serif tracking-wide mb-4 md:mb-5">
                Премиальные бизнес-экосистемы. <span className="italic text-[#D4D4D8]">Под ключ.</span>
              </p>

              {/* Монохромные стеклянные пилюли («тихая роскошь») */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <a
                  href="#product-pwa"
                  className="px-4 sm:px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs sm:text-sm text-[#D4D4D8] hover:text-white hover:bg-white/[0.09] hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300 tracking-wide interactive-elem cursor-pointer"
                >
                  Экспертам
                </a>

                <a
                  href="#product-horeca"
                  className="px-4 sm:px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs sm:text-sm text-[#D4D4D8] hover:text-white hover:bg-white/[0.09] hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300 tracking-wide interactive-elem cursor-pointer"
                >
                  Ресторанам
                </a>

                <a
                  href="#product-beauty"
                  className="px-4 sm:px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs sm:text-sm text-[#D4D4D8] hover:text-white hover:bg-white/[0.09] hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300 tracking-wide interactive-elem cursor-pointer"
                >
                  Бьюти
                </a>
              </div>
            </div>

            <div 
              className="hero-3d-wrapper w-60 h-80 md:w-64 md:h-80 mx-auto mt-2 md:mt-4 mb-8 md:mb-10 fade-up-elem cursor-pointer relative z-20" 
              style={{ transitionDelay: '0.3s' }}
              onClick={handleCardFlip}
              onMouseMove={handleHeroMove}
              onMouseLeave={handleHeroLeave}
              onTouchStart={handleHeroMove}
              onTouchMove={handleHeroMove}
              onTouchEnd={handleHeroLeave}
              onTouchCancel={handleHeroLeave}
            >
              <div className={`hero-3d-element ${!isHeroInteracting ? 'is-idle' : ''} w-full h-full relative interactive-elem`}>
                <div
                  className="hero-flip-inner w-full h-full relative"
                  style={{ transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Лицевая сторона визитки */}
                  <div className="hero-card-face hero-card-front glass-card flex items-center justify-center rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(229,9,64,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)] overflow-hidden group">
                    {/* Динамический световой блик при наклоне */}
                    <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28)_0%,rgba(229,9,64,0.12)_35%,transparent_70%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="glass-content text-center px-6" style={{ transform: 'translateZ(35px)' }}>
                      <div className="w-16 h-16 rounded-full border border-[#E50940]/60 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#E50940]/25 to-black/60 text-[#E50940] shadow-[0_0_25px_rgba(229,9,64,0.35)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                      </div>
                      <h3 className="font-serif text-xl text-white tracking-wide">AppSeaPro</h3>
                      <p className="text-xs text-[#D4D4D8] mt-2 uppercase tracking-widest">Digital Agency</p>
                    </div>
                  </div>

                  {/* Обратная сторона визитки с фотографией */}
                  <div className="hero-card-face hero-card-back glass-card rounded-[2rem] border border-white/25 shadow-[0_25px_60px_rgba(229,9,64,0.28),inset_0_1px_1px_rgba(255,255,255,0.35)] overflow-hidden">
                    <img
                      src="elena-photo.jpg"
                      alt="Елена — IT-Архитектор"
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent"></div>
                    <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26)_0%,rgba(229,9,64,0.12)_35%,transparent_70%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                    <div className="absolute bottom-5 left-4 right-4 text-center z-10">
                      <h3 className="font-serif text-xl text-white tracking-wide drop-shadow-md">Елена</h3>
                      <p className="text-[10px] text-[#00F5D4] mt-1 uppercase tracking-widest font-medium">IT-Архитектор</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 fade-up-elem z-10" style={{ transitionDelay: '0.5s' }}>
            <span className="text-xs tracking-widest uppercase text-[#A1A1AA]">Scroll</span>
            <div className="w-px h-10 md:h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* Showroom */}
        <section id="showroom" className="pt-24 md:pt-32 pb-0 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-24 fade-up-elem text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Выберите свое <span className="italic text-[#00F5D4]">Решение</span></h2>
            <p className="text-[#D4D4D8] text-base md:text-lg max-w-lg mx-auto">Безупречная эстетика и функциональность в каждом продукте. Разработано специально под вашу нишу.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Карточка 01: Цифровые PWA-визитки */}
            <div id="product-pwa" className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.14)_0%,transparent_55%)] pointer-events-none"></div>
              <div className="glass-content flex-1 z-10 text-left w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E50940]/10 border border-[#E50940]/30 text-[#E50940] text-[11px] uppercase tracking-widest font-semibold">
                    Для предпринимателей и экспертов
                  </span>
                  <span className="font-serif italic text-white/25 text-lg md:text-xl">01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">Цифровые PWA-визитки</h3>
                <p className="text-[#D4D4D8] mb-8 text-sm md:text-base max-w-2xl leading-relaxed">Устанавливаются на рабочий стол телефона как приложение в один клик. БЕЗ скачивания из App Store или Google Play. Ваш статус и контакты всегда под рукой.</p>
                
                <div className="equal-subcards-grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-5 text-left">
                   {/* Classic */}
                   <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start group">
                      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center text-white shadow-inner shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"></path></svg>
                          </div>
                          <h4 className="text-white font-serif text-lg tracking-wide">Classic</h4>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4D4D8] font-medium shrink-0">VCF • QR</span>
                      </div>
                      <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Лаконичная визитка. 7 премиальных дизайн-тем, мультиязычность, кинематографичные анимации и умное сохранение VCF контакта прямо в телефонную книгу.</p>
                   </div>

                   {/* Infinity */}
                   <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start group border-[#00F5D4]/25">
                      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.14)_0%,transparent_60%)] pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5D4]/25 to-[#00F5D4]/5 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.2)] shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                          </div>
                          <h4 className="text-white font-serif text-lg tracking-wide">Infinity</h4>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-semibold shrink-0">3D • Sound</span>
                      </div>
                      <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Интерактивная 3D-визитка с переворотом, звуком и тактильным откликом. На обороте: блок доверия, прайс и смарт-кнопки. Адаптация под любую нишу.</p>
                   </div>

                   {/* Twin ID */}
                   <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start group border-[#E50940]/40 bg-gradient-to-br from-[#E50940]/15 via-[#E50940]/5 to-transparent shadow-[0_15px_35px_rgba(229,9,64,0.15),inset_0_1px_0_rgba(255,255,255,0.22)]">
                      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.22)_0%,transparent_60%)] pointer-events-none"></div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50940] to-[#9e062c] border border-white/25 flex items-center justify-center text-white shadow-[0_0_20px_rgba(229,9,64,0.45)] shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                          </div>
                          <h4 className="text-white font-serif text-lg tracking-wide">Twin ID</h4>
                        </div>
                        <span className="bg-[#E50940] text-white text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider shadow-[0_0_12px_rgba(229,9,64,0.5)] shrink-0">EXCLUSIVE</span>
                      </div>
                      <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Авторская разработка: Личный и Рабочий профиль в одном. Умная авто-смена стороны по времени суток и секретный Z-жест для вызова Facecontrol.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Карточка 02: Smart QR-Меню */}
            <div id="product-horeca" className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row-reverse items-center gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} onClick={() => setIsHorecaModalOpen(true)} style={{ transitionDelay: '0.1s' }}>
              <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_left,rgba(0,245,212,0.14)_0%,transparent_55%)] pointer-events-none"></div>
              <div className="glass-content flex-1 z-10 text-left w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-[11px] uppercase tracking-widest font-semibold">
                    Для ресторанов и кафе
                  </span>
                  <span className="font-serif italic text-white/25 text-lg md:text-xl">02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">Smart <span className="italic text-[#00F5D4]">QR-Меню</span></h3>
                <p className="text-[#D4D4D8] text-sm md:text-base mb-8 max-w-2xl leading-relaxed">Интуитивная облачная панель управления. Все заказы, вызовы официанта и запросы счета моментально прилетают в Telegram-группу персонала.</p>
                
                <div className="equal-subcards-grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 md:gap-5 text-left">
                  <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start border-[#00F5D4]/25">
                     <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.14)_0%,transparent_60%)] pointer-events-none"></div>
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5D4]/25 to-[#00F5D4]/5 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)] shrink-0">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                         </div>
                         <h4 className="text-white text-lg font-serif">Классика</h4>
                       </div>
                       <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-medium shrink-0">Instant Call</span>
                     </div>
                     <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Бесконтактное меню с кинематографичным дизайном. Мультиязычность, умный стоп-лист блюд и плавная навигация. Мгновенный вызов официанта и запрос счета в 1 клик с тактильным откликом.</p>
                  </div>

                  <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start border-[#E50940]/40 bg-gradient-to-br from-[#E50940]/15 via-[#E50940]/5 to-transparent shadow-[0_15px_35px_rgba(229,9,64,0.12),inset_0_1px_0_rgba(255,255,255,0.2)]">
                     <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.2)_0%,transparent_60%)] pointer-events-none"></div>
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50940]/30 to-[#E50940]/10 border border-[#E50940]/50 flex items-center justify-center text-[#E50940] shadow-[0_0_18px_rgba(229,9,64,0.3)] shrink-0">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                         </div>
                         <h4 className="text-white text-lg font-serif">Флагман</h4>
                       </div>
                       <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#E50940]/20 border border-[#E50940]/40 text-[#E50940] font-bold shrink-0">PRO • AI Sell</span>
                     </div>
                     <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Полноценная автоматизация с умными допродажами (Cross-sell). Гость собирает корзину, оставляет комментарии повару и оформляет заказ. Умный QR-код сам определяет номер столика.</p>
                  </div>
                </div>

                <div className="mt-7 flex justify-start">
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#00F5D4]/20 via-white/10 to-white/5 hover:from-[#00F5D4]/30 hover:to-white/15 rounded-2xl text-sm font-medium text-white transition-all border border-[#00F5D4]/40 shadow-[0_10px_25px_rgba(0,245,212,0.15)] flex items-center justify-center gap-2">
                    <span>Попробовать песочницу ➔</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Карточка 03: Эстетика и Онлайн-запись */}
            <div id="product-beauty" className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
               <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(229,9,64,0.1)_0%,transparent_55%)] pointer-events-none"></div>
               
               <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 group">
                 <img src="beauty-bg.jpg" alt="Beauty Spa" draggable={false} className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 group-hover:scale-100 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-[11px] text-[#D4D4D8]">
                   <span>Beauty & SPA Ecosystem</span>
                   <span className="text-pink-300 font-semibold">24/7 Live</span>
                 </div>
               </div>
               
               <div className="glass-content flex-1 z-10 text-left w-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-pink-300/25 text-pink-300 text-[11px] uppercase tracking-widest font-semibold">
                    Салоны & Мастера
                  </span>
                  <span className="font-serif italic text-white/25 text-lg md:text-xl">03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">Эстетика и <span className="italic text-pink-300">Онлайн-запись</span></h3>
                <p className="text-[#D4D4D8] text-sm md:text-base mb-8 max-w-2xl leading-relaxed">Premium визитка-лендинг с умным онлайн-бронированием. Идеальная синхронизация с вашим расписанием без диких ежемесячных комиссий агрегаторам.</p>
                
                <div className="equal-subcards-grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 md:gap-5 text-left">
                   <div className="luxury-subcard p-6 h-full min-h-[168px] flex flex-col justify-start border-white/12">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400/20 to-white/5 border border-pink-300/30 flex items-center justify-center text-pink-300 shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h4 className="text-white text-base md:text-lg font-serif">Smart-бронирование</h4>
                      </div>
                      <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Live-календарь с умным поиском свободных окон, расчетом времени услуг и автоматическим режимом «предупреждение об отпуске».</p>
                   </div>
                   <div className="luxury-subcard p-6 h-full min-h-[168px] flex flex-col justify-start border-white/12">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400/20 to-white/5 border border-pink-300/30 flex items-center justify-center text-pink-300 shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        </div>
                        <h4 className="text-white text-base md:text-lg font-serif">Дизайн & Telegram-забота</h4>
                      </div>
                      <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">Уникальный дизайн, настроенный под ваш бренд. Мгновенные уведомления о записях и заботливая утренняя Telegram-сводка вашего расписания на день за чашкой кофе.</p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* NFC Breloq */}
        <section id="nfc" className="pt-8 pb-24 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-24">
          <div className="glass-card p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 interactive-elem fade-up-elem overflow-hidden cursor-pointer border-white/15" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.09)_0%,transparent_55%)] pointer-events-none"></div>

            <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 group">
               <img src="nfc-keychain.jpg" alt="Leather NFC Keychain" draggable={false} className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 group-hover:scale-100 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-[11px] text-[#D4D4D8]">
                 <span>Handcrafted Leather</span>
                 <span className="text-amber-400/90 font-semibold">NFC Inside</span>
               </div>
            </div>
            
            <div className="glass-content w-full lg:w-7/12 z-10 text-left flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/25 text-amber-400/90 text-[11px] uppercase tracking-widest font-semibold">
                  Физический носитель
                </span>
                <span className="font-serif italic text-white/25 text-lg md:text-xl">04</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">NFC-брелоки <br className="hidden lg:block"/>из кожи <span className="italic text-amber-400/90">Crazy Horse</span></h3>
              <p className="text-[#D4D4D8] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                Физическое воплощение вашего цифрового статуса. Я вручную шью премиальные NFC-брелоки из натуральной винтажной кожи для каждой визитки. Одно касание брелоком к смартфону партнера — и ваши контакты уже на его экране.
              </p>
              
              <ul className="equal-subcards-grid grid-cols-1 auto-rows-fr gap-3.5 mb-0 text-sm text-[#D4D4D8] text-left">
                 <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                   <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                   </div>
                   <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Полная автономность:</strong> внутри зашит чип, который работает без батареек и его не нужно заряжать.</span>
                 </li>
                 <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                   <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l-7-7m7 7L5 19m7-7l7-7"></path></svg>
                   </div>
                   <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Ручная работа:</strong> каждый брелок кроится и прошивается вручную седельным швом.</span>
                 </li>
                 <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                   <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                   </div>
                   <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Безупречный статус:</strong> винтажная кожа красиво стареет, покрываясь благородной патиной.</span>
                 </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="glass-card p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 interactive-elem fade-up-elem">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-[#00F5D4]/30 overflow-hidden shrink-0 shadow-[0_0_30px_rgba(0,245,212,0.15)] p-2 group">
              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                 <img src="elena-photo.jpg" alt="Айти-архитектор" draggable={false} className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="text-center lg:text-left glass-content">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Привет, я Елена</h2>
              <p className="text-[#00F5D4] font-medium tracking-widest text-xs uppercase mb-6">IT-Архитектор</p>
              <p className="text-[#D4D4D8] text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                Я проектирую премиальные IT-экосистемы и занимаюсь кастомной веб-разработкой. Моя главная цель — создавать цифровые продукты, подчеркивающие статус владельца. Продукты, которые не стыдно показать на закрытой встрече или бизнес-ужине. 
                При этом вы получаете технологии уровня корпораций <strong className="text-white">без вытягивания денег за кабальные подписки</strong>. Управление происходит через интуитивную панель и Telegram. Это логично, дорого выглядит и не требует найма IT-специалиста.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Размещение под ключ</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Индивидуальный дизайн</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Интуитивная система управления</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section id="technology" className="py-12 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Технологии <span className="italic text-[#E50940]">Превосходства</span></h2>
            <p className="text-[#D4D4D8] text-base md:text-lg">Мы не используем конструкторы вроде Tilda. Только чистый код и передовые архитектуры.</p>
          </div>

          <div className="equal-subcards-grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-6">
            <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#E50940]/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#E50940] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">Технология PWA</h4>
                <p className="text-[#D4D4D8] text-sm leading-relaxed">Без App Store и Google Play. Иконка вашего бизнеса устанавливается за 1 секунду по прямой ссылке прямо в телефон.</p>
              </div>
            </div>

            <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:border-[#00F5D4]/50 transition-all duration-300">
                  <svg className="w-10 h-10 text-[#00F5D4] absolute bottom-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">100/100 PageSpeed</h4>
                <p className="text-[#D4D4D8] text-sm leading-relaxed">Чистая архитектура. Ваш цифровой продукт загружается и работает быстрее, чем клиент успеет моргнуть.</p>
              </div>
            </div>

            <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">Размещение под ключ</h4>
                <p className="text-[#D4D4D8] text-sm leading-relaxed">Предоставляем готовый продукт на нашем поддомене или помогаем с интеграцией вашего премиального домена.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="investments" className="py-24 md:py-32 px-4 md:px-8 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Инвестиции в <span className="italic text-[#00F5D4]">Капитал Бренда</span></h2>
            <p className="text-[#D4D4D8] text-base md:text-lg max-w-xl mx-auto">Разовая оплата за разработку. Никаких скрытых ежемесячных платежей.</p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
            
            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider">PWA Визитка</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Classic</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-white">от $150</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>7 премиальных дизайн-концептов</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Встроенная мультиязычность</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Кинематографичные анимации</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умный шеринг (QR и VCF)</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#00F5D4] text-xs font-semibold uppercase tracking-wider">PWA Визитка</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Infinity</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-[#00F5D4]">от $300</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Интерактивная 3D-архитектура (2 стороны)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Вау-эффекты: звук переворота и вибрация</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Блок доверия (услуги и прайс на обороте)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Адаптация под любую нишу (Врачи, Риелторы)</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full py-3 rounded-xl border border-[#00F5D4]/30 hover:bg-[#00F5D4]/10 transition-colors text-sm font-semibold text-white">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-[#E50940]/40 shadow-[0_0_30px_rgba(229,9,64,0.15)] relative interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#E50940] rounded-b-lg shadow-[0_0_20px_#E50940]"></div>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#E50940] text-xs font-semibold uppercase tracking-wider">Эксклюзив</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Twin ID</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-white">от $500</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Два независимых профиля в одном приложении</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умная автосмена стороны по времени суток</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Секретный Z-жест владельца для Facecontrol</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Раздельные базы контактов (VCF) и соцсети</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.3s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-2">Для ресторанов</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Smart HoReCa</h3>
                <div className="flex flex-col gap-2 mb-6 text-left max-w-xs mx-auto w-full">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-[#D4D4D8]">Классика</span>
                    <span className="font-serif text-xl">от $400</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm text-[#D4D4D8]">Флагман</span>
                    <span className="font-serif text-xl text-[#00F5D4]">от $800</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1 text-left">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Интеллектуальные допродажи (Cross-sell)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Сборка заказов с комментариями повару</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умная привязка к столику через QR-код</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Защита от спам-вызовов и тактильный отклик</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Мультиязычность и Telegram-оповещения</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Обсудить проект</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.4s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider mb-2">Салоны и Мастера</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Beauty & SPA</h3>
                <div className="mb-4"><span className="text-3xl font-serif">от $450</span></div>
                <p className="text-sm text-[#D4D4D8] mb-4">Premium PWA-лендинг с онлайн-бронированием. Идеальный инструмент без комиссий.</p>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1 text-left max-w-sm mx-auto">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Live-поиск свободных окон и умный режим «Отпуск»</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Сборка проекта в 1 из 6 уникальных визуальных тем</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Мультиязычность для клиентов (RU, EN, AM)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Заботливая утренняя Telegram-сводка вашего расписания на день за чашкой кофе</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Обсудить проект</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.5s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider mb-2">Физический носитель</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">NFC Брелок</h3>
                <div className="mb-4"><span className="text-3xl font-serif text-white">от $60</span></div>
                <p className="text-sm text-[#D4D4D8] mb-4">Кожа Crazy Horse. Идеальное дополнение к вашей цифровой визитке.</p>
                
                <ul className="space-y-3 mb-6 text-sm text-[#D4D4D8] flex-1 text-left max-w-sm mx-auto w-full">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong className="text-white">Одно касание:</strong> передача контактов без проводов</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong className="text-white">Вечный чип:</strong> работает без батареек и зарядок</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong className="text-white">Ручная работа:</strong> каждый экземпляр шьется индивидуально</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong className="text-white">Статусность:</strong> винтажная кожа благородно стареет</span></li>
                </ul>

                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Заказать</button>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-up-elem">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Частые <span className="italic text-[#00F5D4]">Вопросы</span></h2>
          </div>
          <div className="space-y-4 fade-up-elem">
             <details className="glass-card p-6 cursor-pointer group interactive-elem">
               <summary className="font-medium text-lg outline-none flex justify-between items-center">
                 Есть ли ежемесячная абонентская плата?
                 <span className="text-2xl group-open:rotate-45 transition-transform text-[#00F5D4]">+</span>
               </summary>
               <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Нет. Мой главный принцип — вы платите один раз за разработку и настройку продукта под ключ. Вы не подсаживаетесь на иглу сервисов по подписке. Продукт полностью ваш навсегда.</p>
             </details>
             <details className="glass-card p-6 cursor-pointer group interactive-elem">
               <summary className="font-medium text-lg outline-none flex justify-between items-center">
                 Кому принадлежит сайт и база клиентов?
                 <span className="text-2xl group-open:rotate-45 transition-transform text-[#00F5D4]">+</span>
               </summary>
               <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Полностью вам. Приложение разворачивается на надежном хостинге, а все данные и заказы поступают в вашу интуитивную систему управления и Telegram, доступ к которым есть только у вас.</p>
             </details>
             <details className="glass-card p-6 cursor-pointer group interactive-elem">
               <summary className="font-medium text-lg outline-none flex justify-between items-center">
                 Как мне менять цены или добавлять услуги?
                 <span className="text-2xl group-open:rotate-45 transition-transform text-[#00F5D4]">+</span>
               </summary>
               <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Через вашу персональную облачную панель управления. Вы заходите в неё с телефона или компьютера, меняете цифру, и она моментально обновляется в приложении. Никакого программирования.</p>
             </details>
          </div>
        </section>

      </main>

      {/* Footer (Curtain Reveal) */}
      <footer id="contact" className="fixed bottom-0 left-0 w-full h-[60vh] md:h-[70vh] bg-[#050505] flex flex-col justify-between p-6 md:p-12 z-0 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center text-center mt-12 md:mt-10 flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-medium mb-6 md:mb-8">
            Начнем <span className="italic text-[#E50940]">проект</span>?
          </h2>
          
          <div className="w-full max-w-md relative interactive-elem">
            <input 
              type="text" 
              placeholder="Ваш Telegram или Телефон" 
              className="w-full min-h-[44px] bg-[#121212] border border-white/10 rounded-full py-3 md:py-4 pl-6 pr-28 md:pr-32 text-sm md:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white text-black px-4 md:px-6 rounded-full font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Отправить
            </button>
          </div>
          <p className="text-xs text-[#D4D4D8] mt-4 md:mt-6">Или напишите мне напрямую в Telegram для быстрой связи.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#A1A1AA] max-w-7xl w-full mx-auto pt-8 md:pb-4 gap-4 md:gap-0">
          <span>&copy; 2026 AppSeaPro. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Telegram</a>
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Sandbox Modal */}
      {isHorecaModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 fade-up-elem visible !overflow-y-auto overscroll-contain" style={{ transitionDuration: '0.3s' }}>
           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm fixed" onClick={() => setIsHorecaModalOpen(false)}></div>
           <div className="glass-card relative w-full max-w-7xl my-auto p-6 md:p-10 z-10 flex flex-col border border-white/20 shadow-[0_0_50px_rgba(0,245,212,0.1)] custom-scrollbar">
              
              <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
              `}</style>

              <button onClick={() => setIsHorecaModalOpen(false)} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors interactive-elem p-2 z-20 bg-black/50 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <div className="text-center mb-10 mt-2">
                <span className="text-[#00F5D4] text-xs uppercase tracking-widest font-semibold mb-2 block">Smart HoReCa</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Цифровизация ресторанов без абонплат</h3>
                <p className="text-[#D4D4D8] text-sm md:text-base max-w-2xl mx-auto">Интуитивная облачная панель управления. Вы меняете цены в панели — они меняются в приложении. Гость делает заказ — официант видит его в Telegram.</p>
              </div>

              <div className="border-t border-white/10 pt-10 pb-6">
                <h4 className="text-2xl font-serif text-center mb-2">Интерактивная Песочница</h4>
                <p className="text-center text-sm text-[#D4D4D8] mb-8">Умные допродажи и корзина: попробуйте сами поменять цену, добавить блюдо и оформить заказ.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#080808] rounded-3xl p-6 md:p-8 border border-white/5 relative">
                  
                  <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00F5D4]/20 via-[#00F5D4] to-white/20 z-0 opacity-40"></div>

                  <div className="flex-1 border border-[#00F5D4]/30 rounded-[2rem] bg-[#0A0A0A] text-white overflow-hidden relative z-10 shadow-[0_0_30px_rgba(0,245,212,0.1)] flex flex-col mx-auto w-full max-w-sm">
                      <div className="bg-black/50 backdrop-blur-md py-3 px-4 flex items-center gap-2 border-b border-white/10">
                        <svg className="w-5 h-5 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        <span className="text-xs font-bold text-white tracking-wider">ПАНЕЛЬ УПРАВЛЕНИЯ</span>
                      </div>
                      <div className="p-5 flex-1 bg-[#080808]">
                          <p className="text-[11px] text-[#00F5D4] mb-4 font-medium uppercase tracking-wider">Управление ценами</p>
                          <div className="space-y-3">
                            {menuItems.map(item => (
                               <div key={item.id} className="bg-white/5 p-3 rounded-xl border border-white/10 shadow-sm transition-all hover:border-[#00F5D4]/30">
                                 <div className="text-xs font-semibold text-white mb-2">{item.name}</div>
                                 <div className="flex items-center gap-2">
                                    <span className="text-xs text-[#D4D4D8]">Цена (₽):</span>
                                    <input 
                                      type="number" 
                                      value={item.price} 
                                      onChange={(e) => handlePriceChange(item.id, e.target.value)} 
                                      className="flex-1 p-1.5 bg-black border border-white/20 rounded text-sm font-bold text-[#00F5D4] outline-none focus:border-[#00F5D4] transition-colors text-right"
                                    />
                                 </div>
                               </div>
                            ))}
                          </div>
                      </div>
                  </div>

                  <div className="flex-1 border border-white/10 rounded-[2rem] bg-black overflow-hidden relative z-10 shadow-2xl flex flex-col mx-auto w-full max-w-sm">
                      <div className="bg-[#111] py-2 px-4 flex justify-between items-center border-b border-white/5">
                        <span className="text-[10px] font-semibold text-[#A1A1AA] tracking-wider">ЭКРАН ГОСТЯ (ТЕЛЕФОН)</span>
                        <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div></div>
                      </div>
                      <div className="p-5 space-y-4 flex-1">
                          <h5 className="text-lg font-serif font-medium mb-4">Меню ресторана</h5>
                           {menuItems.map(item => (
                             <div key={item.id} className="flex gap-4 items-center bg-white/5 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition group interactive-elem" onClick={() => handleAddToCart(item)}>
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shrink-0 flex items-center justify-center text-white/30 text-xs">Фото</div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium mb-1 group-hover:text-[#00F5D4] transition-colors leading-tight">{item.name}</div>
                                  <div className="text-[10px] text-[#D4D4D8] mb-2">{item.desc}</div>
                                  <div className="text-sm font-bold text-[#00F5D4]">{item.price} ₽</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-[#00F5D4] group-hover:text-black transition-colors font-bold">+</div>
                             </div>
                           ))}
                      </div>
                      <div className="p-4 bg-gradient-to-t from-black to-transparent pt-10 border-t border-white/5">
                        <div className="flex justify-between items-center mb-3 px-1">
                          <span className="text-xs text-[#D4D4D8]">В корзине: {sandboxCart.length} шт.</span>
                          <span className="text-sm font-bold">{sandboxCart.reduce((s, i) => s + i.price, 0)} ₽</span>
                        </div>
                        <button 
                          onClick={handleSandboxOrder}
                          className={`w-full py-3 font-semibold rounded-xl transition-all ${sandboxCart.length > 0 ? 'bg-[#00F5D4] text-black shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:scale-[1.02] interactive-elem' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                        >
                          Оформить заказ на Стол №4
                        </button>
                      </div>
                  </div>

                  <div className="flex-1 border border-white/15 rounded-[2rem] bg-[#0e1621] overflow-hidden relative z-10 shadow-2xl flex flex-col mx-auto w-full max-w-sm">
                      <div className="bg-[#17212b] py-3 px-4 flex items-center gap-3 border-b border-black">
                        <svg className="w-6 h-6 text-[#2AABEE]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.833.94z"/></svg>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">AppSeaPro Заказы</div>
                          <div className="text-[10px] text-[#D4D4D8]">Бот (ЭКРАН ПЕРСОНАЛА)</div>
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-end bg-[#0e1621] bg-opacity-90 overflow-y-auto" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)' }}>
                          
                          {tgMessages.length === 0 ? (
                            <div className="text-center text-[#A1A1AA] text-xs my-auto">
                              Оформите заказ в приложении,<br/>чтобы он прилетел сюда
                            </div>
                          ) : (
                            <div className="space-y-4 flex flex-col-reverse">
                              {tgMessages.map(msg => (
                                <div key={msg.id} className="bg-[#182533] rounded-2xl rounded-tl-sm p-4 w-[85%] border border-white/10 shadow-lg relative ml-2 fade-up-elem visible">
                                    <div className="text-[#00F5D4] text-xs font-bold mb-2">AppSeaPro Bot</div>
                                    <div className="text-white text-sm font-medium mb-1">🛎 Новый заказ!</div>
                                    <div className="text-[#D4D4D8] text-sm mb-3">📍 Стол: <span className="font-bold text-white">№4</span></div>
                                    <div className="bg-black/30 rounded-lg p-2 text-xs text-white/90 mb-3 border border-white/5 space-y-1">
                                      {msg.items.reduce((acc, item) => {
                                        const found = acc.find(i => i.id === item.id);
                                        if (found) found.count += 1;
                                        else acc.push({ ...item, count: 1 });
                                        return acc;
                                      }, []).map(i => (
                                        <div key={i.id}>{i.count}x {i.name}</div>
                                      ))}
                                    </div>
                                    <div className="text-sm font-medium text-white">Итого: {msg.total} ₽</div>
                                </div>
                              ))}
                            </div>
                          )}

                      </div>
                  </div>

                </div>
              </div>

           </div>
        </div>
      )}
    </div>
  );
}