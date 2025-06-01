'use client'; // This directive is essential for Cesium

import { useEffect, useRef } from 'react';
import { Viewer } from 'cesium';

// Don't forget to import Cesium's CSS.
// The path might vary slightly based on your specific Cesium version and setup,
// but this is the typical location when installed via npm.
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function CesiumMapPage() {
  // Create a ref for the div that will contain the Cesium map
  const cesiumContainer = useRef(null);

  useEffect(() => {
    // This effect runs once after the component mounts
    if (cesiumContainer.current) {
      // Initialize the Cesium Viewer
      const viewer = new Viewer(cesiumContainer.current, {
        // You can add Cesium Viewer options here, for example:
        // animation: false,
        // baseLayerPicker: false,
        // fullscreenButton: false,
        // geocoder: false,
        // homeButton: false,
        // infoBox: false,
        // sceneModePicker: false,
        // selectionIndicator: false,
        // timeline: false,
        // navigationHelpButton: false,
      });

      // Optional: Cleanup the viewer when the component unmounts
      return () => {
        if (viewer && !viewer.isDestroyed()) {
          viewer.destroy();
        }
      };
    }
  }, []); // The empty dependency array ensures this effect runs only once

  // Render a div that Cesium will use. Make sure it has dimensions!
  return (
    <div ref={cesiumContainer} style={{ width: '100%', height: '100vh' }} />
  );
}