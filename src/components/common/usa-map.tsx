import React, { memo } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import allStates from "../../lib/data/all-states.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const UsaMap: React.FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
      <ComposableMap
        projection="geoAlbersUsa"
        width={1000}
        height={1000}
        viewBox="0 0 1000 1000"
      >
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
                    hover: { fill: "#fa846d", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))}

              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find((s) => s.val === geo.id);

                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur && centroid[0] > -160 && centroid[0] < -67 && (
                      <Marker coordinates={centroid}>
                        <text
                          y="2"
                          fontSize={14}
                          textAnchor="middle"
                          fill="white"
                          style={{ fontWeight: "bold" }}
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

export default memo(UsaMap);
