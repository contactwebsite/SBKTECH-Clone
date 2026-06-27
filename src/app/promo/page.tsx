"use client";

import React, { useState } from 'react';
import PromoPageWrapper from '@/components/promo/PromoPageWrapper';
import Hero from '@/components/promo/Hero';
import Features from '@/components/promo/Features';
import SecurityAlerts from '@/components/promo/SecurityAlerts';
import Gallery from '@/components/promo/Gallery';
import Ecosystem from '@/components/promo/Ecosystem';
import Testimonials from '@/components/promo/Testimonials';
import StickyFooter from '@/components/promo/StickyFooter';
import OrderModal from '@/components/promo/OrderModal';

export default function PromoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PromoPageWrapper isHome={true}>
      <Hero onOrderClick={openModal} />
      <Features />
      <SecurityAlerts />
      <Gallery />
      <Ecosystem />
      <Testimonials />
      <StickyFooter onOrderClick={openModal} />
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </PromoPageWrapper>
  );
}
