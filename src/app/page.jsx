"use client";

import React, { useState, useEffect, useRef } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

  body {
    background-color: #050505;
    color: #F3F4F6;
    overflow-x: hidden;
    cursor: none; 
    font-family: 'Inter', sans-serif;
  }

  .font-serif {
    font-family: 'Playfair Display', serif;
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
    background: #E50940;
    color: #fff;
  }

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

  .hero-3d-wrapper {
    perspective: 1000px;
  }
  .hero-3d-element {
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
  }

  .fade-up-elem {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
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
`;

export default function LandingPage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHorecaModalOpen, setIsHorecaModalOpen] = useState(false);
  
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Том Ям с креветками', desc: 'Острота: средняя', price: 850 },
    { id: 2, name: 'Стейк Рибай', desc: 'Прожарка: Medium', price: 2100 },
    { id: 3, name: 'Капучино на миндальном', desc: 'Объем: 300мл', price: 350 }
  ]);
  const [sandboxCart, setSandboxCart] = useState([]);
  const [tgMessages, setTgMessages] = useState([]);
  
  const footerRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const checkHover = (e) => setIsHovering(!!e.target.closest('.interactive-elem, a, button, input, summary, details'));

    if (!isTouchDevice) {
      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', checkHover);
    }
    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mouseover', checkHover);
      }
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
    const setFooterHeight = () => {
      if (footerRef.current && spacerRef.current) {
        spacerRef.current.style.height = `${footerRef.current.offsetHeight}px`;
      }
    };
    setFooterHeight();
    window.addEventListener('resize', setFooterHeight);
    return () => window.removeEventListener('resize', setFooterHeight);
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
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (clientY - rect.top - rect.height / 2) / (rect.height / 2);
    e.currentTarget.querySelector('.hero-3d-element').style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
  };

  const handleHeroLeave = (e) => {
    e.currentTarget.querySelector('.hero-3d-element').style.transform = `rotateY(0deg) rotateX(0deg)`;
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
    <div className="antialiased min-h-screen text-[#F3F4F6] bg-[#050505] selection:bg-[#E50940] selection:text-white">
      <style>{styles}</style>

      <div className={`custom-cursor ${isHovering ? 'hover' : ''}`} style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className="bg-glow wine"></div>
      <div className="bg-glow cyan"></div>

      <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050505]/50 border-b border-white/5 py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          AppSea<span className="text-[#E50940] italic">Pro</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#8B8D98]">
          <a href="#showroom" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Продукты</a>
          <a href="#nfc" className="hover:text-[#F3F4F6] transition-colors interactive-elem">NFC Брелоки</a>
          <a href="#about" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Подход</a>
          <a href="#investments" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Инвестиции</a>
        </nav>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="glass-card px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-white/10 transition-colors interactive-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
          <span className="glass-content">Связаться</span>
        </button>
      </header>

      {}
      <main className="relative z-10 bg-[#050505] pb-10" style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
        
        <section className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-6 pt-24 md:pt-20 pb-20 md:pb-0">
          <div className="max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-center items-center w-full pb-20 md:pb-28">
            <p className="text-[#00F5D4] text-xs md:text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 fade-up-elem" style={{ transitionDelay: '0s' }}>
              Digital Boutique
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 md:mb-8 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
              Цифровые решения <br className="hidden md:block"/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#E50940] to-pink-500">без абонплаты.</span> Навсегда.
            </h1>
            <p className="text-[#8B8D98] text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-light fade-up-elem px-2" style={{ transitionDelay: '0.2s' }}>
              PWA-визитки, Smart-меню для HoReCa и системы бронирования. Вы платите один раз — продукт работает на вас всегда. Управление через Telegram и вашу персональную облачную панель. Никакого сложного софта.
            </p>

            <div 
              className="hero-3d-wrapper w-56 h-72 md:w-64 md:h-80 mx-auto mt-4 md:mt-10 mb-8 md:mb-10 fade-up-elem cursor-pointer relative z-20" 
              style={{ transitionDelay: '0.3s' }}
              onMouseMove={handleHeroMove} onMouseLeave={handleHeroLeave} onTouchMove={handleHeroMove} onTouchEnd={handleHeroLeave}
            >
              <div className="hero-3d-element glass-card w-full h-full flex items-center justify-center rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group interactive-elem" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="glass-content text-center">
                  <div className="w-16 h-16 rounded-full border border-[#E50940]/50 flex items-center justify-center mx-auto mb-4 bg-[#E50940]/10 text-[#E50940]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                  </div>
                  <h3 className="font-serif text-xl">AppSeaPro</h3>
                  <p className="text-xs text-[#8B8D98] mt-2 uppercase tracking-widest">Digital Agency</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 fade-up-elem z-10" style={{ transitionDelay: '0.5s' }}>
            <span className="text-xs tracking-widest uppercase text-[#8B8D98]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {}
        <section id="showroom" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-24 fade-up-elem text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Выберите свое <span className="italic text-[#00F5D4]">Решение</span></h2>
            <p className="text-[#8B8D98] text-base md:text-lg max-w-lg mx-auto md:mx-0">Безупречная эстетика и функциональность в каждом продукте. Разработано специально под вашу нишу.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-card md:col-span-3 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="glass-content flex-1 z-10 text-center md:text-left w-full">
                <span className="text-[#E50940] text-xs uppercase tracking-widest font-semibold mb-2 block">Для предпринимателей и экспертов</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Цифровые PWA-визитки</h3>
                <p className="text-[#8B8D98] mb-8 text-sm md:text-base max-w-2xl">Устанавливаются на рабочий стол телефона как приложение в один клик. БЕЗ скачивания из App Store или Google Play. Ваш статус и контакты всегда под рукой.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                   <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-medium mb-2 text-sm md:text-base">Classic</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Лаконичная визитка. 7 премиальных дизайн-тем, мультиязычность, кинематографичные анимации и умное сохранение VCF контакта прямо в телефонную книгу.</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-medium mb-2 text-sm md:text-base">Infinity</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Интерактивная 3D-визитка с переворотом, звуком и тактильным откликом. На обороте: блок доверия, прайс и смарт-кнопки. Адаптация под любую нишу.</p>
                   </div>
                   <div className="bg-[#E50940]/10 border border-[#E50940]/30 rounded-xl p-5 shadow-[0_0_15px_rgba(229,9,64,0.1)] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 bg-[#E50940] text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold tracking-wider">EXCLUSIVE</div>
                      <h4 className="text-[#E50940] font-medium mb-2 text-sm md:text-base">Twin ID</h4>
                      <p className="text-[#8B8D98] text-xs leading-relaxed">Авторская разработка: Личный и Рабочий профиль в одном. Умная авто-смена стороны по времени суток и секретный Z-жест для вызова Facecontrol.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="glass-card md:col-span-3 p-6 md:p-10 flex flex-col md:flex-row-reverse items-center gap-8 interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} onClick={() => setIsHorecaModalOpen(true)} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content flex-1 z-10 text-center md:text-left w-full">
                <span className="text-[#00F5D4] text-xs uppercase tracking-widest font-semibold mb-2 block">Для ресторанов и кафе</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Smart <span className="italic">QR-Меню</span></h3>
                <p className="text-[#8B8D98] text-sm md:text-base mb-8 max-w-2xl">Интуитивная облачная панель управления. Все заказы, вызовы официанта и запросы счета моментально прилетают в Telegram-группу персонала.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-left">
                  <div className="flex-1 bg-black/40 border border-white/10 rounded-xl p-5 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#00F5D4]/50"></div>
                     <h4 className="text-white text-base font-medium mb-2">Классика</h4>
                     <p className="text-[#8B8D98] text-xs leading-relaxed">Бесконтактное меню с кинематографичным дизайном. Мультиязычность, умный стоп-лист блюд и плавная навигация. Мгновенный вызов официанта и запрос счета в 1 клик с тактильным откликом.</p>
                  </div>
                  <div className="flex-1 bg-black/40 border border-[#E50940]/30 rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(229,9,64,0.05)]">
                     <div className="absolute top-0 left-0 w-1 h-full bg-[#E50940]/50"></div>
                     <h4 className="text-[#E50940] text-base font-medium mb-2">Флагман</h4>
                     <p className="text-[#8B8D98] text-xs leading-relaxed">Полноценная автоматизация с умными допродажами (Cross-sell). Гость собирает корзину, оставляет комментарии повару и оформляет заказ. Умный QR-код сам определяет номер столика.</p>
                  </div>
                </div>
                <button className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors border border-white/20">Попробовать песочницу ➔</button>
              </div>
            </div>

            <div className="glass-card md:col-span-3 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
               <div className="w-full md:w-1/3 h-48 md:h-full min-h-[250px] rounded-xl overflow-hidden relative shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" alt="Beauty Spa" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
               </div>
               
               <div className="glass-content flex-1 z-10 text-center md:text-left w-full">
                <span className="text-pink-400 text-xs uppercase tracking-widest font-semibold mb-2 block">Салоны & Мастера</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Эстетика и <span className="italic">Онлайн-запись</span></h3>
                <p className="text-[#8B8D98] text-sm md:text-base mb-8 max-w-2xl">Premium визитка-лендинг с умным онлайн-бронированием. Идеальная синхронизация с вашим расписанием без диких ежемесячных комиссий агрегаторам.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                   <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Smart-бронирование</h4>
                        <p className="text-[#8B8D98] text-xs leading-relaxed">Live-календарь с умным поиском свободных окон, расчетом времени услуг и автоматическим режимом «предупреждение об отпуске».</p>
                      </div>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">Дизайн & Telegram-забота</h4>
                        <p className="text-[#8B8D98] text-xs leading-relaxed">Уникальный дизайн, настроенный под ваш бренд. Мгновенные уведомления о записях и заботливая утренняя Telegram-сводка вашего расписания на день за чашкой кофе.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="nfc" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="glass-card flex flex-col md:flex-row items-center interactive-elem fade-up-elem overflow-hidden cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
            <div className="w-full md:w-5/12 h-64 md:h-auto md:self-stretch relative border-b md:border-b-0 md:border-r border-white/10">
               <img src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80" alt="Leather NFC Keychain" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#050505]/50 md:to-[#050505] z-0 pointer-events-none"></div>
            </div>
            
            <div className="glass-content w-full md:w-7/12 p-8 md:p-12 z-10 text-center md:text-left">
              <span className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-2 block">Физический носитель</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-4">NFC-брелоки <br className="hidden md:block"/>из кожи <span className="italic text-white">Crazy Horse</span></h3>
              <p className="text-[#8B8D98] text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                Физическое воплощение вашего цифрового статуса. Я вручную шью премиальные NFC-брелоки из натуральной винтажной кожи для каждой визитки. Одно касание брелоком к смартфону партнера — и ваши контакты уже на его экране.
              </p>
              
              <ul className="space-y-4 mb-0 text-sm text-[#8B8D98] text-left max-w-lg mx-auto md:mx-0">
                 <li className="flex items-start gap-3"><svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <span><strong>Полная автономность:</strong> внутри зашит чип, который работает без батареек и его не нужно заряжать.</span></li>
                 <li className="flex items-start gap-3"><svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l-7-7m7 7L5 19m7-7l7-7"></path></svg> <span><strong>Ручная работа:</strong> каждый брелок кроится и прошивается вручную седельным швом.</span></li>
                 <li className="flex items-start gap-3"><svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg> <span><strong>Безупречный статус:</strong> винтажная кожа красиво стареет, покрываясь благородной патиной.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {}
        <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 interactive-elem fade-up-elem">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-[#00F5D4]/30 overflow-hidden shrink-0 shadow-[0_0_30px_rgba(0,245,212,0.15)] p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Айти-архитектор" className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="text-center md:text-left glass-content">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Привет, я Елена</h2>
              <p className="text-[#00F5D4] font-medium tracking-widest text-xs uppercase mb-6">IT-Архитектор</p>
              <p className="text-[#8B8D98] text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                Я занимаюсь кастомной веб-разработкой и проектирую независимые IT-экосистемы. Моя главная цель — дать малому бизнесу технологии уровня корпораций, но <strong className="text-white">без вытягивания денег за кабальные подписки</strong>. 
                Вы получаете продукт, который навсегда остается вашим. Управление происходит через интуитивную панель управления и Telegram. Это логично, статусно и не требует найма отдельного IT-специалиста.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs border border-white/10">✓ Размещение под ключ</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs border border-white/10">✓ Никаких абонплат</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs border border-white/10">✓ Интуитивная система управления</span>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="py-12 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Технологии <span className="italic text-[#E50940]">Превосходства</span></h2>
            <p className="text-[#8B8D98] text-base md:text-lg">Мы не используем конструкторы вроде Tilda. Только чистый код и передовые архитектуры.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card p-8 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#E50940]/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-[#E50940] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">Технология PWA</h4>
                <p className="text-[#8B8D98] text-sm leading-relaxed">Без App Store и Google Play. Иконка вашего бизнеса устанавливается за 1 секунду по прямой ссылке прямо в телефон.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:border-[#00F5D4]/50 transition-all duration-300">
                  <svg className="w-10 h-10 text-[#00F5D4] absolute bottom-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">100/100 PageSpeed</h4>
                <p className="text-[#8B8D98] text-sm leading-relaxed">Чистая архитектура. Ваш цифровой продукт загружается и работает быстрее, чем клиент успеет моргнуть.</p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center interactive-elem group fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-content">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 className="text-xl font-medium mb-3">Размещение под ключ</h4>
                <p className="text-[#8B8D98] text-sm leading-relaxed">Предоставляем готовый продукт на нашем поддомене или помогаем с интеграцией вашего премиального домена.</p>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="investments" className="py-24 md:py-32 px-4 md:px-8 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 fade-up-elem">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Инвестиции в <span className="italic text-[#00F5D4]">Капитал Бренда</span></h2>
            <p className="text-[#8B8D98] text-base md:text-lg max-w-xl mx-auto">Разовая оплата за разработку. Никаких скрытых ежемесячных платежей.</p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
            
            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">PWA Визитка</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Classic</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-white">от X ₽</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>7 премиальных дизайн-концептов</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Встроенная мультиязычность</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Кинематографичные анимации</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умный шеринг (QR и VCF)</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.1s' }}>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#00F5D4] text-xs font-semibold uppercase tracking-wider">PWA Визитка</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Infinity</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-[#00F5D4]">от X ₽</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Интерактивная 3D-архитектура (2 стороны)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Вау-эффекты: звук переворота и вибрация</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Блок доверия (услуги и прайс на обороте)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Адаптация под любую нишу (Врачи, Риелторы)</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-xl border border-[#00F5D4]/30 hover:bg-[#00F5D4]/10 transition-colors text-sm font-semibold text-white">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-[#E50940]/40 shadow-[0_0_30px_rgba(229,9,64,0.15)] relative interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#E50940] rounded-b-lg shadow-[0_0_20px_#E50940]"></div>
              <div className="glass-content h-full flex flex-col">
                <span className="text-[#E50940] text-xs font-semibold uppercase tracking-wider">Эксклюзив</span>
                <h3 className="text-2xl font-serif mt-2 mb-4">Twin ID</h3>
                <div className="mb-6"><span className="text-3xl font-serif text-white">от X ₽</span></div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Два независимых профиля в одном приложении</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умная автосмена стороны по времени суток</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Секретный Z-жест владельца для Facecontrol</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#E50940] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Раздельные базы контактов (VCF) и соцсети</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]">Оставить заявку</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.3s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-2">Для ресторанов</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Smart HoReCa</h3>
                <div className="flex flex-col gap-2 mb-6 text-left max-w-xs mx-auto w-full">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm text-gray-300">Классика</span>
                    <span className="font-serif text-xl">от X ₽</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm text-gray-300">Флагман</span>
                    <span className="font-serif text-xl text-[#00F5D4]">от X ₽</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1 text-left">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Интеллектуальные допродажи (Cross-sell)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Сборка заказов с комментариями повару</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Умная привязка к столику через QR-код</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Защита от спам-вызовов и тактильный отклик</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Мультиязычность и Telegram-оповещения</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">Обсудить проект</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.4s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-2">Салоны и Мастера</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Beauty & SPA</h3>
                <div className="mb-4"><span className="text-3xl font-serif">от X ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-4">Premium PWA-лендинг с онлайн-бронированием. Идеальный инструмент без комиссий.</p>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1 text-left max-w-sm mx-auto">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Live-поиск свободных окон и умный режим «Отпуск»</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Сборка проекта в 1 из 6 уникальных визуальных тем</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Мультиязычность для клиентов (RU, EN, AM)</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span>Заботливая утренняя Telegram-сводка вашего расписания на день за чашкой кофе</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-pink-400/30 hover:bg-pink-400/10 transition-colors text-sm font-semibold">Обсудить проект</button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col interactive-elem fade-up-elem cursor-pointer" onMouseMove={handleGlassMove} onTouchMove={handleGlassMove} style={{ transitionDelay: '0.5s' }}>
              <div className="glass-content h-full flex flex-col text-center">
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">Физический носитель</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">NFC Брелок</h3>
                <div className="mb-4"><span className="text-3xl font-serif text-white">от X ₽</span></div>
                <p className="text-sm text-[#8B8D98] mb-4">Кожа Crazy Horse. Идеальное дополнение к вашей цифровой визитке.</p>
                
                <ul className="space-y-3 mb-6 text-sm text-[#8B8D98] flex-1 text-left max-w-sm mx-auto w-full">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Одно касание:</strong> передача контактов без проводов</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Вечный чип:</strong> работает без батареек и зарядок</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Ручная работа:</strong> каждый экземпляр шьется индивидуально</span></li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> <span><strong>Статусность:</strong> винтажная кожа благородно стареет</span></li>
                </ul>

                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-2/3 mx-auto py-3 rounded-xl border border-amber-500/30 hover:bg-amber-500/10 transition-colors text-sm font-semibold">Заказать</button>
              </div>
            </div>

          </div>
        </section>

        {}
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
               <p className="text-[#8B8D98] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Нет. Мой главный принцип — вы платите один раз за разработку и настройку продукта под ключ. Вы не подсаживаетесь на иглу сервисов по подписке. Продукт полностью ваш навсегда.</p>
             </details>
             <details className="glass-card p-6 cursor-pointer group interactive-elem">
               <summary className="font-medium text-lg outline-none flex justify-between items-center">
                 Кому принадлежит сайт и база клиентов?
                 <span className="text-2xl group-open:rotate-45 transition-transform text-[#00F5D4]">+</span>
               </summary>
               <p className="text-[#8B8D98] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Полностью вам. Приложение разворачивается на надежном хостинге, а все данные и заказы поступают в вашу интуитивную систему управления и Telegram, доступ к которым есть только у вас.</p>
             </details>
             <details className="glass-card p-6 cursor-pointer group interactive-elem">
               <summary className="font-medium text-lg outline-none flex justify-between items-center">
                 Как мне менять цены или добавлять услуги?
                 <span className="text-2xl group-open:rotate-45 transition-transform text-[#00F5D4]">+</span>
               </summary>
               <p className="text-[#8B8D98] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">Через вашу персональную облачную панель управления. Вы заходите в неё с телефона или компьютера, меняете цифру, и она моментально обновляется в приложении. Никакого программирования.</p>
             </details>
          </div>
        </section>

      </main>

      {}
      <footer ref={footerRef} id="contact" className="fixed bottom-0 w-full min-h-[60vh] md:min-h-[70vh] h-auto bg-[#050505] flex flex-col justify-between p-6 md:p-12 z-0 border-t border-white/5 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center text-center mt-12 md:mt-10 flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-medium mb-6 md:mb-8">
            Начнем <span className="italic text-[#E50940]">проект</span>?
          </h2>
          
          <div className="w-full max-w-md relative interactive-elem">
            <input 
              type="text" 
              placeholder="Ваш Telegram или Телефон" 
              className="w-full min-h-[44px] bg-[#121212] border border-white/10 rounded-full py-3 md:py-4 pl-6 pr-28 md:pr-32 text-sm md:text-base text-white placeholder-white/30 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white text-black px-4 md:px-6 rounded-full font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Отправить
            </button>
          </div>
          <p className="text-xs text-[#8B8D98] mt-4 md:mt-6">Или напишите мне напрямую в Telegram для быстрой связи.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#8B8D98] max-w-7xl w-full mx-auto pt-8 md:pb-4 gap-4 md:gap-0">
          <span>&copy; 2026 AppSeaPro. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Telegram</a>
            <a href="#" className="hover:text-white transition-colors interactive-elem cursor-pointer">Instagram</a>
          </div>
        </div>
      </footer>

      <div ref={spacerRef} className="w-full relative z-[-1]"></div>

      {}
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

              <button onClick={() => setIsHorecaModalOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors interactive-elem p-2 z-20 bg-black/50 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <div className="text-center mb-10 mt-2">
                <span className="text-[#00F5D4] text-xs uppercase tracking-widest font-semibold mb-2 block">Smart HoReCa</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Цифровизация ресторанов без абонплат</h3>
                <p className="text-[#8B8D98] text-sm md:text-base max-w-2xl mx-auto">Интуитивная облачная панель управления. Вы меняете цены в панели — они меняются в приложении. Гость делает заказ — официант видит его в Telegram.</p>
              </div>

              <div className="border-t border-white/10 pt-10 pb-6">
                <h4 className="text-2xl font-serif text-center mb-2">Интерактивная Песочница</h4>
                <p className="text-center text-sm text-[#8B8D98] mb-8">Умные допродажи и корзина: попробуйте сами поменять цену, добавить блюдо и оформить заказ.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#080808] rounded-3xl p-6 md:p-8 border border-white/5 relative">
                  
                  <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0F9D58]/20 via-[#00F5D4] to-[#2AABEE] z-0 opacity-40"></div>

                  <div className="flex-1 border border-[#00F5D4]/30 rounded-[2rem] bg-[#0A0A0A] text-white overflow-hidden relative z-10 shadow-[0_0_30px_rgba(0,245,212,0.1)] flex flex-col mx-auto w-full max-w-sm">
                      <div className="bg-black/50 backdrop-blur-md py-3 px-4 flex items-center gap-2 border-b border-white/10">
                        <svg className="w-5 h-5 text-[#00F5D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        <span className="text-xs font-bold text-white tracking-wider">ПАНЕЛЬ УПРАВЛЕНИЯ</span>
                      </div>
                      <div className="p-5 flex-1 bg-[#080808]">
                          <p className="text-[11px] text-[#00F5D4]/70 mb-4 font-medium uppercase tracking-wider">Управление ценами</p>
                          <div className="space-y-3">
                            {menuItems.map(item => (
                               <div key={item.id} className="bg-white/5 p-3 rounded-xl border border-white/10 shadow-sm transition-all hover:border-[#00F5D4]/30">
                                 <div className="text-xs font-semibold text-white mb-2">{item.name}</div>
                                 <div className="flex items-center gap-2">
                                    <span className="text-xs text-white/50">Цена (₽):</span>
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
                        <span className="text-[10px] font-semibold text-white/50 tracking-wider">ЭКРАН ГОСТЯ (ТЕЛЕФОН)</span>
                        <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div><div className="w-2 h-2 rounded-full bg-white/20"></div></div>
                      </div>
                      <div className="p-5 space-y-4 flex-1">
                          <h5 className="text-lg font-serif font-medium mb-4">Меню ресторана</h5>
                           {menuItems.map(item => (
                             <div key={item.id} className="flex gap-4 items-center bg-white/5 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition group interactive-elem" onClick={() => handleAddToCart(item)}>
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shrink-0 flex items-center justify-center text-white/20 text-xs">Фото</div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium mb-1 group-hover:text-[#00F5D4] transition-colors leading-tight">{item.name}</div>
                                  <div className="text-[10px] text-white/50 mb-2">{item.desc}</div>
                                  <div className="text-sm font-bold text-[#00F5D4]">{item.price} ₽</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-[#00F5D4] group-hover:text-black transition-colors font-bold">+</div>
                             </div>
                           ))}
                      </div>
                      <div className="p-4 bg-gradient-to-t from-black to-transparent pt-10 border-t border-white/5">
                        <div className="flex justify-between items-center mb-3 px-1">
                          <span className="text-xs text-gray-400">В корзине: {sandboxCart.length} шт.</span>
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

                  <div className="flex-1 border border-[#2AABEE]/30 rounded-[2rem] bg-[#0e1621] overflow-hidden relative z-10 shadow-[0_0_40px_rgba(42,171,238,0.15)] flex flex-col mx-auto w-full max-w-sm">
                      <div className="bg-[#17212b] py-3 px-4 flex items-center gap-3 border-b border-black">
                        <svg className="w-6 h-6 text-[#2AABEE]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.833.94z"/></svg>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">AppSeaPro Заказы</div>
                          <div className="text-[10px] text-[#2AABEE]">Бот (ЭКРАН ПЕРСОНАЛА)</div>
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-end bg-[#0e1621] bg-opacity-90 overflow-y-auto" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(42,171,238,0.05) 0%, transparent 70%)' }}>
                          
                          {tgMessages.length === 0 ? (
                            <div className="text-center text-gray-500 text-xs my-auto">
                              Оформите заказ в приложении,<br/>чтобы он прилетел сюда
                            </div>
                          ) : (
                            <div className="space-y-4 flex flex-col-reverse">
                              {tgMessages.map(msg => (
                                <div key={msg.id} className="bg-[#182533] rounded-2xl rounded-tl-sm p-4 w-[85%] border border-[#2b5278] shadow-lg relative ml-2 fade-up-elem visible">
                                    <div className="text-[#2AABEE] text-xs font-bold mb-2">AppSeaPro Bot</div>
                                    <div className="text-white text-sm font-medium mb-1">🛎 Новый заказ!</div>
                                    <div className="text-white/80 text-sm mb-3">📍 Стол: <span className="font-bold text-white">№4</span></div>
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