"use client";

import React from 'react';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[55] md:hidden bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-2'
      }`}
    >
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <a
          href="#showroom"
          onClick={onClose}
          className="flex items-baseline gap-5 py-5 border-b border-white/5 group transition-colors active:opacity-70"
        >
          <span className="text-xs font-light tracking-[0.2em] text-[#A1A1AA] group-hover:text-white transition-colors w-7 shrink-0">
            01.
          </span>
          <span className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] group-hover:text-white tracking-tight text-left">
            Продукты
          </span>
        </a>

        <a
          href="#about"
          onClick={onClose}
          className="flex items-baseline gap-5 py-5 border-b border-white/5 group transition-colors active:opacity-70"
        >
          <span className="text-xs font-light tracking-[0.2em] text-[#A1A1AA] group-hover:text-white transition-colors w-7 shrink-0">
            02.
          </span>
          <span className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] group-hover:text-white tracking-tight text-left">
            Обо мне
          </span>
        </a>

        <a
          href="#pricing"
          onClick={onClose}
          className="flex items-baseline gap-5 py-5 border-b border-white/5 group transition-colors active:opacity-70"
        >
          <span className="text-xs font-light tracking-[0.2em] text-[#A1A1AA] group-hover:text-white transition-colors w-7 shrink-0">
            03.
          </span>
          <span className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] group-hover:text-white tracking-tight text-left">
            Цены
          </span>
        </a>

        <a
          href="#reviews"
          onClick={onClose}
          className="flex items-baseline gap-5 py-5 border-b border-white/5 group transition-colors active:opacity-70"
        >
          <span className="text-xs font-light tracking-[0.2em] text-[#A1A1AA] group-hover:text-white transition-colors w-7 shrink-0">
            04.
          </span>
          <span className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] group-hover:text-white tracking-tight text-left">
            Отзывы
          </span>
        </a>
      </div>

      <div className="max-w-md mx-auto w-full pt-6">
        <a
          href="https://t.me/elenlime"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full py-4 px-6 rounded-2xl bg-white text-black hover:bg-gray-200 active:scale-[0.99] transition-all text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.18)] cursor-pointer"
        >
          <span>Написать лично в Telegram ➔</span>
        </a>
      </div>
    </div>
  );
}

