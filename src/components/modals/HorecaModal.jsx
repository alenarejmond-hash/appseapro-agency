"use client";

import React from 'react';

export default function HorecaModal({
  isOpen,
  onClose,
  horecaMode,
  onSwitchMode,
  activeConfig,
  iframeLoaded,
  setIframeLoaded,
  showTgPopup,
  setShowTgPopup,
  onTouchStart,
  onTouchMove
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[115] flex flex-col items-center justify-between lg:justify-center p-0 lg:px-8 lg:py-4 overflow-hidden overscroll-none bg-[#050505] lg:bg-[#050505]/96 lg:backdrop-blur-3xl"
      onClick={onClose}
    >
      {/* Сдержанный монохромный дымчатый свет позади холста на десктопе */}
      <div className="hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-white/[0.03] blur-[150px] pointer-events-none"></div>

      {/* Парящая навигация сверху в правой стороне (только десктоп lg:, в точности как в визитках) */}
      <div
        className="hidden lg:flex absolute top-6 right-8 z-40 items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={activeConfig.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] backdrop-blur-xl border border-white/10 hover:border-white/25 text-xs font-medium text-[#E4E4E7] hover:text-white transition-all duration-300 interactive-elem"
        >
          <span>На весь экран</span>
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </a>

        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть демо"
          className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-[20px] border border-white/10 hover:border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 interactive-elem cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 1. Верхняя линия управления над меню */}
      <div
        className="relative z-30 w-full lg:max-w-2xl shrink-0 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2.5 lg:px-0 lg:py-0 lg:mb-3 bg-[#050505] lg:bg-transparent border-b border-white/10 lg:border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between lg:justify-center gap-2 lg:gap-3 max-w-lg lg:max-w-none mx-auto">
          {/* По центру/слева: минималистичный Segmented Control [ 🛎️ Классика ] [ 🛒 Флагман ] */}
          <div className="relative p-1 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] grid grid-cols-2 items-center min-w-[200px] sm:min-w-[260px] flex-1 max-w-[260px]">
            {/* Скользящая каретка с мягким белым свечением */}
            <div
              style={{
                transform: horecaMode === 'classic' ? 'translateX(0%)' : 'translateX(100%)'
              }}
              className="pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-white/[0.14] border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            <button
              type="button"
              onClick={() => onSwitchMode('classic')}
              className={`relative z-10 px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-wide transition-colors duration-300 text-center whitespace-nowrap cursor-pointer interactive-elem ${
                horecaMode === 'classic' ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white font-medium'
              }`}
            >
              🛎️ Классика
            </button>

            <button
              type="button"
              onClick={() => onSwitchMode('flagship')}
              className={`relative z-10 px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-wide transition-colors duration-300 text-center whitespace-nowrap cursor-pointer interactive-elem ${
                horecaMode === 'flagship' ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white font-medium'
              }`}
            >
              🛒 Флагман
            </button>
          </div>

          {/* Правая часть: Стеклянная пилюля «✈️ Чат персонала» и аккуратный мобильный крестик в одной строке */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://t.me/restaurant_appseapro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] backdrop-blur-xl border border-white/15 hover:border-white/30 text-[10px] sm:text-xs font-medium text-[#D4D4D8] hover:text-white transition-all duration-300 whitespace-nowrap interactive-elem"
            >
              <span>✈️ Чат персонала</span>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>

            {/* Мобильный крестик закрытия — аккуратно встроен в строку навигации рядом с кнопкой, без наездов */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть демо"
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.14] active:scale-95 backdrop-blur-[20px] border border-white/15 flex items-center justify-center text-white/80 hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all interactive-elem cursor-pointer shrink-0"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. СВОБОДНЫЙ ЭКРАН ЖИВОГО МЕНЮ */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-20 w-full flex-1 lg:flex-none lg:max-w-2xl lg:h-[84vh] bg-[#050505] lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-[0_35px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
      >
        {/* 3. ДЕЛИКАТНОЕ iOS PUSH-УВЕДОМЛЕНИЕ ИЗ ТЕМНОГО СТЕКЛА */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          className={`absolute top-3 left-3 right-3 sm:left-5 sm:right-5 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${
            showTgPopup
              ? 'translate-y-0 scale-100 opacity-100 pointer-events-auto'
              : '-translate-y-8 scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative rounded-2xl bg-[#0a0a0e]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] p-3.5 sm:p-4 text-left transition-colors duration-300 hover:border-white/25 group">
            {/* Крестик смахивания */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTgPopup(false);
              }}
              aria-label="Скрыть уведомление"
              className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-white/60 hover:text-white text-xs transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Клик по пушу переводит в канал ресторана */}
            <a
              href="https://t.me/restaurant_appseapro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 pr-6 cursor-pointer interactive-elem"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white/85">
                <svg className="w-4 h-4 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-white tracking-tight truncate">
                    {activeConfig.pushTitle}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 shrink-0">
                    сейчас
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#D4D4D8] group-hover:text-white transition-colors inline-flex items-center flex-wrap gap-1">
                  <span>{activeConfig.pushText}</span>
                  <svg className="w-3.5 h-3.5 inline-block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Сдержанный монохромный лоадер во время подгрузки iframe */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-[#050505] transition-opacity duration-500 ${
            iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="w-9 h-9 border border-white/15 border-t-white/80 rounded-full animate-spin"></div>
          <div className="text-center px-6">
            <p className="text-xs font-serif text-white tracking-wider">
              {activeConfig.tabLabel}
            </p>
            <p className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em] mt-1">
              Загрузка меню...
            </p>
          </div>
        </div>

        {/* Чистый контейнер живого меню (iframe) */}
        <iframe
          key={horecaMode}
          src={activeConfig.url}
          title={`Smart HoReCa — ${horecaMode}`}
          onLoad={() => setIframeLoaded(true)}
          className={`w-full h-full flex-1 border-0 bg-[#050505] transition-opacity duration-500 ease-out ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}

