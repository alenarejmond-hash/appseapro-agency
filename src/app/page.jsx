"use client";

import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// ГЛОБАЛЬНЫЕ СТИЛИ КОМПОНЕНТА
// Вставляем их прямо сюда, чтобы не ломать основной конфиг
// ==========================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

  body {
    background-color: #050505;
    color: #F3F4F6;
    overflow-x: hidden;
    cursor: none; /* Скрываем стандартный курсор */
    font-family: 'Inter', sans-serif;
  }

  .font-serif {
    font-family: 'Playfair Display', serif;
  }

  /* Отключаем кастомный курсор и эффекты наведения для корректной работы на мобильных */
  @media (hover: none) and (pointer: coarse) {
    body {
      cursor: auto !important;
    }
    .custom-cursor {
      display: none !important;
    }
    .glass-card::before {
      display: none !important;
    }
  }

  ::selection {
    background: #E50940;
    color: #fff;
  }

  /* Кастомный курсор */
  .custom-cursor {
    width: 20px;
    height: 20px;
    background-color: #00F5D4;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, background-color 0.3s;
  }
  
  .custom-cursor.hover {
    width: 60px;
    height: 60px;
    background-color: #E50940;
    filter: blur(10px);
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
  }
  .bg-glow.wine { background: #E50940; top: -10%; left: -10%; }
  .bg-glow.cyan { background: #00F5D4; bottom: -20%; right: -10%; animation-delay: -5s; }

  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(10%, 15%) scale(1.2); }
  }

  /* Продвинутый Glassmorphism Карточек */
  .glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(24px) saturate(120%);
    -webkit-backdrop-filter: blur(24px) saturate(120%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15);
  }

  /* Эффект фонарика под стеклом при наведении */
  .glass-card::before {
    content: '';
    position: absolute;
    top: var(--mouse-y, -100px);
    left: var(--mouse-x, -100px);
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
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

  /* Анимация Glitch */
  .glitch-hover:hover .glitch-text {
    animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    color: #E50940;
    text-shadow: 2px 2px #00F5D4, -2px -2px #E50940;
  }

  @keyframes glitch-skew {
    0% { transform: skew(0deg); }
    20% { transform: skew(-10deg); }
    40% { transform: skew(10deg); }
    60% { transform: skew(-5deg); }
    80% { transform: skew(5deg); }
    100% { transform: skew(0deg); }
  }

  /* 3D элемент в Hero */
  .hero-3d-wrapper {
    perspective: 1000px;
  }
  .hero-3d-element {
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
  }

  /* Нативные анимации появления (вместо GSAP) */
  .fade-up-elem {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .fade-up-elem.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  const footerRef = useRef(null);
  const spacerRef = useRef(null);

  // 1. Логика курсора и эффектов наведения
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const isInteractive = !!e.target.closest('.interactive-elem, a, button, input');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  // 2. Логика появления элементов при скролле (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up-elem').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 3. Выезжающий футер (Footer Reveal)
  useEffect(() => {
    const setFooterHeight = () => {
      if (footerRef.current && spacerRef.current) {
        spacerRef.current.style.height = `${footerRef.current.offsetHeight}px`;
      }
    };
    
    setFooterHeight();
    window.addEventListener('resize', setFooterHeight);
    return () => window.removeEventListener('resize', setFooterHeight);
  }, []);

  // Обработчики мыши для 3D и Glassmorphism
  const handleGlassMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleHeroMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    e.currentTarget.querySelector('.hero-3d-element').style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
  };

  const handleHeroLeave = (e) => {
    e.currentTarget.querySelector('.hero-3d-element').style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div className="antialiased min-h-screen text-[#F3F4F6] bg-[#050505] selection:bg-[#E50940] selection:text-white">
      <style>{styles}</style>

      {/* Кастомный курсор */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Фоновые свечения */}
      <div className="bg-glow wine"></div>
      <div className="bg-glow cyan"></div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050505]/50 border-b border-white/5 py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer">
          AppSea<span className="text-[#E50940] italic">Pro</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#8B8D98]">
          <a href="#showroom" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Showroom</a>
          <a href="#technology" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Технологии</a>
          <a href="#investments" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Инвестиции</a>
        </nav>
        <a href="#contact" className="glass-card px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-white/10 transition-colors interactive-elem cursor-pointer" onMouseMove={handleGlassMove}>
          <span className="glass-content">Связаться</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-[#050505] pb-10" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-6 pt-24 md:pt-20 pb-20 md:pb-0">
          <div className="max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-center items-center w-full">
            <p className="text-[#00F5D4] text-xs md:text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 fade-up-elem" style={{ transitionDelay: '0s' }}>
              Digital Boutique
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 md:mb-8 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
              Технологии, которые <br className="hidden md:block"/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#E50940] to-pink-500">продают</span> ваш статус
            </h1>
            
            <p className="text-[#8B8D98] text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-light fade-up-elem px-2" style={{ transitionDelay: '0.2s' }}>
              Создаем премиальные PWA-визитки, Smart-меню и цифровые экосистемы, оставляя конкурентов в прошлом.
            </p>

            {/* 3D Interactive Element */}
            <div 
              className="hero-3d-wrapper w-56 h-72 md:w-64 md:h-80 mx-auto mt-4 md:mt-10 fade-up-elem cursor-pointer relative z-20" 
              style={{ transitionDelay: '0.3s' }}
              onMouseMove={handleHeroMove}
              onMouseLeave={handleHeroLeave}
            >
              <div 
                className="hero-3d-element glass-card w-full h-full flex items-center justify-center rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group interactive-elem"
                onMouseMove={handleGlassMove}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="glass-content text-center">
                  <div className="w-16 h-16 rounded-full border border-[#E50940]/50 flex items-center justify-center mx-auto mb-4 bg-[#E50940]/10 text-[#E50940]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                  </div>
                  <h3 className="font-serif text-xl">AppSeaPro</h3>
                  <p className="text-xs text-[#8B8D98] mt-2 uppercase tracking-widest">NFC Ready</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 fade-up-elem z-10" style={{ transitionDelay: '0.5s' }}>
            <span className="text-xs tracking-widest uppercase text-[#8B8D98]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* SHOWROOM SECTION */}
        <section id="showroom" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-24 fade-up-elem text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Интерактивный <span className="italic text-[#00F5D4]">Showroom</span></h2>
            <p className="text-[#8B8D98] text-base md:text-lg max-w-lg mx-auto md:mx-0">Безупречная эстетика и функциональность в каждом решении. Выберите свою нишу.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* PWA Визитки */}
            <div className="glass-card md:col-span-3 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
              <div className="glass-content flex-1 z-10 text-center md:text-left w-full">
                <span className="text-[#E50940] text-xs uppercase tracking-widest font-semibold mb-2 block">Флагман</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Цифровые визитки <br className="hidden md:block"/>нового поколения</h3>
                <p className="text-[#8B8D98] mb-8 text-sm md:text-base max-w-2xl">Три уникальных формата под ваши задачи. Контакт сохраняется в телефон в один клик без App Store. Выберите свой уровень цифрового нетворкинга.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                   <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-medium mb-2 text-sm md:text-base">Classic</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Простая и лаконичная визитка. Вся суть на одном экране, идеальная классика.</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-medium mb-2 text-sm md:text-base">Expand</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Разворачивающийся формат. Дополнительный блок для портфолио, медиа и полезных ссылок.</p>
                   </div>
                   <div className="bg-[#E50940]/10 border border-[#E50940]/30 rounded-xl p-5 shadow-[0_0_15px_rgba(229,9,64,0.1)] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 bg-[#E50940] text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold tracking-wider">NEW</div>
                      <h4 className="text-[#E50940] font-medium mb-2 text-sm md:text-base">Double ID</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Личная и рабочая визитка в одной. Умная смена профилей по заданному времени суток.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Smart HoReCa */}
            <div className="glass-card md:col-span-2 p-6 md:p-8 flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content z-10 flex flex-col h-full text-center md:text-left">
                <span className="text-[#00F5D4] text-xs uppercase tracking-widest font-semibold mb-2 block">HoReCa</span>
                <h3 className="text-xl md:text-2xl font-serif mb-3">Smart <span className="italic">Меню</span></h3>
                <p className="text-[#8B8D98] text-sm mb-6 max-w-xl">Два решения для вашего заведения. Все заказы, вызовы официанта и запросы счета моментально прилетают прямо в ваш Telegram-канал.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-left flex-1">
                  <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-4 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#00F5D4]/50"></div>
                     <h4 className="text-white text-sm font-medium mb-2">Классика (QR-витрина)</h4>
                     <p className="text-[#8B8D98] text-xs">Вкусное описание, состав блюд, мгновенный вызов официанта и запрос счета в 1 клик.</p>
                  </div>
                  <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-4 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#E50940]/50"></div>
                     <h4 className="text-white text-sm font-medium mb-2">Флагман (QR-заказы)</h4>
                     <p className="text-[#8B8D98] text-xs">Полноценное меню с корзиной, оформлением заказов, вызовом персонала и оплатой.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beauty */}
            <div className="glass-card md:col-span-1 p-6 md:p-8 min-h-[250px] flex flex-col justify-end interactive-elem fade-up-elem cursor-pointer relative" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.2s', backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-0"></div>
              <div className="glass-content z-10 text-center md:text-left">
                <span className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-2 block">Beauty & SPA</span>
                <h3 className="text-xl md:text-2xl font-serif mb-2 text-white">Эстетика и Запись</h3>
                <p className="text-sm text-white/60">Календарь, лояльность и бронирование в едином PWA.</p>
              </div>
            </div>

          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section id="technology" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Технологии <span className="italic text-[#E50940]">Превосходства</span></h2>
            <p className="text-[#8B8D98] text-base md:text-lg">Мы не используем конструкторы. Только кастомный код и передовые Web-стандарты.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card p-8 md:p-10 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#E50940]/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#E50940] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">Технология PWA</h4>
                <p className="text-[#8B8D98] text-sm leading-relaxed">Без App Store и Google Play. Иконка вашего бизнеса устанавливается за 1 секунду по прямой ссылке прямо в телефон.</p>
              </div>
            </div>

            <div className="glass-card p-10 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:border-[#00F5D4]/50 transition-all duration-300">
                  <svg className="w-10 h-10 text-[#00F5D4] absolute bottom-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-3">100/100 PageSpeed</h4>
                <p className="text-[#8B8D98] text-sm leading-relaxed">Архитектура без тяжелых библиотек. Ваш цифровой продукт работает быстрее, чем клиент успеет моргнуть.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="investments" className="py-24 md:py-32 px-4 md:px-8 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4"><span className="italic text-[#00F5D4]">Инвестиции</span> в капитал бренда</h2>
            <p className="text-[#8B8D98] text-base md:text-lg max-w-xl mx-auto">Выберите уровень цифровизации. Цена — это то, что вы платите. Ценность — то, что вы получаете.</p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch justify-center">
            
            {/* Card 1: Classic & Expand */}
            <div className="glass-card p-6 md:p-8 w-full lg:w-1/3 flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#8B8D98] text-sm font-semibold uppercase tracking-wider">PWA Визитки</span>
                <div className="my-6"><span className="text-3xl md:text-4xl font-serif">от 5 000 ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 lg:h-12">Тарифы Classic и Expand. Идеальный старт для нетворкинга.</p>
                <ul className="space-y-4 mb-8 text-sm flex-1">
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Classic:</strong> простая и лаконичная</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Expand:</strong> разворот с доп. информацией</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Сохранение VCF контакта</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Базовый премиум дизайн</span></li>
                </ul>
                <button className="w-full py-3 mt-auto rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Смотреть демо</button>
              </div>
            </div>

            {/* Card 2: Double ID */}
            <div className="glass-card p-8 md:p-10 w-full lg:w-[40%] flex flex-col border-[#E50940]/30 shadow-[0_0_50px_rgba(229,9,64,0.1)] transform lg:-translate-y-4 relative interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-[#E50940] rounded-b-lg shadow-[0_0_20px_#E50940]"></div>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#E50940] text-sm font-semibold uppercase tracking-wider">Эксклюзив</span>
                <div className="my-6"><span className="text-4xl md:text-5xl font-serif">15 000 ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 lg:h-12">Визитка Double ID. Наша авторская разработка для WOW-эффекта.</p>
                <ul className="space-y-4 mb-10 text-sm font-medium flex-1">
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Два профиля (Личный + Рабочий)</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Смена профиля по времени суток</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Индивидуальный UI/UX концепт</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>3D-анимации и аудио</span></li>
                </ul>
                <button className="w-full py-4 mt-auto rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">Смотреть демо</button>
              </div>
            </div>

            {/* Card 3: HoReCa */}
            <div className="glass-card p-6 md:p-8 w-full lg:w-1/3 flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#00F5D4] text-sm font-semibold uppercase tracking-wider">Smart HoReCa</span>
                <div className="my-6"><span className="text-3xl md:text-4xl font-serif text-white/50">Custom</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 lg:h-12">Решения Флагман и Классика для ресторанов и кафе.</p>
                <ul className="space-y-4 mb-8 text-sm text-white/60 flex-1">
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Telegram-уведомления</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Заказы, счет, вызов официанта</span></li>
                  <li className="flex items-start gap-3"><svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Управление через панель</span></li>
                </ul>
                <button className="w-full py-3 mt-auto rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm text-white/70 font-semibold">Обсудить проект</button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER (REVEAL EFFECT) */}
      <footer ref={footerRef} id="contact" className="fixed bottom-0 w-full min-h-[60vh] md:min-h-[70vh] h-auto bg-[#050505] flex flex-col justify-between p-6 md:p-12 z-0 border-t border-white/5 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center text-center mt-12 md:mt-10 flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-medium mb-6 md:mb-8">
            Готовы к <span className="italic text-[#E50940]">эволюции</span>?
          </h2>
          
          <div className="w-full max-w-md relative interactive-elem">
            <input 
              type="text" 
              placeholder="Ваш Telegram или Телефон" 
              className="w-full bg-[#121212] border border-white/10 rounded-full py-3 md:py-4 pl-6 pr-28 md:pr-32 text-sm md:text-base text-white placeholder-white/30 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white text-black px-4 md:px-6 rounded-full font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Отправить
            </button>
          </div>
          <p className="text-xs text-[#8B8D98] mt-4 md:mt-6">Оставляя заявку, вы соглашаетесь с эстетикой и качеством.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#8B8D98] max-w-7xl w-full mx-auto pt-8 md:pb-4 gap-4 md:gap-0">
          <span>&copy; 2026 AppSeaPro. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Instagram</a>
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Telegram</a>
          </div>
        </div>
      </footer>

      {/* Spacer для эффекта reveal footer */}
      <div ref={spacerRef} className="w-full relative z-[-1]"></div>

    </div>
  );
};

export default LandingPage;