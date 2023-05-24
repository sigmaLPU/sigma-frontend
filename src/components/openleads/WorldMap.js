import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountriesData from './CountriesData'; // JSON data containing country information
import './WorldMap.css'; // CSS for styling

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState(null);

  const onCountryHover = (e) => {
    const countryName = e.target.feature.properties.name;
    const countryData = CountriesData.find((country) => country.name === countryName);

    if (countryData) {
      setTooltipContent({
        countryName,
        population: countryData.population,
        capital: countryData.capital,
        area: countryData.area,
      });
      e.target.setStyle({ fillColor: '#ff0000' });
    }
  };

  const ResetMapView = () => {
    const map = useMap();
    map.setView([0, 0], 2);
    return null;
  };

  return (
    <MapContainer className="map-container" center={[0, 0]} zoom={2} minZoom={2} maxZoom={10} scrollWheelZoom={false}>
      <ResetMapView />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" preferredLanguage="en" />
      <GeoJSON
        data={CountriesData}
        style={{ fillColor: '#c0c0c0', color: '#808080', weight: 1 }}
        onEachFeature={(feature, layer) => {
          layer.on({
            mouseover: onCountryHover,
            mouseout: (e) => {
              setTooltipContent(null);
              e.target.setStyle({ fillColor: '#c0c0c0' });
            },
          });
        }}
      />
      {tooltipContent && (
        <GeoJSON
          data={tooltipContent}
          pointToLayer={() => ({})}
          onEachFeature={(feature, layer) =>
            layer.bindTooltip(
              `${tooltipContent.countryName}:
              Population: ${tooltipContent.population}
              Capital: ${tooltipContent.capital}
              Area: ${tooltipContent.area}`,
              { permanent: true, direction: 'top' }
            )
          }
        />
      )}
    </MapContainer>
  );
};

export default WorldMap;
