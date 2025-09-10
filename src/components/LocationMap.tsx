import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // Initialize map
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [121.0244, 14.5378], // Pasay City coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add a marker for Pasay City
      new mapboxgl.Marker({
        color: '#3b82f6'
      })
        .setLngLat([121.0244, 14.5378])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div><strong>Velora Services</strong><br/>Pasay City, Philippines</div>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="bg-card p-6 rounded-xl border border-border">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">Location Map</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To display the map, please enter your Mapbox public token. You can get one for free at{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            mapbox.com
          </a>
        </p>
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <input
            type="text"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            placeholder="Enter your Mapbox public token"
            className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-fast"
            required
          />
          <button
            type="submit"
            className="w-full btn-accent py-3"
          >
            Load Map
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-card p-4 rounded-xl border border-border">
      <h3 className="text-lg font-semibold mb-4 text-card-foreground">Our Location</h3>
      <div ref={mapContainer} className="w-full h-64 rounded-lg" />
      <button
        onClick={() => setShowTokenInput(true)}
        className="mt-2 text-sm text-muted-foreground hover:text-accent transition-colors"
      >
        Change token
      </button>
    </div>
  );
};

export default LocationMap;