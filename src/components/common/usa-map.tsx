import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Define types for states and markers
interface State {
  id: string;
  name: string;
  abbreviation: string;
}

interface MapMarker {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}

// Import states data with proper typing
import allStates from "../../lib/data/all-states.json";

// Define the geography URL
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Define markers with proper typing
const markers: MapMarker[] = [
  { markerOffset: -20, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: -20, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -20, name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { markerOffset: -20, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { markerOffset: -20, name: "Miami", coordinates: [-80.1918, 25.7617] },
  {
    markerOffset: 30,
    name: "Washington, D.C.",
    coordinates: [-77.0369, 38.9072],
  },
  { markerOffset: -20, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

// Define a type for the Geographies render prop argument
interface GeographiesRenderProps {
  geographies: State[];
  outline?: State;
  borders?: State;
}

const UsaMap: React.FC = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {(props: GeographiesChildrenArgument) => {
          const { geographies, outline, borders } =
            props as GeographiesRenderProps;
          return (
            <>
              {outline && <Geography geography={outline} fill="#E9E3DA" />}
              {borders && (
                <Geography geography={borders} fill="none" stroke="#FFF" />
              )}
              {geographies.map((geo) => (
                <Geography
                  key={geo.name}
                  geography={geo}
                  fill="#D6D6DA"
                  stroke="#FFF"
                  strokeWidth={0.5}
                />
              ))}
            </>
          );
        }}
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={15} fill="#E42A1D" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default UsaMap;
