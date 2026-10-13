"use client";

import React from 'react';

export default function Footer({
  contactValue,
  setContactValue,
  isContactSent,
  onContactSubmit
}) {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#050505] flex flex-col justify-between px-4 sm:px-6 md:px-12 pt-16 md:pt-24 pb-8 z-10"
    >
      {/* Шаг 1: Финальная карточка CTA */}
      <div className="max-w-5xl mx-auto w-full mb-16 md:mb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a0b0e] to-[#0a0a0a] p-8 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
          {/* Декоративное мягкое свечение сзади */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E50940]/10 blur-[100px] pointer-events-none rounded-full"></div>

          {/* Маленькая плашка сверху со светящейся красной точкой */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-[11px] uppercase tracking-widest text-[#F3F4F6] font-medium mb-6 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#E50940] shadow-[0_0_8px_#E50940] animate-pulse"></span>
            <span>СВЯЗЬ НАПРЯМУЮ С РАЗРАБОТЧИКОМ</span>
          </div>

          {/* Заголовок */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal mb-4 md:mb-6 tracking-tight text-white relative z-10">
            Обсудим ваш <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">проект</span>?
          </h2>

          {/* Подзаголовок */}
          <p className="text-sm sm:text-base text-[#D4D4D8] max-w-2xl mx-auto mb-8 leading-relaxed font-light relative z-10">
            Напишите мне в удобный мессенджер или оставьте свой контакт. Я лично разберу вашу задачу, покажу живые демо-версии и подскажу, какое решение подойдет лучше всего — без навязывания и сложных терминов.
          </p>

          {/* Поле ввода */}
          <div className="w-full max-w-md mx-auto relative interactive-elem mb-6 z-10">
            <input 
              type="text" 
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  onContactSubmit();
                }
              }}
              placeholder="Ваш Telegram или Телефон" 
              className="w-full min-h-[44px] bg-[#121212] border border-white/10 rounded-full py-3 md:py-4 pl-6 pr-32 md:pr-36 text-sm md:text-base text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="button"
              onClick={onContactSubmit}
              className="absolute right-1 top-1 bottom-1 bg-white text-black px-4 md:px-6 rounded-full font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer whitespace-nowrap"
            >
              {isContactSent ? 'Переходим в Telegram... ✓' : 'Отправить'}
            </button>
          </div>

          {/* Две красивые стеклянные кнопки рядом */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto relative z-10">
            <a
              href="https://t.me/elenlime"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-xs sm:text-sm font-medium text-white transition-all flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] interactive-elem cursor-pointer whitespace-nowrap"
            >
              <span>✈️</span>
              <span>Написать в Telegram</span>
            </a>
            <a
              href="https://wa.me/79995051277"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-xs sm:text-sm font-medium text-white transition-all flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] interactive-elem cursor-pointer whitespace-nowrap"
            >
              <span>💬</span>
              <span>Написать в WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Шаг 2: Структурный 3-колоночный низ */}
      <div className="border-t border-white/10 pt-8 pb-12 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Слева (Бренд) */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div
              className="text-xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              AppSea<span className="text-[#E50940] italic">Pro</span>
            </div>
            <p className="text-xs text-white/40 max-w-xs leading-relaxed">
              Бутик цифровых решений и PWA-разработки. Создано с вниманием к деталям.
            </p>
            <span className="text-xs text-white/40">
              &copy; 2026 Елена Сотникова (AppSeaPro). Все права защищены.
            </span>
          </div>

          {/* По центру (Навигация) */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs md:text-sm text-[#A1A1AA]">
              <a href="#product-pwa" className="hover:text-white transition-colors interactive-elem">Визитки</a>
              <span className="text-white/20">•</span>
              <a href="#product-horeca" className="hover:text-white transition-colors interactive-elem">Ресторанам</a>
              <span className="text-white/20">•</span>
              <a href="#product-beauty" className="hover:text-white transition-colors interactive-elem">Бьюти</a>
              <span className="text-white/20">•</span>
              <a href="#pricing" className="hover:text-white transition-colors interactive-elem">Цены</a>
              <span className="text-white/20">•</span>
              <a href="#faq" className="hover:text-white transition-colors interactive-elem">FAQ</a>
            </nav>
          </div>

          {/* Справа (Контакты и Локация) */}
          <div className="flex flex-col items-center md:items-end gap-2.5">
            <div className="flex items-center gap-4 text-xs md:text-sm font-medium text-white/80">
              <a href="https://t.me/elenlime" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors interactive-elem">
                Telegram ↗
              </a>
              <span className="text-white/20">|</span>
              <a href="https://t.me/restaurant_appseapro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors interactive-elem">
                Канал проектов ↗
              </a>
            </div>
            <div className="text-xs text-white/40 flex items-center gap-1.5">
              <span>Armenia • Worldwide</span>
              <span>🌐</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
