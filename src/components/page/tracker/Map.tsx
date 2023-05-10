import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import UseAircraftData from "@component/src/pages/api/tracker-api";
import classes from "./map.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

const Map = () => {
  const data = UseAircraftData();

  const icon = L.icon({
    iconUrl: "/images/icon/plane.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  const position = Object.values(data).map((value) => {
    return {
      longitude: value.longitude,
      latitude: value.latitude,
      callsign: value.callsign,
      altitude: value.baro_altitude,
    };
  });

  const key = Math.random().toFixed(1);

  const markers = position.map((position) => {
    if (position.latitude && position.longitude) {
      const popup = (
        <Popup>
          <p className={classes.title_popup}>Callsign:{position.callsign}</p>
          <p className={classes.title_popup}>Altitude:{position.altitude}m</p>
        </Popup>
      );
      return (
        <Marker
          key={key}
          position={[position.latitude, position.longitude]}
          icon={icon}
        >
          {" "}
          {popup}
        </Marker>
      );
    }
    return null;
  });

  const centerPoint = new L.LatLng(52.022755, 19.407713);

  return (
    <div className={classes.mapContainer}>
      <h1>Aircraft Tracking Map of Poland</h1>
      <MapContainer
        center={centerPoint}
        zoom={6}
        scrollWheelZoom={true}
        className={classes.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default Map;

//Plane icons created by Ahmad Yafie
