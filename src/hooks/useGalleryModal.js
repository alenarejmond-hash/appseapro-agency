"use client";

import { useState, useEffect, useRef } from 'react';
import { INFINITY_TEMPLATES } from '@/data/infinityTemplates';

export function useGalleryModal() {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(INFINITY_TEMPLATES[0]);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const mobileSwitcherRef = useRef(null);

  // Авто-центрирование выбранной ниши в мобильном свитчере
  useEffect(() => {
    if (!isGalleryModalOpen || !mobileSwitcherRef.current || !activeTemplate) return;
    const activeEl = mobileSwitcherRef.current.querySelector(`[data-niche-id="${activeTemplate.id}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeTemplate, isGalleryModalOpen]);

  const handleOpenGallery = () => {
    setActiveTemplate(INFINITY_TEMPLATES[0]);
    setIframeLoaded(false);
    setIsGalleryModalOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryModalOpen(false);
    setIframeLoaded(false);
  };

  const handleSelectNiche = (tpl) => {
    if (activeTemplate?.id === tpl.id) return;
    setIframeLoaded(false);
    setActiveTemplate(tpl);
  };

  const handleStepNiche = (direction) => {
    const currentIndex = INFINITY_TEMPLATES.findIndex(t => t.id === (activeTemplate?.id || INFINITY_TEMPLATES[0].id));
    const nextIndex = (currentIndex + direction + INFINITY_TEMPLATES.length) % INFINITY_TEMPLATES.length;
    handleSelectNiche(INFINITY_TEMPLATES[nextIndex]);
  };

  return {
    isGalleryModalOpen,
    activeTemplate: activeTemplate || INFINITY_TEMPLATES[0],
    iframeLoaded,
    setIframeLoaded,
    mobileSwitcherRef,
    handleOpenGallery,
    handleCloseGallery,
    handleSelectNiche,
    handleStepNiche,
  };
}

