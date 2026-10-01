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
      <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050505]/50 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer">
          AppSea<span className="text-[#E50940] italic">Pro</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#8B8D98]">
          <a href="#showroom" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Showroom</a>
          <a href="#technology" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Технологии</a>
          <a href="#investments" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Инвестиции</a>
        </nav>
        <a href="#contact" className="glass-card px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors interactive-elem cursor-pointer" onMouseMove={handleGlassMove}>
          <span className="glass-content">Связаться</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-[#050505] pb-10" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center z-10">
            <p className="text-[#00F5D4] text-sm md:text-base font-medium tracking-widest uppercase mb-6 fade-up-elem" style={{ transitionDelay: '0s' }}>
              Digital Boutique
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
              Технологии, которые <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#E50940] to-pink-500">продают</span> ваш статус
            </h1>
            
            <p className="text-[#8B8D98] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light fade-up-elem" style={{ transitionDelay: '0.2s' }}>
              Создаем премиальные PWA-визитки, Smart-меню и цифровые экосистемы, оставляя конкурентов в прошлом.
            </p>

            {/* 3D Interactive Element */}
            <div 
              className="hero-3d-wrapper w-64 h-80 mx-auto mt-10 fade-up-elem cursor-pointer" 
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
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 fade-up-elem" style={{ transitionDelay: '0.5s' }}>
            <span className="text-xs tracking-widest uppercase text-[#8B8D98]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* SHOWROOM SECTION */}
        <section id="showroom" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 fade-up-elem">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Интерактивный <span className="italic text-[#00F5D4]">Showroom</span></h2>
            <p className="text-[#8B8D98] text-lg max-w-lg">Безупречная эстетика и функциональность в каждом решении. Выберите свою нишу.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* PWA Визитки */}
            <div className="glass-card md:col-span-2 p-8 md:p-12 min-h-[400px] flex flex-col md:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
              <div className="glass-content flex-1 z-10">
                <span className="text-[#E50940] text-xs uppercase tracking-widest font-semibold mb-2 block">Флагман</span>
                <h3 className="text-3xl font-serif mb-4">Цифровые визитки <br/>нового поколения</h3>
                <p className="text-[#8B8D98] mb-6">От элегантного Lite-старта до 3D-Premium визиток с анимациями. Ваш контакт сохраняется в телефон в один клик без App Store.</p>
                <div className="flex gap-4">
                  <span className="border border-white/10 px-4 py-1 rounded-full text-xs">Lite</span>
                  <span className="bg-white/10 border border-white/20 px-4 py-1 rounded-full text-xs text-white">VIP</span>
                </div>
              </div>
              <div className="w-48 h-80 border-4 border-[#333] rounded-[2rem] bg-black relative overflow-hidden shadow-[0_0_30px_rgba(229,9,64,0.2)] flex-shrink-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#333] rounded-b-xl z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#050505] p-4 pt-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E50940] to-pink-500 mb-4 p-1">
                    <div className="w-full h-full bg-black rounded-full border-2 border-transparent"></div>
                  </div>
                  <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                  <div className="h-2 w-16 bg-white/10 rounded mb-8"></div>
                  <div className="w-full bg-white/5 rounded-xl p-3 mb-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#E50940]/20"></div>
                    <div className="flex-1 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="w-full bg-white/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#00F5D4]/20"></div>
                    <div className="flex-1 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart HoReCa */}
            <div className="glass-card p-8 min-h-[400px] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content z-10 flex flex-col h-full">
                <span className="text-[#00F5D4] text-xs uppercase tracking-widest font-semibold mb-2 block">HoReCa</span>
                <h3 className="text-2xl font-serif mb-4">Smart <span className="italic">Меню</span></h3>
                <p className="text-[#8B8D98] text-sm flex-1">Для крафтовых ресторанов и крупных сетей. QR-меню, которое выглядит как глянцевый журнал.</p>
                <div className="mt-6 border border-white/10 rounded-xl p-4 bg-black/40">
                  <div className="flex justify-between items-end mb-4">
                    <div className="h-3 w-16 bg-white/20 rounded"></div>
                    <div className="h-3 w-8 bg-[#00F5D4]/50 rounded"></div>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <div className="h-16 w-16 bg-white/10 rounded-lg"></div>
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                      <div className="h-2 w-full bg-white/20 rounded"></div>
                      <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beauty */}
            <div className="glass-card p-8 min-h-[300px] flex flex-col justify-end interactive-elem fade-up-elem cursor-pointer relative" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.2s', backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-0"></div>
              <div className="glass-content z-10">
                <span className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-2 block">Beauty & SPA</span>
                <h3 className="text-2xl font-serif mb-2 text-white">Эстетика и Запись</h3>
                <p className="text-sm text-white/60">Календарь, лояльность и бронирование в едином PWA.</p>
              </div>
            </div>

            {/* Тизер: Future */}
            <div className="glass-card md:col-span-2 p-8 min-h-[300px] flex items-center justify-center glitch-hover relative interactive-elem overflow-hidden fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.3s' }}>
              <div className="absolute inset-0 backdrop-blur-xl bg-[#050505]/60 z-10 flex items-center justify-center transition-all duration-300">
                <div className="text-center glass-content">
                  <svg className="w-8 h-8 mx-auto mb-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <h3 className="text-3xl font-serif glitch-text font-bold text-white/50 tracking-widest transition-colors duration-300">Медтуризм & Стоматология</h3>
                  <p className="text-sm mt-2 text-white/30 uppercase tracking-[0.3em]">Loading 2024</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section id="technology" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-up-elem">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Технологии <span className="italic text-[#E50940]">Превосходства</span></h2>
            <p className="text-[#8B8D98] text-lg">Мы не используем конструкторы. Только кастомный код и передовые Web-стандарты.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-10 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
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
        <section id="investments" className="py-32 px-4 md:px-8 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16 fade-up-elem">
            <h2 className="text-4xl md:text-5xl font-serif mb-4"><span className="italic text-[#00F5D4]">Инвестиции</span> в капитал бренда</h2>
            <p className="text-[#8B8D98] text-lg max-w-xl mx-auto">Выберите уровень цифровизации. Цена — это то, что вы платите. Ценность — то, что вы получаете.</p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
            
            {/* Тариф Lite */}
            <div className="glass-card p-8 w-full lg:w-1/3 flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove}>
              <div className="glass-content">
                <span className="text-[#8B8D98] text-sm font-semibold uppercase tracking-wider">Start / Lite</span>
                <div className="my-6"><span className="text-4xl font-serif">5 000 ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 h-12">Идеальный старт для частных специалистов.</p>
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Односторонняя PWA-визитка</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Базовый премиум дизайн</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Сохранение VCF контакта</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Смотреть демо</button>
              </div>
            </div>

            {/* Тариф VIP */}
            <div className="glass-card p-10 w-full lg:w-[40%] flex flex-col border-[#00F5D4]/30 shadow-[0_0_50px_rgba(0,245,212,0.1)] transform lg:-translate-y-4 relative interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#00F5D4] rounded-b-lg shadow-[0_0_20px_#00F5D4]"></div>
              <div className="glass-content">
                <span className="text-[#00F5D4] text-sm font-semibold uppercase tracking-wider">VIP / Premium</span>
                <div className="my-6"><span className="text-5xl font-serif">15 000 ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 h-12">Для брендов, которым нужен бескомпромиссный WOW-эффект.</p>
                <ul className="space-y-4 mb-10 text-sm font-medium">
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Индивидуальный UI/UX концепт</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 3D-анимации и аудио</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> До 5 внутренних шторок-страниц</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Мультиязычность</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">Смотреть демо</button>
              </div>
            </div>

            {/* Тариф Custom */}
            <div className="glass-card p-8 w-full lg:w-1/3 flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-content">
                <span className="text-[#8B8D98] text-sm font-semibold uppercase tracking-wider">Enterprise</span>
                <div className="my-6"><span className="text-4xl font-serif text-white/50">Custom</span></div>
                <p className="text-sm text-[#8B8D98] mb-8 h-12">Сложные экосистемы для франшиз, клиник и сетей HoReCa.</p>
                <ul className="space-y-4 mb-8 text-sm text-white/60">
                  <li className="flex items-center gap-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Интеграция с CRM / POS</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Программы лояльности</li>
                  <li className="flex items-center gap-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Панель администратора</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm text-white/70 font-semibold">Обсудить проект</button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER (REVEAL EFFECT) */}
      <footer ref={footerRef} id="contact" className="fixed bottom-0 w-full h-[60vh] md:h-[70vh] bg-[#050505] flex flex-col justify-between p-6 md:p-12 z-0 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center text-center mt-10">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium mb-8">
            Готовы к <span className="italic text-[#E50940]">эволюции</span>?
          </h2>
          
          <div className="w-full max-w-md relative interactive-elem">
            <input 
              type="text" 
              placeholder="Ваш Telegram или Телефон" 
              className="w-full bg-[#121212] border border-white/10 rounded-full py-4 pl-6 pr-32 text-white placeholder-white/30 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white text-black px-6 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Отправить
            </button>
          </div>
          <p className="text-xs text-[#8B8D98] mt-6">Оставляя заявку, вы соглашаетесь с эстетикой и качеством.</p>
        </div>
        
        <div className="flex justify-between items-center text-xs text-[#8B8D98] max-w-7xl w-full mx-auto pb-4">
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