import React from 'react';

export const INFINITY_TEMPLATES = [
  {
    id: 'esoteric',
    name: 'Эзотерика',
    subtitle: 'Таро • Астрология • Практики',
    url: 'https://esoteric.appseapro.com',
    accent: 'wine',
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.22) 0%, rgba(88, 28, 135, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    )
  },
  {
    id: 'psychology',
    name: 'Психолог',
    subtitle: 'Терапия • Коучинг • Менторство',
    url: 'https://psychologist.appseapro.com',
    accent: 'cyan',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22) 0%, rgba(12, 74, 110, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'travel',
    name: 'Турагент',
    subtitle: 'Авторские туры • VIP-отдых',
    url: 'https://travel.appseapro.com',
    accent: 'cyan',
    color: '#00F5D4',
    glow: 'rgba(0, 245, 212, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(0, 245, 212, 0.22) 0%, rgba(13, 148, 136, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'blogger',
    name: 'Блогер',
    subtitle: 'Медиакит • Коллаборации • Бренд',
    url: 'https://blogger.appseapro.com',
    accent: 'wine',
    color: '#E50940',
    glow: 'rgba(229, 9, 64, 0.38)',
    softBg: 'linear-gradient(135deg, rgba(229, 9, 64, 0.24) 0%, rgba(136, 19, 55, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'fitness',
    name: 'Спорт',
    subtitle: 'Фитнес-тренер • Нутрициолог',
    url: 'https://fitness.appseapro.com',
    accent: 'cyan',
    color: '#A3E635',
    glow: 'rgba(163, 230, 53, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(163, 230, 53, 0.22) 0%, rgba(63, 98, 18, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'beauty',
    name: 'Бьюти',
    subtitle: 'Стилист • Визажист • Косметолог',
    url: 'https://beauty.appseapro.com',
    accent: 'wine',
    color: '#F472B6',
    glow: 'rgba(244, 114, 182, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(244, 114, 182, 0.22) 0%, rgba(131, 24, 67, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'realty',
    name: 'Недвижимость',
    subtitle: 'Брокер • Инвестиции • Элитное жилье',
    url: 'https://realtor.appseapro.com',
    accent: 'cyan',
    color: '#FBBF24',
    glow: 'rgba(251, 191, 36, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(251, 191, 36, 0.22) 0%, rgba(120, 53, 15, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'dentistry',
    name: 'Стоматология',
    subtitle: 'Эстетическая медицина • Врач',
    url: 'https://dental.appseapro.com',
    accent: 'cyan',
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(52, 211, 153, 0.22) 0%, rgba(6, 78, 59, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'photographer',
    name: 'Фотограф',
    subtitle: 'Портфолио • Fashion & Wedding',
    url: 'https://photographer.appseapro.com',
    accent: 'wine',
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.35)',
    softBg: 'linear-gradient(135deg, rgba(251, 146, 60, 0.22) 0%, rgba(124, 45, 18, 0.04) 100%)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

