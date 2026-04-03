const { generateDummyData } = require("../utils/seedData");
const conversions = require("../utils/conversions");
const mongoose = require("mongoose");

// Helper: return entries from DB or fallback to in-memory data
async function getEntries() {
  try {
    if (mongoose.connection.readyState === 1) {
      const WasteEntry = require("../models/WasteEntry");
      const entries = await WasteEntry.find()
        .sort({ date: -1 })
        .limit(90)
        .lean();
      return entries;
    }
  } catch (e) {
    // fallback
  }
  return generateDummyData();
}

exports.getAllEntries = async (req, res) => {
  const entries = await getEntries();
  const days = parseInt(req.query.days) || 90;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const filtered = entries.filter((e) => new Date(e.date) >= cutoff);
  res.json(filtered);
};

exports.createEntry = async (req, res) => {
  const { hostelName, wasteKg } = req.body;

  if (!hostelName || wasteKg == null) {
    return res.status(400).json({ error: "hostelName and wasteKg required" });
  }

  const entry = {
    date: new Date(),
    hostelName,
    wasteKg: Number(wasteKg),
    biogasM3: conversions.wasteToBiogas(Number(wasteKg)),
    fertilizerKg: conversions.wasteToFertilizer(Number(wasteKg)),
    carbonCredits: conversions.wasteToCarbonCredits(Number(wasteKg)),
  };

  try {
    if (mongoose.connection.readyState === 1) {
      const WasteEntry = require("../models/WasteEntry");
      const doc = await new WasteEntry(entry).save();
      return res.json(doc);
    }
  } catch (e) {
    // fallback: return entry in-memory
  }

  res.json(entry);
};

exports.getSummary = async (req, res) => {
  const entries = await getEntries();
  const summary = {
    totalWaste: entries.reduce((sum, e) => sum + e.wasteKg, 0),
    totalBiogas: entries.reduce((sum, e) => sum + e.biogasM3, 0),
    totalFertilizer: entries.reduce((sum, e) => sum + e.fertilizerKg, 0),
    totalCarbonCredits: entries.reduce((sum, e) => sum + e.carbonCredits, 0),
  };
  res.json(summary);
};

exports.getDailyTrend = async (req, res) => {
  const entries = await getEntries();
  const trend = entries
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((e) => ({
      date: new Date(e.date).toISOString().split("T")[0],
      wasteKg: e.wasteKg,
      biogasM3: e.biogasM3,
      carbonCredits: e.carbonCredits,
    }));
  res.json(trend);
};
