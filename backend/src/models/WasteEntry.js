const mongoose = require("mongoose");

const wasteEntrySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  hostelName: { type: String, required: true },
  wasteKg: { type: Number, required: true },
  biogasM3: { type: Number },
  fertilizerKg: { type: Number },
  carbonCredits: { type: Number },
});

wasteEntrySchema.pre("save", function (next) {
  if (this.isModified("wasteKg") || !this.biogasM3) {
    this.biogasM3 = parseFloat((this.wasteKg * 0.05).toFixed(2));
    this.fertilizerKg = parseFloat((this.wasteKg * 0.25).toFixed(2));
    this.carbonCredits = parseFloat((this.wasteKg * 0.001).toFixed(3));
  }
  next();
});

module.exports =
  mongoose.models.WasteEntry ||
  mongoose.model("WasteEntry", wasteEntrySchema);
