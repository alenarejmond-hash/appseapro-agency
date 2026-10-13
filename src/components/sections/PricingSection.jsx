"use client";

import React, { useState } from 'react';

export default function PricingSection({
  onGlassMove,
  onOpenGallery,
  onOpenHorecaDemo
}) {
  const [activeCategory, setActiveCategory] = useState('pwa');

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 md:px-8 relative z-10 overflow-hidden scroll-mt-20">
      <span id="investments" className="absolute -top-24"></span>
      
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-12 fade-up-elem">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
          Тарифы и <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Стоимость</span>
        </h2>
        <p className="text-[#D4D4D8] text-base md:text-lg max-w-xl mx-auto">
          Фиксированная стоимость разработки под ключ. Продукт становится вашим цифровым активом — без процентов с чеков и комиссий агрегаторам.
        </p>
      </div>

      {/* Вкладки категорий */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 max-w-fit mx-auto mb-10 md:mb-14">
        <button
          onClick={() => setActiveCategory('pwa')}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'pwa'
              ? 'bg-white text-black shadow-lg font-semibold'
              : 'text-[#D4D4D8] hover:text-white hover:bg-white/5'
          }`}
        >
          PWA-Визитки
        </button>
        <button
          onClick={() => setActiveCategory('horeca')}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'horeca'
              ? 'bg-white text-black shadow-lg font-semibold'
              : 'text-[#D4D4D8] hover:text-white hover:bg-white/5'
          }`}
        >
          Рестораны (HoReCa)
        </button>
        <button
          onClick={() => setActiveCategory('beauty')}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'beauty'
              ? 'bg-white text-black shadow-lg font-semibold'
              : 'text-[#D4D4D8] hover:text-white hover:bg-white/5'
          }`}
        >
          Бьюти & Мастера
        </button>
        <button
          onClick={() => setActiveCategory('custom')}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'custom'
              ? 'bg-white text-black shadow-lg font-semibold'
              : 'text-[#D4D4D8] hover:text-white hover:bg-white/5'
          }`}
        >
          Свой проект (Кастом)
        </button>
      </div>

      {/* 1. Категория: PWA-Визитки */}
      {activeCategory === 'pwa' && (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Classic */}
            <div
              className="glass-card p-6 md:p-8 flex flex-col border-white/15 interactive-elem cursor-pointer"
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
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $150</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    0% комиссий
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>100% владение кодом: без абонентской платы агентству</span>
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
                    <span>Синхронизация с вашим Telegram и сохранение VCF контакта</span>
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

            {/* Infinity */}
            <div
              className="glass-card p-6 md:p-8 flex flex-col border-white/15 interactive-elem cursor-pointer"
              onMouseMove={onGlassMove}
              onTouchMove={onGlassMove}
            >
              <div className="glass-content h-full flex flex-col text-left">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                    PWA Визитка • 3D
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Infinity</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $300</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    0% комиссий
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>3D-переворот, звук и кинематографичный WOW-эффект</span>
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

            {/* Twin ID */}
            <div
              className="glass-card p-6 md:p-8 flex flex-col border-[#E50940]/35 shadow-[0_24px_60px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] relative interactive-elem cursor-pointer bg-gradient-to-b from-[#E50940]/10 to-transparent"
              onMouseMove={onGlassMove}
              onTouchMove={onGlassMove}
            >
              <div className="glass-content h-full flex flex-col text-left">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940] text-[10px] font-semibold uppercase tracking-widest">
                    EXCLUSIVE
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Twin ID</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $500</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940]">
                    2 профиля в 1
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Личный и Деловой профиль в одной визитке без абонплат</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Секретный Z-жест и авто-смена стороны по времени суток</span>
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
          </div>

          {/* Аккуратная подсказка про NFC брелок */}
          <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm text-[#D4D4D8]">
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span>К любой визитке доступен физический NFC-брелок из винтажной кожи Crazy Horse — <strong>от $60</strong></span>
          </div>
        </div>
      )}

      {/* 2. Категория: Рестораны (HoReCa) */}
      {activeCategory === 'horeca' && (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HoReCa Classic */}
            <div
              className="glass-card p-6 md:p-8 flex flex-col border-white/15 interactive-elem cursor-pointer"
              onMouseMove={onGlassMove}
              onTouchMove={onGlassMove}
            >
              <div className="glass-content h-full flex flex-col text-left">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                    Без корзины
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Классика</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $400</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    0% с чеков
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Бесконтактное интерактивное меню с кинематографичным дизайном</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Мгновенный вызов официанта и запрос счета в 1 клик</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Персональная панель управления ценами и стоп-листом блюд</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Синхронизация запросов с Telegram персонала заведения</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('classic'); }}
                    className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Смотреть демо Классика</span>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" /></svg>
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

            {/* HoReCa Flagship */}
            <div
              className="glass-card p-6 md:p-8 flex flex-col border-[#E50940]/35 shadow-[0_24px_60px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] bg-gradient-to-b from-[#E50940]/10 to-transparent interactive-elem cursor-pointer"
              onMouseMove={onGlassMove}
              onTouchMove={onGlassMove}
            >
              <div className="glass-content h-full flex flex-col text-left">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940] text-[10px] font-semibold uppercase tracking-widest">
                    PRO • С корзиной
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Флагман</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $800</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940]">
                    Cross-sell
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Полная автоматизация с корзиной, допродажами и столиками</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Умный QR-код с авто-определением номера стола гостя</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Комментарии шеф-повару и моментальные заказы в Telegram</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>0% комиссии с оборота: никакой абонплаты сторонним сервисам</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('flagship'); }}
                    className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Смотреть демо Флагман</span>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" /></svg>
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                    className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] cursor-pointer"
                  >
                    Обсудить проект
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Категория: Бьюти & Мастера */}
      {activeCategory === 'beauty' && (
        <div className="max-w-xl mx-auto">
          <div
            className="glass-card p-6 md:p-8 flex flex-col border-white/15 interactive-elem cursor-pointer"
            onMouseMove={onGlassMove}
            onTouchMove={onGlassMove}
          >
            <div className="glass-content h-full flex flex-col text-left">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[10px] font-medium uppercase tracking-widest">
                  Салоны и Эксперты
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Beauty & SPA Ecosystem</h3>
              
              <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $450</span>
                  <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                  Без абонплат
                </span>
              </div>
              
              <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Прямая онлайн-запись клиентов: без комиссий агрегаторам</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Live-календарь с умным поиском свободных окон и режимом отпуска</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Уникальный дизайн под ваш бренд и эстетику услуг</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Мгновенные уведомления о бронях и утренняя сводка в Telegram</span>
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
      )}

      {/* 4. Категория: Свой проект (Кастом под ключ) */}
      {activeCategory === 'custom' && (
        <div className="max-w-xl mx-auto">
          <div
            className="glass-card p-6 md:p-8 flex flex-col border-white/20 interactive-elem cursor-pointer bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
            onMouseMove={onGlassMove}
            onTouchMove={onGlassMove}
          >
            <div className="glass-content h-full flex flex-col text-left">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest">
                  Custom Engineering
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Индивидуальная разработка</h3>
              
              <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">от $600</span>
                  <span className="text-[11px] text-[#A1A1AA] block mt-0.5">по брифу и техническому заданию</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                  Архитектура с нуля
                </span>
              </div>
              
              <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Кастомные веб-сервисы:</strong> личные кабинеты, умные калькуляторы и платформы</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Telegram-экосистемы:</strong> боты автоматизации, прием платежей и интеграция с CRM</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Чистый авторский код:</strong> никаких шаблонных рамок, максимальная скорость и надежность</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>100% права и владение:</strong> полная передача всех исходников и базы данных заказчику</span>
                </li>
              </ul>

              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] cursor-pointer"
              >
                Обсудить индивидуальный проект
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

