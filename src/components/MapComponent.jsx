"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -15, name: "Dubai, UAE", coordinates: [55.397, 25.265] },
  {
    markerOffset: -15,
    name: "Milton Keynes, UK",
    coordinates: [-0.717, 52.045],
  },
  {
    markerOffset: -15,
    name: "Aurangabad, India",
    coordinates: [75.3433, 19.8762],
  },
];

const MapComponent = () => {
  return (
    <div className="w-full h-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#D6D6DA", stroke: "#FFFFFF" },
                  hover: { fill: "#F53", stroke: "#FFFFFF" },
                  pressed: { fill: "#E42", stroke: "#FFFFFF" },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F53" />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: "14px",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapComponent;
