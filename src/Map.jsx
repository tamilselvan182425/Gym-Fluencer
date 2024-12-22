import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px", 
};

const center = {
  lat: 19.118094, 
  lng: 72.905849, 
};

function MapComponent() {
  return (
    <div className="flex justify-center items-center mt-10">
      <LoadScript googleMapsApiKey="AIzaSyCMBSKRHVfVgNmTS69U9bBsLTinkCadOAI">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapComponent;