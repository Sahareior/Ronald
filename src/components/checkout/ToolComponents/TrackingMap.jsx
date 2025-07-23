import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
};

const TrackingMapSection = () => {
  return (
    <div className="p-3  bg-white rounded-xl shadow-md border border-gray-200 space-y-6">
      <div>
        <p className="text-xl font-semibold text-gray-800">📦 Track your delivery</p>

      </div>

      <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm">


        <MapContainer
          center={[-33.9249, 18.4241]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[400px] w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-33.9249, 18.4241]}>
            <Popup>Clue Location</Popup>
          </Marker>
          <ResizeMap />
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackingMapSection;
