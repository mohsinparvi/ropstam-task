import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Adjust the import path as needed
import allStates from "../../lib/data/all-states.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const UsaMap: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <ComposableMap projection="geoAlbersUsa" width={800} height={600}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#49C7AB"
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#D6D6DA", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find((s) => s.id === geo.id);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur && centroid[0] > -160 && centroid[0] < -67 && (
                      <Marker coordinates={centroid}>
                        <text
                          y="2"
                          fontSize={10}
                          textAnchor="middle"
                          fill="#333"
                        >
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
      </ComposableMap>
    </div>
  );
};

export default UsaMap;
