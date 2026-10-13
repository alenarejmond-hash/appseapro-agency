"use client";

import React from 'react';

export default function InfinityModal({
  isOpen,
  onClose,
  templates,
  currentTemplate,
  iframeLoaded,
  setIframeLoaded,
  onSelectNiche,
  onStepNiche,
  switcherRef
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-between p-0 lg:px-10 lg:py-7 overflow-hidden overscroll-none bg-[#050505] lg:bg-[#050505]/96 lg:backdrop-blur-3xl"
    >
      {/* Мягкое кинематографичное рассеянное свечение (ambient glow) в центре космоса на десктопе */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-white/[0.035] blur-[140px] pointer-events-none"></div>

      {/* Мобильный парящий крестик закрытия (только < lg:) */}
      <button
        onClick={onClose}
        aria-label="Закрыть шоурум"
        className="lg:hidden absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-50 w-11 h-11 rounded-full bg-black/55 hover:bg-white/[0.14] backdrop-blur-[20px] border border-white/15 flex items-center justify-center text-white/80 hover:text-white shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95 interactive-elem cursor-pointer"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* ================= 1. ПАРЯЩАЯ НАВИГАЦИЯ СВЕРХУ (ТОЛЬКО ДЕСКТОП lg:) ================= */}
      <div
        className="hidden lg:flex w-full max-w-7xl flex-col items-center justify-center relative z-30 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Правый верхний угол: аккуратная кнопка «На весь экран» и минималистичный крестик закрытия */}
        <div className="absolute right-0 top-0 flex items-center gap-3">
          <a
            href={`${currentTemplate.url}?ref=catalog`}
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
            onClick={onClose}
            aria-label="Закрыть шоурум"
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-[20px] border border-white/10 hover:border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 interactive-elem cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Лаконичный заголовок «Infinity 3D» */}
        <h3 className="font-serif text-2xl xl:text-3xl text-white tracking-tight mb-4">
          Infinity 3D
        </h3>

        {/* Воздушная горизонтальная линия изящных матовых пилюль ниш */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl">
          {templates.map((tpl) => {
            const isActive = currentTemplate.id === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => onSelectNiche(tpl)}
                className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-300 backdrop-blur-xl border cursor-pointer interactive-elem ${
                  isActive
                    ? 'bg-white/[0.12] border-white/35 text-white font-medium shadow-[0_0_25px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.3)]'
                    : 'bg-white/[0.03] border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/[0.06] hover:border-white/20 font-normal'
                }`}
              >
                {tpl.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= 2. СВОБОДНЫЙ ИНТЕРАКТИВНЫЙ ХОЛСТ В ЦЕНТРЕ ================= */}
      <div
        className="w-full flex-1 flex flex-col items-center justify-between lg:justify-center relative z-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 lg:flex-none lg:w-full lg:max-w-xl lg:h-[72vh] bg-transparent border-0 flex flex-col overflow-hidden">
          {/* Деликатный лоадер в открытом пространстве во время подгрузки iframe */}
          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-[#050505] lg:bg-transparent transition-opacity duration-500 ${
              iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="w-10 h-10 rounded-full border border-white/15 border-t-white/80 animate-spin"></div>
            </div>
            <div className="text-center px-6">
              <p className="text-xs font-serif tracking-wider text-white">
                {currentTemplate.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mt-1">
                Загрузка 3D-визитки...
              </p>
            </div>
          </div>

          {/* Свободный прозрачный живой iframe выбранной ниши с плавным fade-переходом */}
          <iframe
            key={currentTemplate.id}
            src={currentTemplate.url}
            title={currentTemplate.name}
            onLoad={() => setIframeLoaded(true)}
            className={`w-full h-full flex-1 border-0 bg-transparent transition-opacity duration-500 ease-out ${
              iframeLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            allow="autoplay; clipboard-write"
          />
        </div>

        {/* ================= НИЖНИЙ ПЕРЕКЛЮЧАТЕЛЬ НИШ НА СМАРТФОНАХ (только < lg:) ================= */}
        <div className="lg:hidden w-full shrink-0 px-3 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent relative z-40">
          <div
            style={{
              boxShadow: `0 12px 35px rgba(0,0,0,0.9), 0 0 25px -8px ${currentTemplate.glow}, inset 0 1px 0 rgba(255,255,255,0.18)`
            }}
            className="mx-auto max-w-md h-12 rounded-full bg-[#0B0B0F]/85 backdrop-blur-2xl border border-white/15 flex items-center justify-between px-1.5"
          >
            {/* Кнопка влево ‹ */}
            <button
              onClick={() => onStepNiche(-1)}
              aria-label="Предыдущая ниша"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white active:scale-90 transition-all shrink-0 cursor-pointer"
            >
              <span className="text-lg leading-none font-light">‹</span>
            </button>

            {/* Свайп-лента режимов */}
            <div
              ref={switcherRef}
              className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-1 px-2 scroll-smooth snap-x snap-mandatory"
            >
              {templates.map((tpl, index) => {
                const isActive = currentTemplate.id === tpl.id;
                return (
                  <React.Fragment key={tpl.id}>
                    <button
                      data-niche-id={tpl.id}
                      onClick={() => onSelectNiche(tpl)}
                      style={
                        isActive
                          ? {
                              borderColor: `${tpl.color}88`,
                              background: tpl.softBg,
                              boxShadow: `0 0 16px -3px ${tpl.glow}, inset 0 1px 0 rgba(255,255,255,0.25)`
                            }
                          : undefined
                      }
                      className={`snap-center shrink-0 px-3 py-1 rounded-full text-xs tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'border text-white font-semibold scale-105'
                          : 'border border-transparent text-white/55 hover:text-white/85 font-normal'
                      }`}
                    >
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: tpl.color,
                            boxShadow: `0 0 8px ${tpl.color}`
                          }}
                        ></span>
                      )}
                      <span className="whitespace-nowrap">{tpl.name}</span>
                    </button>

                    {index < templates.length - 1 && (
                      <span className="text-white/20 text-[10px] select-none shrink-0">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Кнопка вправо › */}
            <button
              onClick={() => onStepNiche(1)}
              aria-label="Следующая ниша"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white active:scale-90 transition-all shrink-0 cursor-pointer"
            >
              <span className="text-lg leading-none font-light">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

