"use client";

import { useState, useEffect, useRef } from 'react';
import { HORECA_CONFIG } from '@/data/horecaConfig';

export function useHorecaModal() {
  const [isHorecaModalOpen, setIsHorecaModalOpen] = useState(false);
  const [horecaMode, setHorecaMode] = useState('flagship'); // 'classic' | 'flagship'
  const [horecaIframeLoaded, setHorecaIframeLoaded] = useState(false);
  const [showTgPopup, setShowTgPopup] = useState(false);
  const pushTouchStartYRef = useRef(null);

  // Таймер для Telegram push-уведомления (7 секунд)
  useEffect(() => {
    if (!isHorecaModalOpen) return;
    const tgTimer = setTimeout(() => {
      setShowTgPopup(true);
    }, 7000);
    return () => clearTimeout(tgTimer);
  }, [isHorecaModalOpen, horecaMode]);

  const handleOpenHorecaDemo = (mode = 'flagship') => {
    const targetMode = mode === 'classic' ? 'classic' : 'flagship';
    setHorecaMode(targetMode);
    setHorecaIframeLoaded(false);
    setShowTgPopup(false);
    setIsHorecaModalOpen(true);
  };

  const handleSwitchHorecaMode = (mode) => {
    if (mode === horecaMode) return;
    setHorecaMode(mode);
    setHorecaIframeLoaded(false);
    setShowTgPopup(false);
  };

  const handleCloseHorecaDemo = () => {
    setIsHorecaModalOpen(false);
    setShowTgPopup(false);
    setHorecaIframeLoaded(false);
  };

  const handlePushTouchStart = (e) => {
    pushTouchStartYRef.current = e.touches?.[0]?.clientY ?? null;
  };

  const handlePushTouchMove = (e) => {
    if (pushTouchStartYRef.current === null) return;
    const currentY = e.touches?.[0]?.clientY ?? pushTouchStartYRef.current;
    if (currentY - pushTouchStartYRef.current < -18) {
      setShowTgPopup(false);
      pushTouchStartYRef.current = null;
    }
  };

  const activeHorecaConfig = HORECA_CONFIG[horecaMode] || HORECA_CONFIG.flagship;

  return {
    isHorecaModalOpen,
    horecaMode,
    horecaIframeLoaded,
    setHorecaIframeLoaded,
    showTgPopup,
    setShowTgPopup,
    activeHorecaConfig,
    handleOpenHorecaDemo,
    handleSwitchHorecaMode,
    handleCloseHorecaDemo,
    handlePushTouchStart,
    handlePushTouchMove,
  };
}

