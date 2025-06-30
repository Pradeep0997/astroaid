const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = "2EGX7R-CRA8F9-9H2LSW-5IOL";

app.get("/api/passes", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  const url = `https://api.n2yo.com/rest/v1/satellite/radiopasses/25544/${lat}/${lng}/0/5/40/?apiKey=${API_KEY}`;
  console.log("🌍 Requesting:", url);

  try {
    const response = await axios.get(url);
    console.log("✅ Success from N2YO");
    res.status(200).json(response.data); // ✅ send full JSON response
  } catch (error) {
    if (error.response) {
      console.error("❌ Error:", error.response.status, error.response.data);
      res.status(500).json({ error: "Failed from N2YO", details: error.response.data });
    } else {
      console.error("❌ Error:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Proxy server running at http://localhost:${PORT}`));
