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
          Разовый платеж под ключ без обязательной абонплаты за платформу. Все заказы, брони и клиенты сразу поступают в ваш Telegram.
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
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$40</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    Без абонплат
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Разовый платеж под ключ • Никаких скрытых подписок</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Удобное обновление контактов без программистов и лишних трат</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Размещение и настройка под ключ за 1–2 дня</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Заявки сразу в ваш Telegram и сохранение VCF-контакта</span>
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
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$80</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    Без абонплат
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>3D-переворот, звук и кинематографичный WOW-эффект</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Удобное обновление прайса без программистов и лишних трат</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Размещение и настройка под ключ за 2–3 дня</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Заказы и заявки сразу в ваш Telegram (без сложных админок)</span>
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
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$130</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940]">
                    2 профиля в 1
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Личный и Деловой профиль: разовый запуск без абонплаты</span>
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
                    <span>Заказы и контакты сразу в ваш Telegram: раздельно для работы и жизни</span>
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
            <span>Кожаный брелок Crazy Horse (ручная работа): апгрейд к визитке <strong>$40</strong></span>
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
                    Вариант 1 • Без корзины
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Классика</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$220</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    Под ключ
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Бесконтактное электронное меню: кинематографичный дизайн и QR-код</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Мгновенный вызов официанта и запрос счета в 1 клик</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Управление ценами из обычной таблицы на телефоне (без программистов)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Запросы счета и вызовы официанта сразу в Telegram персонала</span>
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
                    Вариант 2 • С корзиной
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Флагман</h3>
                
                <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$350</span>
                    <span className="text-[11px] text-[#A1A1AA] block mt-0.5">разовый платеж • под ключ</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940]">
                    Под ключ
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
                    <span>Заказы гостей и комментарии кухне сразу в ваш Telegram</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Собственная система: без комиссий с заказов и без скрытых плат</span>
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

          {/* В базовую стоимость входит */}
          <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm text-[#D4D4D8]">
            <span className="w-2 h-2 rounded-full bg-white/40 shrink-0"></span>
            <span><strong>В базовую стоимость входит:</strong> запуск системы, дизайн под стиль ресторана, настройка Telegram-бота, QR-коды для столов и перенос до 10–15 позиций</span>
          </div>

          {/* Отдельная услуга: AI-фудфотосессия */}
          <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm text-[#D4D4D8]">
            <span className="w-2 h-2 rounded-full bg-[#E50940] shrink-0"></span>
            <span><strong>Спец-пакет «AI-фудфотосессия»:</strong> создание фотореалистичных иллюстраций для вашего меню с помощью нейросетей — <strong>от $70 за пакет блюд</strong></span>
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
                  Для частных бьюти-мастеров
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Beauty & SPA Ecosystem</h3>
              
              <div className="mb-6 pb-5 border-b border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl md:text-3xl font-serif text-white tracking-tight">$50</span>
                  <span className="text-[11px] text-[#A1A1AA] block mt-0.5">доступно каждому мастеру с 1–2 процедур</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                  Без абонплат
                </span>
              </div>
              
              <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Прямая онлайн-запись: вся прибыль с процедур остается вам</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Live-календарь со свободными окнами и режимом отпуска мастера</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Управление ценами из обычной таблицы на телефоне (без программистов)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Записи и брони сразу в ваш Telegram: никаких сложных админок</span>
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
                  <span><strong>Полная автономность:</strong> разработка под ключ без регулярной абонплаты за платформу</span>
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

