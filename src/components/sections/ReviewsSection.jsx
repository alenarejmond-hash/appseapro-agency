"use client";

import React, { useState, useEffect, useRef } from 'react';

const REVIEWS = [
  {
    name: 'Виктория',
    role: 'Эксперт & Основатель бренда',
    date: '20.03.2026',
    text: 'Забыла про конструкторы как про страшный сон. Очень плавно, стильно, вайб передается на 100%.',
    rating: 5,
  },
  {
    name: 'Алексей',
    role: 'Владелец бизнеса',
    date: '21.03.2026',
    text: 'Дизайн просто космос. Клиенты теперь не хотят уходить из моей визитки. Конверсия выросла вдвое!',
    rating: 5,
  },
  {
    name: 'Мария',
    role: 'Бьюти-эксперт & Владелица студии',
    date: '01.04.2026',
    text: 'Елена — мастер своего дела. Все продумано до мелочей: от визуала до анимаций.',
    rating: 5,
  },
  {
    name: 'Дмитрий',
    role: 'Предприниматель',
    date: '12.04.2026',
    text: 'Эта визитка — просто отвал башки! Партнеры каждый раз в шоке, когда я прикладываю брелок к их телефону и мои контакты сразу появляются на экране. Выглядит невероятно статусно!',
    rating: 5,
  },
  {
    name: 'Анна',
    role: 'Архитектор & Дизайнер',
    date: '28.04.2026',
    text: 'Выглядит очень дорого. Больше никаких мятых бумажных карточек, которые все теряют. Открывается моментально, как настоящее приложение на айфоне. Я в восторге!',
    rating: 5,
  },
];

export default function ReviewsSection({ onGlassMove }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Автоматическое перелистывание каждые 6 секунд (пауза при наведении)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Обработка свайпов пальцем на смартфоне
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextReview();
    } else if (distance < -45) {
      prevReview();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-8 md:mb-12 fade-up-elem">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D4D4D8] uppercase tracking-widest font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_8px_#E50940]"></span>
          <span>Опыт клиентов</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3">
          Впечатления <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Владельцев</span>
        </h2>
        <p className="text-[#D4D4D8] text-sm md:text-base max-w-xl mx-auto">
          Реальные эмоции предпринимателей и экспертов, которые заменили шаблоны на индивидуальный статус.
        </p>
      </div>

      {/* Компактный карусельный контейнер */}
      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Окно слайдера */}
        <div className="overflow-hidden rounded-[28px]">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review, index) => (
              <div
                key={review.name}
                className="w-full shrink-0 px-1 sm:px-2"
              >
                <div
                  className="glass-card p-6 sm:p-9 flex flex-col justify-between border-white/15 min-h-[230px] sm:min-h-[250px] interactive-elem cursor-grab active:cursor-grabbing"
                  onMouseMove={onGlassMove}
                  onTouchMove={onGlassMove}
                >
                  <div className="glass-content">
                    <div className="flex items-center justify-between mb-4">
                      {/* Звёздный рейтинг */}
                      <div className="flex items-center gap-1 text-[#E50940]">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[11px] text-[#A1A1AA] tracking-wider">{review.date}</span>
                    </div>

                    <p className="text-[#F3F4F6] text-base sm:text-lg leading-relaxed mb-6 font-normal italic">
                      «{review.text}»
                    </p>
                  </div>

                  <div className="glass-content pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-white text-base sm:text-lg font-medium">{review.name}</h4>
                      <p className="text-xs text-[#A1A1AA] mt-0.5">{review.role}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs text-white/80 font-serif">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Панель управления: стрелочки и аккуратные индикаторы */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Кнопка «Назад» */}
          <button
            type="button"
            onClick={prevReview}
            aria-label="Предыдущий отзыв"
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] active:scale-95 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer interactive-elem shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <span className="text-lg leading-none font-light mb-0.5">‹</span>
          </button>

          {/* Индикаторы-точки */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

          {/* Кнопка «Вперёд» */}
          <button
            type="button"
            onClick={nextReview}
            aria-label="Следующий отзыв"
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] active:scale-95 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer interactive-elem shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <span className="text-lg leading-none font-light mb-0.5">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
