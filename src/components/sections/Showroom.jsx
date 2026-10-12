"use client";

import React from 'react';

export default function Showroom({
  onGlassMove,
  onOpenGallery,
  onOpenHorecaDemo
}) {
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
              Устанавливаются на рабочий стол телефона как приложение в один клик. БЕЗ скачивания из App Store или Google Play. Ваш статус и контакты всегда под рукой.
            </p>
            
            <div className="equal-subcards-grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-5 text-left">
              {/* Classic */}
              <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start group">
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center text-white shadow-inner shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"></path>
                      </svg>
                    </div>
                    <h4 className="text-white font-serif text-lg tracking-wide">Classic</h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4D4D8] font-medium shrink-0">
                    VCF • QR
                  </span>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Лаконичная визитка. 7 премиальных дизайн-тем, мультиязычность, кинематографичные анимации и умное сохранение VCF контакта прямо в телефонную книгу.
                </p>
              </div>

              {/* Infinity */}
              <div
                onClick={(e) => { e.stopPropagation(); onOpenGallery(); }}
                className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-between group border-[#00F5D4]/35 hover:border-[#00F5D4]/70 hover:shadow-[0_18px_40px_rgba(0,245,212,0.16),inset_0_1px_0_rgba(255,255,255,0.28)] cursor-pointer interactive-elem"
              >
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.16)_0%,transparent_60%)] pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5D4]/25 to-[#00F5D4]/5 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.2)] group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                      </div>
                      <h4 className="text-white font-serif text-lg tracking-wide group-hover:text-[#00F5D4] transition-colors">Infinity</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] font-semibold shrink-0">
                      3D • Sound
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Интерактивная 3D-визитка с переворотом, звуком и тактильным откликом. На обороте: блок доверия, прайс и смарт-кнопки. Адаптация под любую нишу.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#00F5D4] group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]"></span>
                    Галерея дизайнов (9 ниш)
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              {/* Twin ID */}
              <div className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-start group border-[#E50940]/40 bg-gradient-to-br from-[#E50940]/15 via-[#E50940]/5 to-transparent shadow-[0_15px_35px_rgba(229,9,64,0.15),inset_0_1px_0_rgba(255,255,255,0.22)]">
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.22)_0%,transparent_60%)] pointer-events-none"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50940] to-[#9e062c] border border-white/25 flex items-center justify-center text-white shadow-[0_0_20px_rgba(229,9,64,0.45)] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                      </svg>
                    </div>
                    <h4 className="text-white font-serif text-lg tracking-wide">Twin ID</h4>
                  </div>
                  <span className="bg-[#E50940] text-white text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider shadow-[0_0_12px_rgba(229,9,64,0.5)] shrink-0">EXCLUSIVE</span>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Авторская разработка: Личный и Рабочий профиль в одном. Умная авто-смена стороны по времени суток и секретный Z-жест для вызова Facecontrol.
                </p>
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
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_left,rgba(0,245,212,0.12)_0%,transparent_55%)] pointer-events-none"></div>
          <div className="glass-content flex-1 z-10 text-left w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-[11px] uppercase tracking-widest font-semibold">
                Для ресторанов и кафе
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">02</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Smart <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">QR-Меню</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base mb-8 max-w-2xl leading-relaxed">
              Интуитивная облачная панель управления. Все заказы, вызовы официанта и запросы счета моментально прилетают в Telegram-группу персонала.
            </p>
            
            <div className="equal-subcards-grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 md:gap-5 text-left">
              <div
                onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('classic'); }}
                className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-between group border-[#00F5D4]/35 hover:border-[#00F5D4]/70 hover:shadow-[0_18px_40px_rgba(0,245,212,0.14),inset_0_1px_0_rgba(255,255,255,0.25)] cursor-pointer interactive-elem"
              >
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.14)_0%,transparent_60%)] pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5D4]/25 to-[#00F5D4]/5 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.2)] group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg font-serif tracking-wide group-hover:text-[#00F5D4] transition-colors">Классика</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4D4D8] font-medium shrink-0">Без корзины</span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Бесконтактное меню с кинематографичным дизайном. Мультиязычность, умный стоп-лист блюд и плавная навигация. Мгновенный вызов официанта и запрос счета в 1 клик с тактильным откликом.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#00F5D4] group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]"></span>
                    Демо Классика
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              <div
                onClick={(e) => { e.stopPropagation(); onOpenHorecaDemo('flagship'); }}
                className="luxury-subcard p-6 h-full min-h-[176px] flex flex-col justify-between group border-[#E50940]/40 bg-gradient-to-br from-[#E50940]/15 via-[#E50940]/5 to-transparent hover:border-[#E50940]/75 shadow-[0_15px_35px_rgba(229,9,64,0.15),inset_0_1px_0_rgba(255,255,255,0.22)] cursor-pointer interactive-elem"
              >
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(229,9,64,0.22)_0%,transparent_60%)] pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50940] to-[#9e062c] border border-white/25 flex items-center justify-center text-white shadow-[0_0_20px_rgba(229,9,64,0.45)] group-hover:scale-105 transition-transform shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white text-lg font-serif tracking-wide">Флагман</h4>
                    </div>
                    <span className="bg-[#E50940] text-white text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(229,9,64,0.5)] shrink-0">
                      PRO • С корзиной
                    </span>
                  </div>
                  <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                    Полноценная автоматизация с умными допродажами (Cross-sell). Гость собирает корзину, оставляет комментарии повару и оформляет заказ. Умный QR-код сам определяет номер столика.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/90 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_8px_#E50940]"></span>
                    Демо Флагман
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </div>
              </div>
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
          
          <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 group">
            <img src="beauty-bg.jpg" alt="Beauty Spa" draggable={false} className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 group-hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-[11px] text-[#D4D4D8]">
              <span>Beauty & SPA Ecosystem</span>
              <span className="text-pink-300 font-semibold">24/7 Live</span>
            </div>
          </div>
          
          <div className="glass-content flex-1 z-10 text-left w-full flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-pink-300/25 text-pink-300 text-[11px] uppercase tracking-widest font-semibold">
                Салоны & Мастера
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">03</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Эстетика и <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Онлайн-запись</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base mb-8 max-w-2xl leading-relaxed">
              Premium визитка-лендинг с умным онлайн-бронированием. Идеальная синхронизация с вашим расписанием без диких ежемесячных комиссий агрегаторам.
            </p>
            
            <div className="equal-subcards-grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 md:gap-5 text-left">
              <div className="luxury-subcard p-6 h-full min-h-[168px] flex flex-col justify-start border-white/12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400/20 to-white/5 border border-pink-300/30 flex items-center justify-center text-pink-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-white text-base md:text-lg font-serif">Smart-бронирование</h4>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Live-календарь с умным поиском свободных окон, расчетом времени услуг и автоматическим режимом «предупреждение об отпуске».
                </p>
              </div>

              <div className="luxury-subcard p-6 h-full min-h-[168px] flex flex-col justify-start border-white/12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400/20 to-white/5 border border-pink-300/30 flex items-center justify-center text-pink-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </div>
                  <h4 className="text-white text-base md:text-lg font-serif">Дизайн & Telegram-забота</h4>
                </div>
                <p className="text-[#D4D4D8] text-xs md:text-sm leading-relaxed">
                  Уникальный дизайн, настроенный под ваш бренд. Мгновенные уведомления о записях и заботливая утренняя Telegram-сводка вашего расписания на день за чашкой кофе.
                </p>
              </div>
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
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.09)_0%,transparent_55%)] pointer-events-none"></div>

          <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 shrink-0 group">
            <img src="nfc-keychain.jpg" alt="Leather NFC Keychain" draggable={false} className="absolute inset-0 w-full h-full object-cover opacity-85 scale-105 group-hover:scale-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-[11px] text-[#D4D4D8]">
              <span>Handcrafted Leather</span>
              <span className="text-amber-400/90 font-semibold">NFC Inside</span>
            </div>
          </div>
          
          <div className="glass-content w-full lg:w-7/12 z-10 text-left flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-amber-400/25 text-amber-400/90 text-[11px] uppercase tracking-widest font-semibold">
                Физический носитель
              </span>
              <span className="font-serif italic text-white/25 text-lg md:text-xl">04</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              NFC-брелоки <br className="hidden lg:block"/>из кожи <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Crazy Horse</span>
            </h3>
            <p className="text-[#D4D4D8] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Физическое воплощение вашего цифрового статуса. Я вручную шью премиальные NFC-брелоки из натуральной винтажной кожи для каждой визитки. Одно касание брелоком к смартфону партнера — и ваши контакты уже на его экране.
            </p>
            
            <ul className="equal-subcards-grid grid-cols-1 auto-rows-fr gap-3.5 mb-0 text-sm text-[#D4D4D8] text-left">
              <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Полная автономность:</strong> внутри зашит чип, который работает без батареек и его не нужно заряжать.</span>
              </li>
              <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l-7-7m7 7L5 19m7-7l7-7"></path>
                  </svg>
                </div>
                <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Ручная работа:</strong> каждый брелок кроится и прошивается вручную седельным швом.</span>
              </li>
              <li className="luxury-subcard p-4 h-full min-h-[92px] flex items-center gap-3.5 border-white/12">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <span className="text-xs md:text-sm leading-relaxed"><strong className="text-white">Безупречный статус:</strong> винтажная кожа красиво стареет, покрываясь благородной патиной.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

