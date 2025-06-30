import React, { useState } from "react";
import axios from "axios";
import mockData from "../data/mock-passes.json";

const SatellitePasses = () => {
  const [passes, setPasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getSatellitePasses = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(
            `http://localhost:5000/api/passes?lat=${latitude}&lng=${longitude}`
          );
          const apiPasses = res?.data?.passes;
          setPasses(apiPasses.length > 0 ? apiPasses : mockData.passes);
        } catch (err) {
          console.error("Error fetching satellite passes. Using mock data.", err);
          setError("Live satellite data unavailable. Showing demo data.");
          setPasses(mockData.passes);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
        Upcoming ISS Passes
      </h2>

      <button
        onClick={getSatellitePasses}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Get Passes Near Me
      </button>

      {loading && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && (
        <div className="mt-2 text-red-600 bg-red-100 border border-red-300 rounded p-2">
          {error}
        </div>
      )}

      {passes.length > 0 && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <tr>
                <th className="px-3 py-2 border">Start Time (UTC)</th>
                <th className="px-3 py-2 border">Duration (s)</th>
                <th className="px-3 py-2 border">Max Elevation (°)</th>
              </tr>
            </thead>
            <tbody>
              {passes.map((pass, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-3 py-2 border">{new Date(pass.startUTC * 1000).toUTCString()}</td>
                  <td className="px-3 py-2 border">{pass.duration}</td>
                  <td className="px-3 py-2 border">{pass.maxEl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SatellitePasses;
