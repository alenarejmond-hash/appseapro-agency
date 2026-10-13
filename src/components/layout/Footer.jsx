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
      className="relative w-full min-h-[50vh] md:min-h-[60vh] bg-[#050505] flex flex-col justify-between p-6 md:p-12 pb-12 md:pb-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center text-center mt-12 md:mt-10 flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal mb-4 md:mb-6 tracking-tight">
          Обсудим ваш <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">проект</span>?
        </h2>
        
        <div className="w-full max-w-md relative interactive-elem">
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
        <p className="text-xs text-[#D4D4D8] mt-4 md:mt-6">Или напишите мне напрямую в Telegram для быстрой связи.</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#A1A1AA] max-w-7xl w-full mx-auto pt-8 md:pb-4 gap-4 md:gap-0">
        <span>&copy; 2026 AppSeaPro. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://t.me/appseapro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors interactive-elem cursor-pointer">Telegram</a>
          <a href="https://t.me/restaurant_appseapro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors interactive-elem cursor-pointer">Канал ресторанов</a>
        </div>
      </div>
    </footer>
  );
}

