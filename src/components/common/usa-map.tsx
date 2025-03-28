import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import allStates from "../../lib/data/all-states.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface MarkerType {
  name: string;
  coordinates: [number, number];
}

const markers: MarkerType[] = [
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Boston", coordinates: [-71.0589, 42.3601] },
  { name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  {
    name: "Washington, D.C.",
    coordinates: [-77.0369, 38.9072],
  },
  { name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

const UsaMap: React.FC = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E9E3DA"
                stroke="#FFF"
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.id === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur && centroid[0] > -160 && centroid[0] < -67 && (
                    <Marker coordinates={centroid}>
                      <text y="2" fontSize={14} textAnchor="middle">
                        {cur.id}
                      </text>
                    </Marker>
                  )}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates} id={name}>
          <circle r={15} fill="#E42A1D" stroke="#fff" strokeWidth={2} />
          {/* <text
            textAnchor="middle"
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default UsaMap;
