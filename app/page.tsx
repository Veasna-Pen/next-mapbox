"use client";

import Header from "@/components/Header";
import PropertiesDisplay from "@/components/PropertiesDisplay";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

export default function Home() {
  const { theme } = useTheme();
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const markers = [
    {
      id: 1,
      longitude: 104.9,
      latitude: 11.55,
      color: "red",
      title: "Phnom Penh",
    },
    {
      id: 2,
      longitude: 103.85,
      latitude: 13.36,
      color: "red",
      title: "Siem Reap",
    },
    {
      id: 3,
      longitude: 104.01,
      latitude: 13.1,
      color: "red",
      title: "Battambang",
    },
    {
      id: 4,
      longitude: 103.65,
      latitude: 10.63,
      color: "red",
      title: "Sihanoukville",
    },
    {
      id: 5,
      longitude: 104.17,
      latitude: 10.61,
      color: "red",
      title: "Kampot",
    },
    {
      id: 6,
      longitude: 105.46,
      latitude: 12.0,
      color: "red",
      title: "Kampong Cham",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />

      <div className="flex h-full">
        <div className="flex-grow h-full">
          <Map
            mapboxAccessToken={mapboxToken}
            initialViewState={{
              longitude: 104.9,
              latitude: 11.55,
              zoom: 7,
            }}
            mapStyle={
              theme === "light"
                ? "mapbox://styles/mapbox/streets-v11"
                : "mapbox://styles/mapbox/dark-v10"
            }
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                longitude={marker.longitude}
                latitude={marker.latitude}
                color={marker.color}
              />
            ))}
          </Map>
        </div>
        <PropertiesDisplay />
      </div>
    </div>
  );
}
