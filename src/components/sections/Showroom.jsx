"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Showroom({
  onGlassMove,
  onOpenGallery,
  onOpenHorecaDemo
}) {
  const [activeDemoModal, setActiveDemoModal] = useState(null); // 'classic' | 'twin' | null
  const [modalIframeLoaded, setModalIframeLoaded] = useState(false);

  useEffect(() => {
    if (activeDemoModal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveDemoModal(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDemoModal]);

  useEffect(() => {
    const handleOpenDemoEvent = (e) => {
      if (e.detail === 'classic' || e.detail === 'twin') {
        setModalIframeLoaded(false);
        setActiveDemoModal(e.detail);
      }
    };
    window.addEventListener('open-demo-modal', handleOpenDemoEvent);
    return () => window.removeEventListener('open-demo-modal', handleOpenDemoEvent);
  }, []);

  return (
    <section id="showroom" className="pt-24 md:pt-32 pb-0 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 md:mb-24 fade-up-elem text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
          Выберите свое <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Решение</span>
        </h2>
        <p className="text-[#D4D4D8] text-base md:text-lg max-w-lg mx-auto">
          Безупречная эстетика и функциональность в каждом продукте. Разработано специально под вашу нишу.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Карточка 01: Цифровые PWA-визитки */}
        <div
          id="product-pwa"
          className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.14)_0%,transparent_55%)] pointer-events-none"></div>
          <div className="glass-content flex-1 z-10 text-left w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E50940]/10 border border-[#E50940]/30 text-[#E50940] text-[11px] uppercase tracking-widest font-semibold">
                Для предпринимателей и экспертов
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">01</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">Цифровые PWA-визитки</h3>
            <p className="text-[#D4D4D8] mb-8 text-sm md:text-base max-w-2xl leading-relaxed">
              Масштабируемый цифровой продукт: PWA-приложение на экране телефона, персональный QR-код и прямая ссылка. Разовый запуск под ключ — никаких скрытых подписок.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-left">
              {/* Classic */}
              <div
                onClick={(e) => { e.stopPropagation(); setModalIframeLoaded(false); setActiveDemoModal('classic'); }}
                className="p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/90 shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"></path>
                        </svg>
                      </div>
                      <h4 className="text-white font-serif text-lg tracking-wide">Classic</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                      VCF • QR
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Масштабируемый цифровой продукт: PWA-приложение, QR-код и ссылка. 7 премиальных дизайн-тем в выпадающем списке, микроанимации и мгновенное сохранение VCF-контакта.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></span>
                    Открыть демо (7 стилей)
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              {/* Infinity */}
              <div
                onClick={(e) => { e.stopPropagation(); onOpenGallery(); }}
                className="p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/15 hover:border-white/35 hover:bg-white/[0.05] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/90 group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                      </div>
                      <h4 className="text-white font-serif text-lg tracking-wide">Infinity</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                      3D • Sound
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Интерактивная 3D-визитка с физикой переворота, звуком и тактильным откликом. На обороте: блок доверия, прайс и смарт-кнопки под вашу сферу.
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940]"></span>
                    Открыть демо (9 ниш)
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              {/* Twin ID */}
              <div
                onClick={(e) => { e.stopPropagation(); setModalIframeLoaded(false); setActiveDemoModal('twin'); }}
                className="p-6 md:p-7 rounded-2xl bg-gradient-to-b from-[#E50940]/10 to-white/[0.02] border border-[#E50940]/30 hover:border-[#E50940]/55 hover:bg-white/[0.04] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E50940]/20 border border-[#E50940]/40 flex items-center justify-center text-[#E50940] shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                        </svg>
                      </div>
                      <h4 className="text-white font-serif text-lg tracking-wide">Twin ID</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940] font-semibold">
                      EXCLUSIVE
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Авторская разработка: Личный и Деловой профиль в одном решении. Умная смена стороны по времени суток и секретный жест для защиты приватности.
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/90 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940]"></span>
                    Открыть демо (Twin ID)
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 02: Smart QR-Меню */}
        <div
          id="product-horeca"
          className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row-reverse items-center gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          onClick={() => onOpenHorecaDemo('flagship')}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06)_0%,transparent_55%)] pointer-events-none"></div>
          <div className="glass-content flex-1 z-10 text-left w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[11px] uppercase tracking-widest font-semibold">
                Для ресторанов и кафе
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">02</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Smart <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">QR-Меню</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base mb-8 max-w-2xl leading-relaxed">
              Собственная автономная система заказов без процентов с чека и скрытых плат. Управление меню из привычной таблицы на телефоне, а все заказы и вызовы официанта моментально приходят в ваш Telegram.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
              <div
                onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('classic'); }}
                className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/90 group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg font-serif tracking-wide">Классика</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                      Вариант 1 • Без корзины
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Электронное QR-меню для ознакомления. Мультиязычность, умный стоп-лист и мгновенный вызов официанта или запрос счета в 1 клик с тактильным откликом.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></span>
                    Демо Классика
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              <div
                onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('flagship'); }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#E50940]/10 to-white/[0.02] border border-[#E50940]/30 hover:border-[#E50940]/55 hover:bg-white/[0.04] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E50940]/20 border border-[#E50940]/40 flex items-center justify-center text-[#E50940] group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg font-serif tracking-wide">Флагман</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/15 border border-[#E50940]/30 text-[#E50940] font-semibold">
                      Вариант 2 • С корзиной
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Полная автоматизация заказов с умными допродажами (Cross-sell). Гость собирает корзину, а умный QR-код определяет номер столика. Заказ падает сразу в Telegram персонала.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs md:text-sm font-medium text-white group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940]"></span>
                    Демо Флагман
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Спец-пакет: AI-фудфотосессия */}
            <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm text-[#D4D4D8]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E50940] shrink-0"></span>
                <span><strong>Спец-пакет «AI-фудфотосессия»:</strong> создание фотореалистичных иллюстраций для вашего меню с помощью нейросетей</span>
              </div>
              <span className="text-white font-medium whitespace-nowrap pl-4.5 sm:pl-0">от $70 за пакет блюд</span>
            </div>
          </div>
        </div>

        {/* Карточка 03: Эстетика и Онлайн-запись */}
        <div
          id="product-beauty"
          className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 interactive-elem fade-up-elem cursor-pointer border-white/15 scroll-mt-28"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(229,9,64,0.1)_0%,transparent_55%)] pointer-events-none"></div>
          
          {/* Макет смартфона с живым интерфейсом онлайн-записи */}
          <div className="w-full lg:w-5/12 min-h-[300px] lg:min-h-[340px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 bg-gradient-to-b from-[#18181b]/95 to-[#09090b]/95 p-4 sm:p-5 flex flex-col justify-between group">
            {/* Световые акценты темы */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#E50940]/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Верх смартфона: статус мастера и переключатель 6 стилей */}
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-serif text-white">
                    Е
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-medium leading-none">Елена Сотникова</h5>
                    <p className="text-[10px] text-[#A1A1AA] mt-0.5">Эстетика & Уход • Live</p>
                  </div>
                </div>

                {/* 6 цветовых стилей темы */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10" title="6 цветовых стилей">
                  <span className="w-2 h-2 rounded-full bg-[#E50940]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#9333EA]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#EC4899]"></span>
                </div>
              </div>

              {/* Интерактивный календарь с окнами записи */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[#D4D4D8]">
                  <span>Свободные окна записи:</span>
                  <span className="text-white/60">Май 2026</span>
                </div>

                {/* Дни недели */}
                <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
                  <div className="py-1.5 rounded-lg bg-white/[0.03] text-[#A1A1AA] border border-white/5">
                    <div>Пн</div>
                    <div className="font-semibold text-white/70">18</div>
                  </div>
                  <div className="py-1.5 rounded-lg bg-white/[0.03] text-[#A1A1AA] border border-white/5">
                    <div>Вт</div>
                    <div className="font-semibold text-white/70">19</div>
                  </div>
                  <div className="py-1.5 rounded-lg bg-white/15 text-white border border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                    <div className="text-[9px] text-[#E50940] font-semibold">Ср</div>
                    <div className="font-semibold text-white">20</div>
                  </div>
                  <div className="py-1.5 rounded-lg bg-white/[0.03] text-[#A1A1AA] border border-white/5">
                    <div>Чт</div>
                    <div className="font-semibold text-white/70">21</div>
                  </div>
                  <div className="py-1.5 rounded-lg bg-white/[0.03] text-[#A1A1AA] border border-white/5">
                    <div>Пт</div>
                    <div className="font-semibold text-white/70">22</div>
                  </div>
                </div>

                {/* Окошки времени */}
                <div className="grid grid-cols-3 gap-1.5 text-[10px] pt-1">
                  <div className="py-1.5 px-2 rounded-lg bg-[#E50940]/20 border border-[#E50940]/40 text-white font-medium text-center">
                    10:00 • Свободно
                  </div>
                  <div className="py-1.5 px-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/80 font-medium text-center">
                    13:30 • Свободно
                  </div>
                  <div className="py-1.5 px-2 rounded-lg bg-white/[0.02] border border-white/5 text-white/30 line-through text-center">
                    16:00
                  </div>
                </div>
              </div>
            </div>

            {/* Низ смартфона: статус Telegram-бота */}
            <div className="relative z-10 mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D4D4D8]">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-[#2AABEE]" viewBox="0 0 24 24">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
                <span>Бронь сразу в <strong>@DemoSeaBeauty_bot</strong></span>
              </div>
              <span className="text-[10px] text-[#10B981] font-semibold">24/7 Live</span>
            </div>
          </div>
          
          <div className="glass-content flex-1 z-10 text-left w-full flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[11px] uppercase tracking-widest font-semibold">
                Для мастеров и бьюти-сферы
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">03</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Эстетика и <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Онлайн-запись</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              Вся прибыль остается вам: прямая онлайн-запись без ежемесячной аренды сервисов. 6 готовых цветовых стилей оформления, удобное управление расписанием из таблицы, а брони моментально приходят в ваш Telegram.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 text-left mb-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/90 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-white text-base md:text-lg font-serif">Smart-бронирование</h4>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Live-календарь со свободными окнами, 6 цветовых стилей оформления и режим отпуска — без абонплаты агрегаторам.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/90 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </div>
                  <h4 className="text-white text-base md:text-lg font-serif">Таблица & Telegram-бот</h4>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Цены меняются из таблицы на телефоне. Все брони и контакты клиентов сразу летят в персональный Telegram-бот.
                </p>
              </div>
            </div>

            {/* Интерактивные кнопки демо Бьюти */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://master.appseapro.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-white/30 text-white text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] interactive-elem cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#E50940]"></span>
                <span>Открыть демо онлайн-записи (6 стилей)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="https://t.me/DemoSeaBeauty_bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#D4D4D8] hover:text-white text-xs sm:text-sm font-medium transition-all flex items-center gap-2 interactive-elem cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#2AABEE]" viewBox="0 0 24 24">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
                <span>Тестовый бот: @DemoSeaBeauty_bot</span>
              </a>
            </div>
          </div>
        </div>

        {/* Карточка 04: NFC-брелоки Crazy Horse */}
        <div
          id="nfc"
          className="glass-card lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 interactive-elem fade-up-elem overflow-hidden cursor-pointer border-white/15 scroll-mt-24"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06)_0%,transparent_55%)] pointer-events-none"></div>

          <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 group">
            <img src="nfc-keychain.jpg" alt="Leather NFC Keychain" draggable={false} className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 group-hover:scale-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-[11px] text-[#D4D4D8]">
              <span>Handcrafted Leather</span>
              <span className="text-white font-medium">NFC Inside</span>
            </div>
          </div>
          
          <div className="glass-content w-full lg:w-7/12 z-10 text-left flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[11px] uppercase tracking-widest font-semibold">
                Премиальный аксессуар • По желанию
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">04</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              NFC-брелоки <br className="hidden lg:block"/>из кожи <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Crazy Horse</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Отдельный премиальный аксессуар ручной работы — штучный апгрейд к вашей цифровой визитке за отдельную доплату. Натуральная винтажная кожа, ручной седельный шов. Одно касание брелоком к смартфону — и ваши контакты уже на экране партнера.
            </p>
            
            <div className="space-y-3.5 text-left">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center shrink-0 text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base mb-1">Полная автономность</h4>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Внутри зашит чип, который работает без батареек и не требует подзарядки на протяжении всего срока службы.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center shrink-0 text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M14.121 14.121L19 19m-7-7l-7-7m7 7L5 19m7-7l7-7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base mb-1">Ручная работа</h4>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Каждый брелок кроится и сшивается вручную традиционным седельным швом крепкой вощеной нитью.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center shrink-0 text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base mb-1">Благородное старение</h4>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Винтажная кожа Crazy Horse со временем становится только красивее, покрываясь индивидуальной живой патиной.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Модальное окно внутрисайтового демо Classic и Twin ID (в точности как Infinity: без смартфона, свободный холст) */}
      {typeof document !== 'undefined' && activeDemoModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-0 lg:px-10 lg:py-7 overflow-hidden overscroll-none bg-[#050505] lg:bg-[#050505]/96 lg:backdrop-blur-3xl animate-in fade-in duration-300"
          onClick={() => setActiveDemoModal(null)}
        >
          {/* Мягкое кинематографичное рассеянное свечение в центре космоса на десктопе */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-white/[0.035] blur-[140px] pointer-events-none"></div>

          {/* Мобильный парящий крестик закрытия (только < lg:) */}
          <button
            onClick={() => setActiveDemoModal(null)}
            aria-label="Закрыть демо"
            className="lg:hidden absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/55 hover:bg-white/[0.14] backdrop-blur-[20px] border border-white/15 flex items-center justify-center text-white/80 hover:text-white shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95 interactive-elem cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Парящая навигация сверху (только десктоп lg:) */}
          <div
            className="hidden lg:flex w-full max-w-7xl flex-col items-center justify-center relative z-30 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Правый верхний угол: аккуратная кнопка «На весь экран» и минималистичный крестик закрытия */}
            <div className="absolute right-0 top-0 flex items-center gap-3">
              <a
                href={activeDemoModal === 'classic' ? 'https://card-light.appseapro.com/' : 'https://me.appseapro.com/'}
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
                onClick={() => setActiveDemoModal(null)}
                aria-label="Закрыть демо"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-[20px] border border-white/10 hover:border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 interactive-elem cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Лаконичный заголовок */}
            <h3 className="font-serif text-2xl xl:text-3xl text-white tracking-tight mb-2">
              {activeDemoModal === 'classic' ? 'Classic PWA' : 'Twin ID'}
            </h3>
            <p className="text-xs text-[#A1A1AA]">
              {activeDemoModal === 'classic'
                ? '7 премиальных тем: переключайте стиль в меню визитки'
                : 'Личный и Деловой профиль: проведите секретный жест'}
            </p>
          </div>

          {/* Свободный интерактивный холст в центре (в точности как Infinity: max-w-xl, без смартфона) */}
          <div
            className="w-full flex-1 flex flex-col items-center justify-between lg:justify-center relative z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-[390px] sm:max-w-[400px] flex-1 lg:flex-none lg:w-full lg:max-w-[400px] h-full lg:h-[84vh] max-h-[850px] bg-transparent border-0 flex flex-col overflow-hidden mx-auto">
              {/* Деликатный лоадер в открытом пространстве во время подгрузки iframe */}
              <div
                className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-[#050505] lg:bg-transparent transition-opacity duration-500 ${
                  modalIframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="w-10 h-10 rounded-full border border-white/15 border-t-white/80 animate-spin"></div>
                </div>
                <div className="text-center px-6">
                  <p className="text-xs font-serif tracking-wider text-white">
                    {activeDemoModal === 'classic' ? 'Classic PWA' : 'Twin ID'}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] mt-1">
                    Загрузка визитки...
                  </p>
                </div>
              </div>

              {/* Свободный прозрачный живой iframe без смартфона и рамок */}
              <iframe
                src={activeDemoModal === 'classic' ? 'https://card-light.appseapro.com/' : 'https://me.appseapro.com/'}
                title={activeDemoModal === 'classic' ? 'Classic PWA Demo' : 'Twin ID Demo'}
                onLoad={() => setModalIframeLoaded(true)}
                className={`w-full h-full flex-1 border-0 bg-transparent transition-opacity duration-500 ease-out ${
                  modalIframeLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                allow="autoplay; clipboard-write"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

