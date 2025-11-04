import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Главна страница - просто показва, че API-то работи
app.get("/", (req, res) => {
  res.send("Tattoo Proxy is running successfully!");
});

// Route за извличане на tattoo events
app.get("/events", async (req, res) => {
  try {
    const response = await fetch("https://tattooevents.co.uk/api/events");
    const events = await response.json();
    res.json(events);
  } catch (error) {
    console.error("Error fetching tattoo events:", error);
    res.status(500).json({ error: "Failed to fetch tattoo events" });
  }
});

// Стартиране на сървъра
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
