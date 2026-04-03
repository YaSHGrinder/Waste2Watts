const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const wasteRoutes = require("./routes/waste");
const { initDummyData } = require("./utils/seedData");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Allow MongoDB or in-memory fallback
app.use("/api/waste", wasteRoutes);

const PORT = process.env.PORT || 5000;

app.get("/api/health", async (req, res) => {
  try {
    const data = await initDummyData();
    res.json({ status: "ok", entries: data.length });
  } catch (e) {
    res.json({ status: "ok", mode: "in-memory" });
  }
});

app.listen(PORT, () => {
  console.log(`Waste2Watts API running on port ${PORT}`);
});
