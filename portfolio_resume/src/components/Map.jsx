import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:'100%', height:'100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="#9f73ce"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[21.017532, 52.237049]}
        dx={-60}
        dy={30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white" style={{fontSize:45, fontWeight:600, fontFamily:"Pacifico, sans-serif"}}>
          {"Warsaw"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
