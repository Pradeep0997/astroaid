import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";

// ISS Icon
const issIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

const IssTracker = () => {
  const [position, setPosition] = useState(null);

  const fetchIssLocation = async () => {
    try {
      const res = await axios.get("http://api.open-notify.org/iss-now.json");
      const { latitude, longitude } = res.data.iss_position;
      setPosition([parseFloat(latitude), parseFloat(longitude)]);
    } catch (err) {
      console.error("Error fetching ISS location", err);
    }
  };

  useEffect(() => {
    fetchIssLocation();
    const interval = setInterval(fetchIssLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!position)
    return <p className="text-center text-gray-500 dark:text-gray-400">Loading ISS location...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
        Live ISS Tracker
      </h2>
      <div className="rounded overflow-hidden">
        <MapContainer center={position} zoom={2} scrollWheelZoom={true} style={{ height: "500px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={issIcon}>
            <Popup>
              The International Space Station is currently here:
              <br />
              Lat: {position[0].toFixed(2)}, Lon: {position[1].toFixed(2)}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default IssTracker;
