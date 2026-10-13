"use client";

import React, { useState, useEffect, useRef } from 'react';

const REVIEWS = [
  {
    name: 'Виктория',
    role: 'Основатель бренда & Ментор',
    tag: 'Экспертам',
    product: 'Infinity 3D',
    date: '20.03.2026',
    text: 'Забыла про конструкторы как про страшный сон. 3D-визитка производит вау-эффект на каждой встрече. Очень плавно, стильно, вайб передается на 100%.',
    rating: 5,
  },
  {
    name: 'Михаил',
    role: 'Владелец сети гастробаров',
    tag: 'Ресторанам',
    product: 'Smart QR-Меню',
    date: '25.03.2026',
    text: 'Подключили Smart QR-меню в трех заведениях. Гости в восторге от эстетики, а мы меняем стоп-лист и цены прямо с телефона за минуту без перепечатки меню!',
    rating: 5,
  },
  {
    name: 'Мария',
    role: 'Владелица студии & Топ-мастер',
    tag: 'Бьюти',
    product: 'Онлайн-запись',
    date: '01.04.2026',
    text: 'Все продумано до мелочей: от визуала до записей в Telegram. Клиенты отмечают, как удобно выбирать окошко в календаре, а я не плачу комиссию агрегаторам.',
    rating: 5,
  },
  {
    name: 'Дмитрий',
    role: 'Серийный предприниматель',
    tag: 'Бизнес',
    product: 'Crazy Horse NFC',
    date: '12.04.2026',
    text: 'Эта визитка — просто восторг! Партнеры каждый раз в шоке, когда я прикладываю кожаный брелок к их телефону и контакты сразу открываются на экране. Невероятно статусно!',
    rating: 5,
  },
  {
    name: 'Алексей',
    role: 'Управляющий партнер фонда',
    tag: 'Бизнес',
    product: 'Twin ID',
    date: '19.04.2026',
    text: 'Идеальное разделение на личный и деловой профиль. На закрытых встречах показываю деловую сторону, а с друзьями переключаю жестом. Конверсия в контакты выросла в разы!',
    rating: 5,
  },
  {
    name: 'Анна',
    role: 'Архитектор & Дизайнер',
    tag: 'Экспертам',
    product: 'Classic PWA',
    date: '28.04.2026',
    text: 'Выглядит очень дорого. Больше никаких мятых бумажных карточек. Открывается моментально, как нативное приложение на айфоне. Я в полном восторге!',
    rating: 5,
  },
];

export default function ReviewsSection({ onGlassMove }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setCardsPerView(perView);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, REVIEWS.length - perView)));
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - cardsPerView);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Обработка свайпов пальцем на смартфоне (листается ТОЛЬКО руками пользователя)
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
    <section id="reviews" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-10 md:mb-14 fade-up-elem">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D4D4D8] uppercase tracking-widest font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50940] shadow-[0_0_8px_#E50940]"></span>
          <span>Опыт клиентов</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 text-white">
          Впечатления <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Владельцев</span>
        </h2>
        <p className="text-[#D4D4D8] text-sm md:text-base max-w-xl mx-auto">
          Реальные эмоции предпринимателей и экспертов, которые заменили шаблоны на индивидуальный статус.
        </p>
      </div>

      {/* Полноразмерный карусельный контейнер (3 в ряд на десктопе) */}
      <div
        className="relative w-full mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Окно слайдера */}
        <div className="overflow-hidden rounded-[28px] py-1">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name + review.product}
                style={{ width: `${100 / cardsPerView}%` }}
                className="shrink-0 px-2 sm:px-3 flex flex-col"
              >
                <div
                  className="glass-card p-6 sm:p-7 flex flex-col justify-between border-white/15 h-full min-h-[270px] interactive-elem"
                  onMouseMove={onGlassMove}
                  onTouchMove={onGlassMove}
                >
                  <div className="glass-content">
                    <div className="flex items-center justify-between mb-4">
                      {/* Звёздный рейтинг: благородный акцент */}
                      <div className="flex items-center gap-1 text-[#E50940]">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Бейдж ниши */}
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70 font-medium">
                        {review.tag}
                      </span>
                    </div>

                    <p className="text-[#F3F4F6] text-sm sm:text-[15px] leading-relaxed mb-6 font-normal italic">
                      «{review.text}»
                    </p>
                  </div>

                  <div className="glass-content pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs text-white/90 font-serif shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-serif text-white text-base font-medium">{review.name}</h4>
                        <p className="text-xs text-[#A1A1AA]">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/40 tracking-wider shrink-0">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Панель управления: стрелочки и аккуратные индикаторы */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Кнопка «Назад» */}
          <button
            type="button"
            onClick={prevReview}
            aria-label="Предыдущие отзывы"
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] active:scale-95 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer interactive-elem shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <span className="text-lg leading-none font-light mb-0.5">‹</span>
          </button>

          {/* Индикаторы-точки */}
          <div className="flex items-center gap-2">
            {[...Array(maxIndex + 1)].map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Перейти к слайду ${index + 1}`}
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
            aria-label="Следующие отзывы"
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.12] active:scale-95 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer interactive-elem shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          >
            <span className="text-lg leading-none font-light mb-0.5">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
