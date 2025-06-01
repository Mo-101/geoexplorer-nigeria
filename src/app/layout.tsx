import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'GeoExplorer Nigeria 3D Mapping',
  description: 'Next.js Cesium app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
