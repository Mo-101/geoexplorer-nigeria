'use client';
import React from 'react';
import Link from 'next/link'
export default function Navigation() {
  return (
    <nav className="p-4 bg-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-indigo-400 font-bold text-xl">GeoExplorer</h1>
        <div className="flex space-x-4">
          <Link href="/">Map</Link>
          <Link href="/weather">Weather</Link>
          <Link href="/ai-hub">AI Hub</Link>
          <Link href="/rodent-detection">Rodents</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  );
}
