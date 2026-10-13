"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function BeautyModalContent({ onClose }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTgPopup, setShowTgPopup] = useState(false);
  const touchStartYRef = useRef(null);

  // Запуск таймера push-уведомления (5 секунд) при открытии
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTgPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Закрытие по Escape и блокировка скролла страницы
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Смахивание пуша вверх на сенсорных экранах
  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches?.[0]?.clientY ?? null;
  };

  const handleTouchMove = (e) => {
    if (touchStartYRef.current === null) return;
    const currentY = e.touches?.[0]?.clientY ?? touchStartYRef.current;
    if (currentY - touchStartYRef.current < -18) {
      setShowTgPopup(false);
      touchStartYRef.current = null;
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[115] flex flex-col items-center justify-between lg:justify-center p-0 lg:px-8 lg:py-4 overflow-hidden overscroll-none bg-[#050505] lg:bg-[#050505]/96 lg:backdrop-blur-3xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Сдержанный монохромный дымчатый свет позади холста на десктопе */}
      <div className="hidden lg:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-white/[0.03] blur-[150px] pointer-events-none"></div>

      {/* Мобильный парящий крестик закрытия (только < lg:, в точности как в визитках) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Закрыть демо"
        className="lg:hidden absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/55 hover:bg-white/[0.14] backdrop-blur-[20px] border border-white/15 flex items-center justify-center text-white/80 hover:text-white shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95 interactive-elem cursor-pointer"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Парящая навигация сверху в правой стороне (только десктоп lg:, в точности как в визитках) */}
      <div
        className="hidden lg:flex absolute top-6 right-8 z-40 items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href="https://master.appseapro.com/"
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
          type="button"
          onClick={onClose}
          aria-label="Закрыть демо"
          className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-[20px] border border-white/10 hover:border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 interactive-elem cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 1. Верхняя линия управления над сервисом записи */}
      <div
        className="relative z-30 w-full lg:max-w-2xl shrink-0 px-3 py-2.5 lg:px-0 lg:py-0 lg:mb-3 bg-[#050505] lg:bg-transparent border-b border-white/10 lg:border-0 flex items-center justify-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Слева/по центру: лаконичный статус-бейдж демо */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/15 text-xs text-white">
          <span className="w-2 h-2 rounded-full bg-[#E50940] animate-pulse"></span>
          <span className="font-medium tracking-wide">Live-запись • 6 стилей оформления</span>
        </div>

        {/* Кнопка «Бот мастера» в Telegram */}
        <a
          href="https://t.me/DemoSeaBeauty_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] backdrop-blur-xl border border-white/15 hover:border-white/30 text-[11px] sm:text-xs font-medium text-[#D4D4D8] hover:text-white transition-all duration-300 whitespace-nowrap interactive-elem"
        >
          <svg className="w-3.5 h-3.5 fill-current text-[#2AABEE]" viewBox="0 0 24 24">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
          </svg>
          <span>Бот мастера</span>
          <svg className="w-3 h-3 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </a>
      </div>

      {/* 2. Свободный экран живого сайта онлайн-записи */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-20 w-full flex-1 lg:flex-none lg:max-w-2xl lg:h-[84vh] bg-[#050505] lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-[0_35px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
      >
        {/* 3. Деликатное iOS Push-уведомление из темного стекла с ссылкой в Telegram-бот */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className={`absolute top-3 left-3 right-3 sm:left-5 sm:right-5 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${
            showTgPopup
              ? 'translate-y-0 scale-100 opacity-100 pointer-events-auto'
              : '-translate-y-8 scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative rounded-2xl bg-[#0a0a0e]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] p-3.5 sm:p-4 text-left transition-colors duration-300 hover:border-white/25 group">
            {/* Крестик смахивания */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTgPopup(false);
              }}
              aria-label="Скрыть уведомление"
              className="absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-white/60 hover:text-white text-[10px] transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Клик по пушу открывает телеграм-бота мастера */}
            <a
              href="https://t.me/DemoSeaBeauty_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 pr-6 cursor-pointer interactive-elem"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2AABEE]/15 border border-[#2AABEE]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#2AABEE]">
                <svg className="w-4 h-4 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-white tracking-tight truncate">
                    💅 Telegram-бот • Новая запись
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 shrink-0">
                    сейчас
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#D4D4D8] group-hover:text-white transition-colors inline-flex items-center flex-wrap gap-1">
                  <span>Клиент записался: Комплексный уход & SPA (18 мая, 13:30). Бронь в календаре</span>
                  <svg className="w-3.5 h-3.5 inline-block shrink-0 text-[#2AABEE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Сдержанный монохромный лоадер во время подгрузки iframe */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-[#050505] transition-opacity duration-500 ${
            iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="w-9 h-9 border border-white/15 border-t-white/80 rounded-full animate-spin"></div>
          <div className="text-center px-6">
            <p className="text-xs font-serif text-white tracking-wider">
              Эстетика & Онлайн-запись
            </p>
            <p className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em] mt-1">
              Загрузка сервиса...
            </p>
          </div>
        </div>

        {/* Чистый контейнер живого сайта (iframe) */}
        <iframe
          src="https://master.appseapro.com/"
          title="Beauty & SPA Ecosystem Demo"
          onLoad={() => setIframeLoaded(true)}
          className={`w-full h-full flex-1 border-0 bg-[#050505] transition-opacity duration-500 ease-out ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>,
    document.body
  );
}

export default function BeautyModal({ isOpen, onClose }) {
  if (!isOpen || typeof document === 'undefined') return null;
  return <BeautyModalContent onClose={onClose} />;
}
