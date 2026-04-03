const mongoose = require("mongoose");
let cachedData = null;

function generateDummyData() {
  if (cachedData) return cachedData;
  const data = [];
  const now = new Date();
  const hostels = [
    "Greenwood Hostel",
    "Sunrise Residency",
    "Campus Living Hall",
    "Metro PG Residence",
  ];

  for (let i = 89; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const wasteKg = Math.round(80 + Math.random() * 120);
    const hostelName = hostels[Math.floor(Math.random() * hostels.length)];

    data.push({
      date,
      hostelName,
      wasteKg,
      biogasM3: parseFloat((wasteKg * 0.05).toFixed(2)),
      fertilizerKg: parseFloat((wasteKg * 0.25).toFixed(2)),
      carbonCredits: parseFloat((wasteKg * 0.001).toFixed(3)),
    });
  }
  cachedData = data;
  return data;
}

async function initDummyData() {
  const data = generateDummyData();

  try {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/waste2watts";
    await mongoose.connect(uri);

    const WasteEntry = require("../models/WasteEntry");
    await WasteEntry.deleteMany({});
    await WasteEntry.insertMany(data);
    console.log("MongoDB seeded with dummy data");
  } catch (e) {
    console.log("MongoDB not available — using in-memory data");
  }

  return data;
}

module.exports = { initDummyData, generateDummyData };
