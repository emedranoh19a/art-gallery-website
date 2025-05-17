// src/components/LeafletMap.tsx
"use client"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"

import { useEffect } from "react"

export default function LeafletMap({ position, zoom }) {
    useEffect(() => {
        // Only import Leaflet and CSS on the client
        require("leaflet/dist/leaflet.css")
        require("leaflet-defaulticon-compatibility")
        require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css")
      }, [])
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
