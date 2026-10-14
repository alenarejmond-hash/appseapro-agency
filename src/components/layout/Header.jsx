"use client";

import React from 'react';

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen, onGlassMove }) {
  return (
    <header
      className={`fixed w-full top-0 z-[60] transition-colors duration-300 pt-[max(1rem,env(safe-area-inset-top))] pb-3 px-5 md:py-4 md:px-12 ${
        isMobileMenuOpen
          ? 'bg-transparent border-b border-transparent'
          : 'backdrop-blur-md bg-[#050505]/70 border-b border-white/5'
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className="text-xl md:text-2xl font-serif font-semibold tracking-tighter interactive-elem cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          AppSea<span className="text-[#E50940] italic">Pro</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
          <a href="#showroom" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Продукты</a>
          <a href="#about" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Обо мне</a>
          <a href="#pricing" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Цены</a>
          <a href="#reviews" className="hover:text-[#F3F4F6] transition-colors interactive-elem">Отзывы</a>
          <a href="#faq" className="hover:text-[#F3F4F6] transition-colors interactive-elem">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Две тонкие минималистичные линии бургера */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
            className="md:hidden relative w-11 h-11 flex items-center justify-center text-[#F3F4F6] hover:text-white transition-colors interactive-elem cursor-pointer focus:outline-none"
          >
            <span className="relative w-6 h-3 flex flex-col justify-between items-end">
              <span
                className={`block h-[1.5px] bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMobileMenuOpen ? 'w-6 translate-y-[5.25px] rotate-45' : 'w-6'
                }`}
              ></span>
              <span
                className={`block h-[1.5px] bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMobileMenuOpen ? 'w-6 -translate-y-[5.25px] -rotate-45' : 'w-4'
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

