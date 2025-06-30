import React, { useEffect, useState } from "react";
import axios from "axios";

const Apod = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
        );
        setApod(response.data);
      } catch (err) {
        console.error("Failed to fetch APOD:", err);
        setError("Unable to fetch today's astronomy image. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading Astronomy Picture of the Day...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!apod) {
    return <p className="text-center text-gray-500">No data available at the moment.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
        Astronomy Picture of the Day
      </h2>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{apod.title}</h3>

      {apod.media_type === "image" ? (
        <img
          src={apod.url}
          alt={apod.title}
          className="rounded-lg shadow-md w-full mb-4 object-cover"
        />
      ) : (
        <div className="w-full h-96 mb-4">
          <iframe
            src={apod.url}
            title="APOD Video"
            className="w-full h-full rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
        {apod.explanation}
      </p>

      {apod.date && (
        <p className="text-right mt-4 text-sm text-gray-500">
          Date: {apod.date}
        </p>
      )}
    </div>
  );
};

export default Apod;
