"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="glass-card p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 interactive-elem fade-up-elem">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/20 overflow-hidden shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.08)] p-2 group">
          <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src="elena-photo.jpg"
              alt="Елена — IT-Архитектор"
              draggable={false}
              className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        <div className="text-center lg:text-left glass-content">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Привет, я Елена</h2>
          <p className="text-[#D4D4D8] font-medium tracking-widest text-xs uppercase mb-6">IT-Архитектор</p>
          <p className="text-[#D4D4D8] text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            Я проектирую премиальные IT-экосистемы и занимаюсь кастомной веб-разработкой. Моя главная цель — создавать цифровые продукты, подчеркивающие статус владельца. Продукты, которые не стыдно показать на закрытой встрече или бизнес-ужине. 
            При этом вы получаете технологии уровня корпораций <strong className="text-white">без вытягивания денег за кабальные подписки</strong>. Управление происходит через интуитивную панель и Telegram. Это логично, дорого выглядит и не требует найма IT-специалиста.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Размещение под ключ</span>
            <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Индивидуальный дизайн</span>
            <span className="px-4 py-2 bg-white/5 rounded-lg text-xs text-[#D4D4D8] border border-white/10">✓ Интуитивная система управления</span>
          </div>
        </div>
      </div>
    </section>
  );
}

