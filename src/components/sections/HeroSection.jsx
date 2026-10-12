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
              {/* Лицевая сторона визитки */}
              <div className="hero-card-face hero-card-front glass-card flex items-center justify-center rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(229,9,64,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)] overflow-hidden group">
                {/* Динамический световой блик при наклоне */}
                <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28)_0%,rgba(229,9,64,0.12)_35%,transparent_70%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="glass-content text-center px-4 w-full flex flex-col items-center justify-center" style={{ transform: 'translateZ(35px)' }}>
                  <img
                    src="/1.png"
                    alt="AppSeaPro"
                    draggable={false}
                    className="w-44 sm:w-48 max-w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                  />
                  <p className="text-[10px] text-[#D4D4D8] mt-1 uppercase tracking-[0.22em] font-medium">Digital Boutique</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#A1A1AA] tracking-wider uppercase">
                    <span>Перевернуть</span>
                    <svg className="w-2.5 h-2.5 text-white/60 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Обратная сторона визитки с фотографией */}
              <div className="hero-card-face hero-card-back glass-card rounded-[2rem] border border-white/25 shadow-[0_25px_60px_rgba(229,9,64,0.28),inset_0_1px_1px_rgba(255,255,255,0.35)] overflow-hidden">
                <img
                  src="/elena-photo.jpg"
                  alt="Елена — IT-Архитектор"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent"></div>
                <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26)_0%,rgba(229,9,64,0.12)_35%,transparent_70%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                <div className="absolute bottom-5 left-4 right-4 text-center z-10">
                  <h3 className="font-serif text-xl text-white tracking-wide drop-shadow-md">Елена</h3>
                  <p className="text-[10px] text-[#D4D4D8] mt-1 uppercase tracking-widest font-medium">IT-Архитектор</p>
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

