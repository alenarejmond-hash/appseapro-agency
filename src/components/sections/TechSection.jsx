"use client";

import React from 'react';

export default function TechSection({ onGlassMove }) {
  return (
    <section id="technology" className="py-12 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-12 md:mb-16 fade-up-elem">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
          Технологии <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Превосходства</span>
        </h2>
        <p className="text-[#D4D4D8] text-base md:text-lg">
          Мы не используем шаблонные конструкторы. Только чистый код и передовые веб-архитектуры.
        </p>
      </div>

      <div className="equal-subcards-grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-6">
        <div
          className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
        >
          <div className="glass-content">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#E50940]/20 transition-all duration-300">
              <svg className="w-8 h-8 text-white group-hover:text-[#E50940] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
            <h4 className="text-xl font-medium mb-3">Технология PWA</h4>
            <p className="text-[#D4D4D8] text-sm leading-relaxed">
              Без App Store и Google Play. Установка в 1 клик, мгновенное сохранение контакта в телефон и работа без VPN.
            </p>
          </div>
        </div>

        <div
          className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="glass-content">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto relative overflow-hidden group-hover:border-white/40 transition-all duration-300">
              <svg className="w-8 h-8 text-white group-hover:text-[#E4E4E7] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-medium mb-3">100/100 PageSpeed & WOW</h4>
            <p className="text-[#D4D4D8] text-sm leading-relaxed">
              Чистый код без тяжелых конструкторов. Молниеносный отклик, кинематографичные 3D-анимации и рост среднего чека на +25%.
            </p>
          </div>
        </div>

        <div
          className="glass-card p-8 h-full flex flex-col items-center justify-center text-center interactive-elem group fade-up-elem cursor-pointer"
          onMouseMove={onGlassMove}
          onTouchMove={onGlassMove}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="glass-content">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
              <svg className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h4 className="text-xl font-medium mb-3">Быстрый старт от 3 дней</h4>
            <p className="text-[#D4D4D8] text-sm leading-relaxed">
              Полная независимость: сайт работает автономно и не зависит от ограничений чужих платформ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

