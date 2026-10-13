"use client";

import React from 'react';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-12 fade-up-elem">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">
          Частые <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4D4D8]">Вопросы</span>
        </h2>
      </div>
      <div className="space-y-4 fade-up-elem">
        <details className="glass-card p-6 cursor-pointer group interactive-elem">
          <summary className="font-medium text-lg outline-none flex justify-between items-center">
            Нужно ли платить ежемесячную абонентскую плату?
            <span className="text-2xl group-open:rotate-45 transition-transform text-[#D4D4D8]">+</span>
          </summary>
          <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
            Нет. Вы оплачиваете разработку под ключ один раз и спокойно пользуетесь продуктом без регулярной абонентской платы за платформу. Все заявки, заказы и брони клиентов поступают напрямую в ваш Telegram.
          </p>
        </details>

        <details className="glass-card p-6 cursor-pointer group interactive-elem">
          <summary className="font-medium text-lg outline-none flex justify-between items-center">
            Сколько времени занимает разработка под ключ?
            <span className="text-2xl group-open:rotate-45 transition-transform text-[#D4D4D8]">+</span>
          </summary>
          <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
            От 24 часов до 3–5 дней в зависимости от тарифа. Персональные PWA-визитки обычно запускаются за 1–3 дня, а проекты для ресторанов или салонов красоты с каталогами — за 3–5 рабочих дней.
          </p>
        </details>

        <details className="glass-card p-6 cursor-pointer group interactive-elem">
          <summary className="font-medium text-lg outline-none flex justify-between items-center">
            Что требуется от меня для начала работы?
            <span className="text-2xl group-open:rotate-45 transition-transform text-[#D4D4D8]">+</span>
          </summary>
          <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
            Минимум вашего времени: только качественное фото или логотип, ссылки на мессенджеры и соцсети, а также базовый список услуг или меню. Всю техническую упаковку, дизайн и запуск под ключ я беру на себя.
          </p>
        </details>

        <details className="glass-card p-6 cursor-pointer group interactive-elem">
          <summary className="font-medium text-lg outline-none flex justify-between items-center">
            Как мне менять цены или добавлять услуги?
            <span className="text-2xl group-open:rotate-45 transition-transform text-[#D4D4D8]">+</span>
          </summary>
          <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
            В проектах для ресторанов и бьюти-мастеров вы управляете всем сами через удобную мобильную панель прямо в телефоне: поменяли цену, добавили фото или убрали блюдо в стоп-лист — и на сайте всё обновилось за секунду. Программист для этого не нужен. А в персональных визитках вы вообще не тратите время: если у вас сменится номер или прайс, просто напишите мне, и я быстро обновлю данные.
          </p>
        </details>
        
        <details className="glass-card p-6 cursor-pointer group interactive-elem">
          <summary className="font-medium text-lg outline-none flex justify-between items-center">
            Кому принадлежит сайт и база клиентов?
            <span className="text-2xl group-open:rotate-45 transition-transform text-[#D4D4D8]">+</span>
          </summary>
          <p className="text-[#D4D4D8] mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
            Полностью вам. Ваши контакты, меню и записи не заблокируют сторонние конструкторы, а все клиенты, заявки и брони поступают напрямую в ваш Telegram.
          </p>
        </details>
      </div>
    </section>
  );
}

