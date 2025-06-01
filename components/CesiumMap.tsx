'use client';

import Cesium from 'cesium';
import { useEffect, useRef } from 'react';

export default function CesiumMap() {
  const cesiumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCesium = async () => {
      if (!cesiumRef.current) return;

      // Load Cesium CSS dynamically
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cesium.com/downloads/cesiumjs/releases/1.111/Build/Cesium/Widgets/widgets.css';
      document.head.appendChild(cssLink);

      // Load Cesium JS dynamically
      const script = document.createElement('script');
      script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.111/Build/Cesium/Cesium.js';
      script.onload = () => {
        // @ts-ignore
        Cesium.Ion.defaultAccessToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMmRmYzcxNC0yZjM5LTQ0NzUtYWRkYi1kMjc1NzYwYTQ0NjYiLCJpZCI6MjE0OTQzLCJpYXQiOjE3MTU2NTMyNjN9.1fW--_-6R3TApPF2tAlOfXrqJadYPdwKqpPVkPetHP4';

        // @ts-ignore
        const viewer = new Cesium.Viewer(cesiumRef.current, {
          terrainProvider: Cesium.createWorldTerrainAsync(),
          homeButton: false,
          sceneModePicker: false,
          timeline: false,
          animation: false,
          navigationHelpButton: false,
          baseLayerPicker: false,
          fullscreenButton: false
        });

        // Nigeria View
        // @ts-ignore
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(8.6753, 9.082, 1500000),
          orientation: {
            heading: 0,
            pitch: -0.5,
            roll: 0
          }
        });

        // Add markers (sample cities)
        const cities = [
          { name: 'Lagos', lon: 3.3792, lat: 6.5244 },
          { name: 'Abuja', lon: 7.4951, lat: 9.0579 },
          { name: 'Kano', lon: 8.5167, lat: 12.0 }
        ];

        cities.forEach(city => {
          // @ts-ignore
          viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(city.lon, city.lat),
            point: {
              pixelSize: 12,
              color: Cesium.Color.CYAN,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 2
            },
            label: {
              text: city.name,
              font: '14pt sans-serif',
              fillColor: Cesium.Color.WHITE,
              outlineColor: Cesium.Color.BLACK,
              outlineWidth: 2,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE
            }
          });
        });
      };

      document.body.appendChild(script);
    };

    initCesium();
  }, []);

  return <div ref={cesiumRef} className="w-full h-screen bg-black" />;
}
