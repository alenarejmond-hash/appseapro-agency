"use client";

import React from 'react';

export default function HeroSection({
  isHeroInteracting,
  isCardFlipped,
  isSoundEnabled,
  onCardFlip,
  onToggleSound,
  onHeroMove,
  onHeroLeave
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start md:justify-center relative px-4 md:px-6 pt-24 md:pt-24 pb-16 md:pb-0">
      <div className="max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-start md:justify-center items-center w-full pt-2 md:pt-0 pb-14 md:pb-28">
        <p className="text-[#D4D4D8] text-xs md:text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 fade-up-elem" style={{ transitionDelay: '0s' }}>
          Digital Boutique
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-5 md:mb-6 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
          Ваш цифровой <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">статус</span>.
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
          onClick={onCardFlip}
          onMouseMove={onHeroMove}
          onMouseLeave={onHeroLeave}
          onTouchStart={onHeroMove}
          onTouchMove={onHeroMove}
          onTouchEnd={onHeroLeave}
          onTouchCancel={onHeroLeave}
        >
          <button
            type="button"
            aria-label={isSoundEnabled ? 'Выключить звук переворота' : 'Включить звук переворота'}
            onClick={onToggleSound}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md flex items-center justify-center text-xs text-white/70 hover:text-white transition-all interactive-elem cursor-pointer"
          >
            {isSoundEnabled ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5L6 9H2v6h4l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5L6 9H2v6h4l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M22 9l-6 6M16 9l6 6" />
              </svg>
            )}
          </button>

          <div className={`hero-3d-element ${!isHeroInteracting ? 'is-idle' : ''} w-full h-full relative interactive-elem`}>
            <div
              className="hero-flip-inner w-full h-full relative"
              style={{ transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* Лицевая сторона визитки: темный титан и платина */}
              <div className="hero-card-face hero-card-front bg-gradient-to-br from-[#1c1c21] via-[#121216] to-[#08080a] flex flex-col justify-between p-5 rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] overflow-hidden group">
                {/* Динамический световой блик при наклоне */}
                <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,transparent_65%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Верхняя микро-гравировка карты */}
                <div className="w-full flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#A1A1AA] z-10 font-sans">
                  <span>PWA • 2026</span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_6px_#E50940]"></span>
                    NFC INSIDE
                  </span>
                </div>

                {/* Центр: логотип и статус бренда */}
                <div className="glass-content text-center px-2 w-full flex flex-col items-center justify-center my-auto z-10" style={{ transform: 'translateZ(30px)' }}>
                  <img
                    src="/1.png"
                    alt="AppSeaPro"
                    draggable={false}
                    className="w-40 sm:w-44 max-w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
                  />
                  <p className="text-[10px] text-[#D4D4D8] mt-2 uppercase tracking-[0.25em] font-medium font-sans">Digital Boutique</p>
                </div>

                {/* Нижняя строгая плашка */}
                <div className="w-full flex items-center justify-center pt-2 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#A1A1AA] font-medium">
                    <span>Нажмите, чтобы перевернуть</span>
                  </div>
                </div>
              </div>

              {/* Обратная сторона визитки с фотографией */}
              <div className="hero-card-face hero-card-back rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] overflow-hidden bg-[#09090b]">
                <img
                  src="/elena-portrait.jpg"
                  alt="Елена Сотникова — IT-Архитектор"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
                <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,transparent_65%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                <div className="absolute bottom-5 left-4 right-4 text-center z-10">
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide drop-shadow-md">Елена Сотникова</h3>
                  <p className="text-[10px] text-[#D4D4D8] mt-1 uppercase tracking-widest font-medium">IT-Архитектор • Основатель</p>
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
  );
}

