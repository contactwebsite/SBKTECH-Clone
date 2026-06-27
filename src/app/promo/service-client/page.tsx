"use client";

import React from 'react';
import PromoPageWrapper from '@/components/promo/PromoPageWrapper';
import Support from '@/components/promo/Support';

export default function SupportPage() {
  return (
    <PromoPageWrapper isHome={false}>
      <Support />
    </PromoPageWrapper>
  );
}
