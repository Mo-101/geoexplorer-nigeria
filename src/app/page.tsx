import React from 'react';
import Navigation from '@/components/Navigation';
import CesiumMap from '@/components/CesiumMap';

export default function HomePage() {
  return (
    <main className="h-screen w-screen bg-slate-900">
      <Navigation />
      <CesiumMap />
    </main>
  );
}
