// src/components/Map.tsx
"use client"

import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default function MapWrapper() {
  return (
    <div className="h-[400px] w-full">
      <LeafletMap position={[51.505, -0.09]} zoom={13} />
    </div>
  )
}
