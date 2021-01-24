import "./Map.scss";
import { useEffect } from "react";

import markerIcon from "../../assets/icons/icon-location.svg";

const Map = ({ lat, lng }) => {
  useEffect(() => {
    let myMap = window.L.map("map").setView([lat, lng], 13);

    window.L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
      }
    ).addTo(myMap);

    const myIcon = window.L.icon({
      iconUrl: markerIcon,
      iconSize: [46, 56],
    });

    window.L.marker([lat, lng], { icon: myIcon }).addTo(myMap);

    return () => {
      myMap.off();
      myMap.remove();
    };
  }, [lat, lng]);

  return <section id="map" className="map"></section>;
};

export default Map;
