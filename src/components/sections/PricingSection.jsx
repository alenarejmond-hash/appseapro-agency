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
          Разовый платеж под ключ без абонентской платы за платформу. Все заказы, брони и клиенты сразу поступают в ваш Telegram.
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
                
                <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                  <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$40</span>
                </div>

                {/* Быстрая подсказка сути тарифа */}
                <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/90">
                  <span className="text-[#A1A1AA] block text-[10px] uppercase tracking-wider mb-1 font-medium">Суть тарифа:</span>
                  Цифровая визитка: QR-код, контакты и сохранение в телефон за 1–2 дня.
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Никаких скрытых подписок и абонентских плат</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Удобное обновление контактов без программистов и лишних трат</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Размещение и запуск за 1–2 дня</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#E4E4E7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Заявки сразу в ваш Telegram и сохранение VCF-контакта</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: 'classic' }));
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    <span>Смотреть демо (7 стилей)</span>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </button>
                  <a
                    href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20Classic%20($40)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer interactive-elem"
                  >
                    <span>Обсудить тариф</span>
                    <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                  </a>
                </div>
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
                
                <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                  <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$80</span>
                </div>

                {/* Быстрая подсказка сути тарифа */}
                <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/90">
                  <span className="text-[#A1A1AA] block text-[10px] uppercase tracking-wider mb-1 font-medium">Суть тарифа:</span>
                  3D-визитка с переворотом и звуком: WOW-эффект и каталог работ.
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
                    <span>Размещение и запуск за 2–3 дня</span>
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
                  <a
                    href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20Infinity%20($80)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer interactive-elem"
                  >
                    <span>Обсудить тариф</span>
                    <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                  </a>
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
                
                <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                  <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$130</span>
                </div>

                {/* Быстрая подсказка сути тарифа */}
                <div className="mb-5 p-3 rounded-xl bg-[#E50940]/10 border border-[#E50940]/25 text-xs text-white/90">
                  <span className="text-[#E50940] block text-[10px] uppercase tracking-wider mb-1 font-semibold">Суть тарифа:</span>
                  Два профиля в одной ссылке: деловой и личный со скрытым Z-жестом.
                </div>
                
                <ul className="space-y-3.5 mb-8 text-sm text-[#D4D4D8] flex-1">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Личный и Деловой профиль в одной ссылке</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Секретный Z-жест и авто-смена стороны по времени суток</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Размещение и запуск за 3–5 дней</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Заказы и контакты сразу в ваш Telegram: раздельно для работы и жизни</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: 'twin' }));
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/15 hover:bg-white/[0.12] hover:border-white/30 transition-all text-xs font-semibold text-[#F3F4F6] flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    <span>Смотреть демо Twin ID</span>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </button>
                  <a
                    href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20Twin%20ID%20($130)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2 cursor-pointer interactive-elem"
                  >
                    <span>Обсудить тариф</span>
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Презентация кожаного NFC-брелока Crazy Horse */}
          <div className="mt-10 p-6 md:p-8 rounded-[24px] glass-card border-white/20 bg-gradient-to-r from-white/[0.04] via-[#E50940]/[0.08] to-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <div className="text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[10px] uppercase tracking-widest text-[#F3F4F6] font-medium mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_8px_#E50940]"></span>
                <span>Премиум-аксессуар • NFC</span>
              </div>
              <h4 className="text-xl md:text-2xl font-serif text-white mb-2">
                Кожаный брелок Crazy Horse (ручная работа)
              </h4>
              <p className="text-sm text-[#D4D4D8] leading-relaxed max-w-2xl">
                Винтажная натуральная кожа с благородным эффектом патины и встроенным чипом NFC. Приложите брелок к любому смартфону — ваша визитка откроется мгновенно без сканирования QR-кода.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-3 shrink-0 w-full md:w-auto">
              <div className="text-center md:text-right">
                <span className="text-2xl md:text-3xl font-serif text-white">$40</span>
                <span className="text-[11px] text-[#A1A1AA] block mt-0.5">ручная работа • с NFC</span>
              </div>
              <a
                href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9%20NFC-%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA%20Crazy%20Horse%20($40)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-xs font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2 cursor-pointer interactive-elem whitespace-nowrap"
              >
                <span>Заказать брелок</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
              </a>
            </div>
          </div>

          {/* Быстрые переходы к другим сферам бизнеса */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-[#A1A1AA]">
            <span>Также разрабатываем:</span>
            <button onClick={() => setActiveCategory('horeca')} className="underline hover:text-white transition-colors cursor-pointer">Для ресторанов (HoReCa) →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('beauty')} className="underline hover:text-white transition-colors cursor-pointer">Для бьюти-мастеров →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('custom')} className="underline hover:text-white transition-colors cursor-pointer">Индивидуальные проекты →</button>
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
                
                <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                  <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$220</span>
                </div>

                {/* Быстрая подсказка сути тарифа */}
                <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/90">
                  <span className="text-[#A1A1AA] block text-[10px] uppercase tracking-wider mb-1 font-medium">Суть тарифа:</span>
                  Электронное QR-меню, быстрый вызов официанта и запрос счета в Telegram в 1 клик.
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
                  <a
                    href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%20%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0%20($220)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer interactive-elem"
                  >
                    <span>Обсудить тариф</span>
                    <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                  </a>
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
                
                <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                  <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$350</span>
                </div>

                {/* Быстрая подсказка сути тарифа */}
                <div className="mb-5 p-3 rounded-xl bg-[#E50940]/10 border border-[#E50940]/25 text-xs text-white/90">
                  <span className="text-[#E50940] block text-[10px] uppercase tracking-wider mb-1 font-semibold">Суть тарифа:</span>
                  Автоматизация с корзиной, допродажами, номерами столов и чеками в Telegram кухни.
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
                  <a
                    href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%20%D0%A4%D0%BB%D0%B0%D0%B3%D0%BC%D0%B0%D0%BD%20($350)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2 cursor-pointer interactive-elem"
                  >
                    <span>Обсудить тариф</span>
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                  </a>
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

          {/* Быстрые переходы к другим сферам бизнеса */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-[#A1A1AA]">
            <span>Также разрабатываем:</span>
            <button onClick={() => setActiveCategory('pwa')} className="underline hover:text-white transition-colors cursor-pointer">PWA-Визитки →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('beauty')} className="underline hover:text-white transition-colors cursor-pointer">Для бьюти-мастеров →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('custom')} className="underline hover:text-white transition-colors cursor-pointer">Индивидуальные проекты →</button>
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
              
              <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">$50</span>
              </div>

              {/* Быстрая подсказка сути тарифа */}
              <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/90">
                <span className="text-[#A1A1AA] block text-[10px] uppercase tracking-wider mb-1 font-medium">Суть тарифа:</span>
                Live-календарь и онлайн-запись в Telegram: вся выручка мастеру без агрегаторов.
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

              <a
                href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%20Beauty%20%26%20SPA%20($50)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer interactive-elem"
              >
                <span>Обсудить тариф</span>
                <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
              </a>
            </div>
          </div>

          {/* Быстрые переходы к другим сферам бизнеса */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-[#A1A1AA]">
            <span>Также разрабатываем:</span>
            <button onClick={() => setActiveCategory('pwa')} className="underline hover:text-white transition-colors cursor-pointer">PWA-Визитки →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('horeca')} className="underline hover:text-white transition-colors cursor-pointer">Для ресторанов (HoReCa) →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('custom')} className="underline hover:text-white transition-colors cursor-pointer">Индивидуальные проекты →</button>
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
              
              <div className="mb-4 pb-4 border-b border-white/10 flex items-baseline justify-between">
                <span className="text-3xl md:text-4xl font-serif text-white tracking-tight">от $600</span>
              </div>

              {/* Быстрая подсказка сути тарифа */}
              <div className="mb-5 p-3 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white/90">
                <span className="text-white/70 block text-[10px] uppercase tracking-wider mb-1 font-semibold">Суть тарифа:</span>
                Сложные веб-сервисы, Telegram-экосистемы и боты с нуля по вашему ТЗ.
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
                  <span><strong>Полная автономность:</strong> разработка под ключ без абонентской платы за платформу</span>
                </li>
              </ul>

              <a
                href="https://t.me/appseapro?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%95%D0%BB%D0%B5%D0%BD%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20(%D0%BE%D1%82%20$600)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2 cursor-pointer interactive-elem"
              >
                <span>Обсудить индивидуальный проект</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
              </a>
            </div>
          </div>

          {/* Быстрые переходы к другим сферам бизнеса */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-[#A1A1AA]">
            <span>Также разрабатываем:</span>
            <button onClick={() => setActiveCategory('pwa')} className="underline hover:text-white transition-colors cursor-pointer">PWA-Визитки →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('horeca')} className="underline hover:text-white transition-colors cursor-pointer">Рестораны (HoReCa) →</button>
            <span>•</span>
            <button onClick={() => setActiveCategory('beauty')} className="underline hover:text-white transition-colors cursor-pointer">Для бьюти-мастеров →</button>
          </div>
        </div>
      )}

    </section>
  );
}

