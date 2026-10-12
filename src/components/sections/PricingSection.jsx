"use client";

import React from 'react';

export default function PricingSection({
  onGlassMove,
  onOpenGallery,
  onOpenHorecaDemo
}) {
  return (
    <section id="investments" className="py-24 md:py-32 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 fade-up-elem">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
          Инвестиции в <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Капитал Бренда</span>
        </h2>
        <p className="text-[#D4D4D8] text-base md:text-lg max-w-xl mx-auto">
          Фиксированная инвестиция в разработку под ключ. Продукт становится вашим цифровым активом — без процентов с чеков и комиссий агрегаторам.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        
        {/* 1. Classic */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/15 interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
        >
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                PWA Визитка
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Classic</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex items-baseline justify-between">
              <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Разработка под ключ</span>
              <span className="text-2xl md:text-3xl font-serif text-white">от $150</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>100% владение кодом и экосистемой: без абонентской платы агентству</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Персональная панель управления без программирования</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Размещение и настройка под ключ за 1–2 дня</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Синхронизация с вашим Telegram и телефонной книгой</span>
              </li>
            </ul>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>

        {/* 2. Infinity */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/15 interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                PWA Визитка • 3D
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Infinity</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex items-baseline justify-between">
              <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Разработка под ключ</span>
              <span className="text-2xl md:text-3xl font-serif text-white">от $300</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Полная автономия бизнеса: без абонентской платы агентству</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Персональная панель управления без программирования</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Размещение и настройка под ключ за 2–3 дня</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Синхронизация заявок и лидов с вашим Telegram</span>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={(e) => { e.stopPropagation(); onOpenGallery(); }}
                className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Галерея дизайнов (9 ниш)</span>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </button>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white cursor-pointer"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>

        {/* 3. Twin ID */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.28)] relative interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest">
                Эксклюзив
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Twin ID</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.05] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] flex items-baseline justify-between">
              <span className="text-xs text-[#D4D4D8] uppercase tracking-wider">Разработка под ключ</span>
              <span className="text-2xl md:text-3xl font-serif text-white">от $500</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Владение обоими профилями: без абонентской платы агентству</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Персональная панель управления двумя профилями</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Размещение и настройка под ключ за 3–5 дней</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Приватная синхронизация с вашим личным и рабочим Telegram</span>
              </li>
            </ul>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>

        {/* 4. Smart HoReCa */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/15 interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                Для ресторанов
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Smart HoReCa</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col gap-2">
              <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Классика</span>
                <span className="font-serif text-xl text-white">от $400</span>
              </div>
              <div className="flex justify-between items-baseline pt-0.5">
                <span className="text-xs text-[#D4D4D8] uppercase tracking-wider">Флагман</span>
                <span className="font-serif text-xl text-white">от $800</span>
              </div>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>0% комиссии с заказов: без арендной платы за столики агрегаторам</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Персональная панель управления ценами и стоп-листом</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Размещение и настройка меню под ключ за 5–7 дней</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Мгновенная синхронизация заказов с Telegram персонала</span>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('flagship'); }}
                className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Смотреть демо меню</span>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </button>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white cursor-pointer"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>

        {/* 5. Beauty & SPA */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/15 interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                Салоны и Мастера
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Beauty & SPA</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex items-baseline justify-between">
              <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Разработка под ключ</span>
              <span className="text-2xl md:text-3xl font-serif text-white">от $450</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Прямая запись клиентов: без абонентской платы агрегаторам</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Персональная панель управления графиком без программирования</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Размещение и настройка под ключ за 3–5 дней</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Синхронизация записей и сводок с вашим Telegram</span>
              </li>
            </ul>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>

        {/* 6. NFC Брелок */}
        <div
          className="glass-card p-6 md:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col border-white/15 interactive-elem fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="glass-content h-full flex flex-col text-left">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                Физический носитель
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">NFC Брелок</h3>
            <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] flex items-baseline justify-between">
              <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Фиксированная цена</span>
              <span className="text-2xl md:text-3xl font-serif text-white">от $60</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Пассивный NFC-чип: работает автономно, без батареек и подписок</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Управление привязанной ссылкой через панель без перепрошивки</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Индивидуальный пошив и программирование под ключ за 2–3 дня</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Мгновенный переход на вашу визитку и Telegram в одно касание</span>
              </li>
            </ul>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

