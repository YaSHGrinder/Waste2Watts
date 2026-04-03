const express = require("express");
const router = express.Router();
const {
  getAllEntries,
  createEntry,
  getSummary,
  getDailyTrend,
} = require("../controllers/wasteController");

router.get("/", getAllEntries);
router.post("/", createEntry);
router.get("/summary", getSummary);
router.get("/daily-trend", getDailyTrend);

module.exports = router;
