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
    <section className="min-h-[100dvh] flex flex-col items-center justify-start md:justify-center relative px-4 md:px-6 pt-20 md:pt-20 pb-12 md:pb-6">
      <div className="max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-start md:justify-center items-center w-full pt-1 md:pt-0 pb-6 md:pb-8">
        <p className="text-[#D4D4D8] text-xs md:text-sm font-medium tracking-widest uppercase mb-2 md:mb-3 fade-up-elem" style={{ transitionDelay: '0s' }}>
          Digital Boutique
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-2 md:mb-3 fade-up-elem" style={{ transitionDelay: '0.1s' }}>
          Ваш цифровой <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">статус</span>.
        </h1>

        <div className="max-w-4xl mx-auto mb-4 md:mb-5 fade-up-elem px-2" style={{ transitionDelay: '0.2s' }}>
          <p className="text-[#F3F4F6] text-base sm:text-lg md:text-xl font-serif tracking-wide mb-3 md:mb-3.5">
            Визитки, QR-меню и системы онлайн-записи. <span className="italic text-[#D4D4D8]">Создаем один раз — работает</span>{' '}
            <br className="hidden md:block" />
            <span className="italic text-[#D4D4D8]">на вас всегда.</span>
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
          className="hero-3d-wrapper touch-none w-56 h-72 sm:w-60 sm:h-80 md:w-60 md:h-[19.5rem] mx-auto mt-1 md:mt-2 mb-2 md:mb-3 fade-up-elem cursor-pointer relative z-20" 
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
            onClick={(e) => {
              e.stopPropagation();
              onToggleSound(e);
              if (onHeroLeave) onHeroLeave(e);
            }}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => {
              e.stopPropagation();
              if (onHeroLeave) onHeroLeave(e);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
            className="absolute top-0.5 -right-9 sm:-right-10 z-30 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md flex items-center justify-center text-xs text-white/60 hover:text-white transition-all interactive-elem cursor-pointer"
          >
            {isSoundEnabled ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5L6 9H2v6h4l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>

              {/* Обратная сторона визитки: темный титан с NFC-чипом (без фото) */}
              <div className="hero-card-face hero-card-back bg-gradient-to-br from-[#1c1c21] via-[#121216] to-[#08080a] flex flex-col justify-between p-5 rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] overflow-hidden group">
                {/* Динамический световой блик при наклоне */}
                <div className="hero-glare absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,transparent_65%)] opacity-35 pointer-events-none transition-transform duration-75"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/12 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                {/* Верхняя микро-гравировка карты */}
                <div className="w-full flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#A1A1AA] z-10 font-sans">
                  <span>APPSEAPRO</span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_6px_#E50940]"></span>
                    NFC PASS
                  </span>
                </div>

                {/* Центр: микрочип NFC как на фото и гравировка статуса */}
                <div className="glass-content text-center px-2 w-full flex flex-col items-center justify-center my-auto z-10" style={{ transform: 'translateZ(30px)' }}>
                  {/* Реалистичный микрочип NFC с ножками и спиральной антенной как на фото */}
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="absolute -inset-2 bg-white/5 rounded-2xl blur-md pointer-events-none"></div>
                    <svg
                      className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)] relative z-10"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="pin-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#E4E4E7" />
                          <stop offset="50%" stopColor="#A1A1AA" />
                          <stop offset="100%" stopColor="#52525B" />
                        </linearGradient>
                        <linearGradient id="pin-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#E4E4E7" />
                          <stop offset="50%" stopColor="#A1A1AA" />
                          <stop offset="100%" stopColor="#52525B" />
                        </linearGradient>
                        <linearGradient id="nfc-antenna-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="30%" stopColor="#E4E4E7" />
                          <stop offset="70%" stopColor="#D4D4D8" />
                          <stop offset="100%" stopColor="#A1A1AA" />
                        </linearGradient>
                        <linearGradient id="chip-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#222226" />
                          <stop offset="40%" stopColor="#18181b" />
                          <stop offset="100%" stopColor="#0d0d10" />
                        </linearGradient>
                      </defs>

                      {/* Металлические ножки микрочипа по 4 сторонам */}
                      <rect x="34" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="44" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="54" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="64" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="74" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="84" y="11" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />

                      <rect x="34" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="44" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="54" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="64" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="74" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />
                      <rect x="84" y="97" width="4" height="12" rx="1" fill="url(#pin-grad-v)" />

                      <rect x="11" y="34" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="11" y="44" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="11" y="54" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="11" y="64" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="11" y="74" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="11" y="84" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />

                      <rect x="97" y="34" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="97" y="44" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="97" y="54" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="97" y="64" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="97" y="74" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />
                      <rect x="97" y="84" width="12" height="4" rx="1" fill="url(#pin-grad-h)" />

                      {/* Корпус чипа со скошенными углами как на фото */}
                      <path
                        d="M29 20 H91 L99 28 V92 L91 100 H29 L21 92 V28 Z"
                        fill="url(#chip-body-grad)"
                        stroke="#3F3F46"
                        strokeWidth="1.2"
                      />

                      {/* Внутренняя матовая лицевая панель */}
                      <path
                        d="M31 23 H89 L96 30 V90 L89 97 H31 L24 90 V30 Z"
                        fill="#09090B"
                        stroke="#27272A"
                        strokeWidth="1"
                      />

                      {/* Спиральная антенна NFC (дорожки на чипе как на фото) */}
                      <rect x="29" y="28" width="62" height="64" rx="8" fill="none" stroke="url(#nfc-antenna-grad)" strokeWidth="1.75" />
                      <rect x="33" y="32" width="54" height="56" rx="6.5" fill="none" stroke="url(#nfc-antenna-grad)" strokeWidth="1.75" />
                      <rect x="37" y="36" width="46" height="48" rx="5" fill="none" stroke="url(#nfc-antenna-grad)" strokeWidth="1.75" />
                      <rect x="41" y="40" width="38" height="40" rx="3.5" fill="none" stroke="url(#nfc-antenna-grad)" strokeWidth="1.75" />

                      {/* Соединительная перемычка/дорожка чипа как на фото */}
                      <path
                        d="M51 59 H47 V50 L64 36 H71"
                        fill="none"
                        stroke="url(#nfc-antenna-grad)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="48" y="56" width="7" height="6" rx="1.5" fill="url(#nfc-antenna-grad)" />

                      {/* Надпись NFC в центре чипа */}
                      <text
                        x="60"
                        y="72"
                        textAnchor="middle"
                        fill="url(#nfc-antenna-grad)"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        fontWeight="800"
                        fontSize="13"
                        letterSpacing="0.08em"
                      >
                        NFC
                      </text>
                    </svg>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg text-white tracking-wide mb-1 drop-shadow-sm">
                    Touch to connect
                  </h3>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-[#D4D4D8] font-medium font-sans">
                    Designed in AppSeaPro
                  </p>
                </div>

                {/* Нижняя микро-гравировка преимуществ */}
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.2em] text-[#D4D4D8] z-10 font-sans">
                  <span>PWA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                  <span>Offline-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ненавязчивая плашка-подсказка об интерактиве */}
        <div className="flex items-center justify-center mt-2 mb-2 fade-up-elem" style={{ transitionDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[11px] md:text-xs text-white/50 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50940]/80 shadow-[0_0_8px_#E50940]"></span>
            <span>Подвигайте мышкой и нажмите для переворота</span>
          </div>
        </div>

        {/* Индикатор Scroll с отступом под подсказкой */}
        <div className="flex flex-col items-center gap-1.5 opacity-50 fade-up-elem z-10 mt-6 md:mt-8" style={{ transitionDelay: '0.5s' }}>
          <span className="text-[10px] md:text-xs tracking-widest uppercase text-[#A1A1AA]">Scroll</span>
          <div className="w-px h-6 md:h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

