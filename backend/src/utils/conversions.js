module.exports = {
  wasteToBiogas: (wasteKg) => wasteKg * 0.05,
  wasteToFertilizer: (wasteKg) => wasteKg * 0.25,
  wasteToCarbonCredits: (wasteKg) => wasteKg * 0.001,
  co2Saved: (wasteKg) => wasteKg * 0.001 * 1000,
  treesEquivalent: (kgCO2) => Math.round(kgCO2 / 22),
  lpgReplaced: (biogasM3) => Math.round(biogasM3 * 7.5 * 10) / 10,
};
