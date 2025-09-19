import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

interface MapProps {
  lat: number;
  lng: number;
  title?: string;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMapComponent: React.FC<MapProps> = ({ lat, lng, title }) => {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} title={title || "Property Location"} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
