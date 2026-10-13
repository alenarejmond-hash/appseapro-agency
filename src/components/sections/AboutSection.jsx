"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10 space-y-8 md:space-y-12">
      {/* Карточка 1: Персональное IT-ателье Елены Сотниковой */}
      <div className="glass-card p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 interactive-elem fade-up-elem border-white/15">
        {/* Портрет Елены в графитовой раме */}
        <div className="w-52 sm:w-60 md:w-64 aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] shrink-0 relative group bg-gradient-to-b from-white/10 to-transparent p-1">
          <div className="w-full h-full rounded-[22px] overflow-hidden relative">
            <img
              src="/elena-portrait.jpg"
              alt="Елена Сотникова — IT-Архитектор"
              draggable={false}
              className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] text-[#D4D4D8]">
              <span className="text-white font-medium">Елена Сотникова</span>
              <span className="text-white/60">IT-Архитектор</span>
            </div>
          </div>
        </div>

        {/* Текст авторского манифеста */}
        <div className="text-center lg:text-left glass-content flex-1">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[11px] uppercase tracking-widest font-semibold">
              IT-Архитектура & Разработка
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-white">
            Елена <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Сотникова</span>
          </h2>
          
          <div className="relative pl-4 border-l-2 border-[#E50940] my-5">
            <p className="text-white font-serif italic text-base md:text-lg leading-relaxed">
              «Я освобождаю ваше время от рутины, создавая автономные цифровые решения премиум-класса, которые подчеркивают статус владельца».
            </p>
          </div>

          <div className="space-y-2.5 mb-6 text-[#D4D4D8] text-sm md:text-base leading-relaxed max-w-3xl">
            <p>
              Моя цель — чтобы ваш цифровой продукт вызывал <span className="text-white font-medium">неподдельный интерес на закрытых встречах и бизнес-ужинах</span>.
            </p>
            <p>
              Вы получаете премиальные технологии <strong className="text-white font-semibold">в полную автономию</strong>: разовый запуск без абонентской платы, с удобным управлением ценами и заявками прямо со смартфона.
            </p>
          </div>

          {/* Быстрые смысловые акценты */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90">✦ Разовый запуск</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90">✦ Без абонентской платы</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/90">✦ Заявки в Telegram</span>
          </div>

          {/* 3 авторских принципа */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Принцип 01</span>
              <h4 className="text-white font-medium text-sm mb-1.5">Чистая автономия</h4>
              <p className="text-[#D4D4D8] text-xs leading-relaxed">Никаких скрытых подписок: вы не платите ежемесячную аренду чужому сервису и полностью контролируете свой проект.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Принцип 02</span>
              <h4 className="text-white font-medium text-sm mb-1.5">Чистая скорость</h4>
              <p className="text-[#D4D4D8] text-xs leading-relaxed">100/100 PageSpeed. Установка на экран как приложение (PWA) и работа без VPN.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Принцип 03</span>
              <h4 className="text-white font-medium text-sm mb-1.5">Заказы в Telegram</h4>
              <p className="text-[#D4D4D8] text-xs leading-relaxed">Заказы и брони сразу в ваш Telegram: никаких сложных админок, всё приходит в привычный мессенджер.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Карточка 2: Сравнение подходов (Отстройка от рынка) */}
      <div className="glass-card p-8 lg:p-12 interactive-elem fade-up-elem border-white/15">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D4D4D8] text-[11px] uppercase tracking-widest font-semibold mb-3">
            Честное сравнение
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3">
            Почему выбирают <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">AppSeaPro</span>
          </h3>
          <p className="text-[#D4D4D8] text-sm md:text-base">
            Разница между шаблонным сайтом в аренду и собственным цифровым активом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-left items-stretch">
          {/* Конструкторы */}
          <div className="p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-white/80 font-serif text-lg">Конструкторы сайтов</h4>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">Конструкторы</span>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-[#D4D4D8]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Пожизненная ежемесячная <strong className="text-white/80 font-normal">абонентская плата</strong> за аренду платформы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Шаблонный внешний вид, узнаваемый с первого взгляда</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Медленная загрузка и тяжелый чужой код платформы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Риск блокировки или сбоя стороннего сервиса</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-[11px] text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>Итог: постоянная аренда чужого сервиса</span>
            </div>
          </div>

          {/* Веб-студии */}
          <div className="p-6 md:p-7 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-white/80 font-serif text-lg">Классические студии</h4>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">Агентства</span>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-[#D4D4D8]">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Бюджеты от $2,500 – $5,000 и долгие согласования</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Сроки разработки от 1.5 до 3 месяцев</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Громоздкие CMS, где без программиста не сменить цену</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✕</span>
                  <span>Платная поддержка за каждое мелкое изменение</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3.5 border-t border-white/10 text-[11px] text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span>Итог: долго, дорого и сложная зависимость</span>
            </div>
          </div>

          {/* AppSeaPro (Выделенная премиум колонка) */}
          <div className="relative p-6 md:p-7 rounded-2xl bg-gradient-to-b from-[#E50940]/15 via-white/[0.04] to-white/[0.01] border-2 border-[#E50940]/50 hover:border-[#E50940]/70 transition-all flex flex-col justify-between shadow-[0_20px_50px_rgba(229,9,64,0.18)]">
            {/* Плашка лидера */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E50940] text-white text-[10px] font-semibold tracking-wider uppercase shadow-[0_4px_12px_rgba(229,9,64,0.4)]">
              Премиум-выбор
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E50940] shadow-[0_0_10px_#E50940]"></span>
                  <h4 className="text-white font-serif text-lg tracking-wide">AppSeaPro</h4>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E50940]/20 border border-[#E50940]/40 text-[#E50940] font-semibold">
                  Авторская разработка
                </span>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-white/95">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E50940]/25 border border-[#E50940]/50 text-[#E50940] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,9,64,0.4)]">✓</span>
                  <span><strong className="text-white">Разовый платеж под ключ:</strong> никакой абонентской платы за использование платформы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E50940]/25 border border-[#E50940]/50 text-[#E50940] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,9,64,0.4)]">✓</span>
                  <span><strong className="text-white">Цифровой продукт:</strong> PWA-визитка на экране + кожаный брелок как штучный апгрейд</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E50940]/25 border border-[#E50940]/50 text-[#E50940] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,9,64,0.4)]">✓</span>
                  <span><strong className="text-white">Заказы сразу в Telegram:</strong> никаких сложных админок, а цены — из обычной таблицы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E50940]/25 border border-[#E50940]/50 text-[#E50940] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,9,64,0.4)]">✓</span>
                  <span><strong className="text-white">Быстрый запуск за 2–3 дня:</strong> готовый автономный продукт высшего качества</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3.5 border-t border-[#E50940]/20 text-[11px] text-[#E50940] font-medium flex items-center justify-between">
              <span>Итог: ваш независимый цифровой актив</span>
              <span className="font-semibold">Без абонентской платы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

