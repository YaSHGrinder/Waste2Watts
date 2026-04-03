export const BIODEFACTOR = 0.05;
export const FERTILIZER_FACTOR = 0.25;
export const CARBON_FACTOR = 0.001;
export const CO2_PER_KG_CREDIT = 1000;
export const TREE_CO2_PER_YEAR = 22;

export function wasteToBiogas(wasteKg: number) {
  return wasteKg * BIODEFACTOR;
}

export function wasteToFertilizer(wasteKg: number) {
  return wasteKg * FERTILIZER_FACTOR;
}

export function wasteToCarbonCredits(wasteKg: number) {
  return wasteKg * CARBON_FACTOR;
}

export function co2Avoided(wasteKg: number) {
  return wasteKg * CARBON_FACTOR * CO2_PER_KG_CREDIT;
}

export function treesEquivalent(kgCO2: number) {
  return Math.round(kgCO2 / TREE_CO2_PER_YEAR);
}

export function lpgReplaced(biogasM3: number) {
  return Math.round(biogasM3 * 7.5 * 10) / 10;
}

export function cookingMinutes(biogasM3: number) {
  return Math.round(biogasM3 * 30);
}