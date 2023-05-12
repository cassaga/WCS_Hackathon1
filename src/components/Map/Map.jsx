import React, { useState } from "react";
import { TileLayer, MapContainer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

import RoutingControl from "./RoutingControl";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Map = ({ departureResult, destinationResult }) => {
  const [map, setMap] = useState(null);

  const refresh = [{ departureResult, destinationResult }];

  console.log(refresh);

  return (
    <>
      <div className="mapContent" id="map">
        <MapContainer
          center={[37.0902, -95.7129]}
          zoomLevel={5}
          zoomControl={false}
          style={{ height: "100%", width: "100%", padding: 0 }}
          whenCreated={(map) => setMap(map)}>
          <RoutingControl
            position={"topleft"}
            start={departureResult.coordinates}
            end={destinationResult.coordinates}
            color={"#0d9488"}
          />
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Map">
              <TileLayer
                attribution="Touriosity"
                url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
