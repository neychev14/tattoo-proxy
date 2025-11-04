import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tattoo Proxy is Live 🖤");
});

app.get("/tattoo-events", async (req, res) => {
  try {
    const response = await fetch("https://www.worldtattooevents.com/feed/");
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tattoo events" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(✅ Server running on port ${PORT}));