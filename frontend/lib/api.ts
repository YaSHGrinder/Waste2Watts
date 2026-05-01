const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface WasteEntry {
  _id: string;
  date: string;
  hostelName: string;
  wasteKg: number;
  biogasM3: number;
  fertilizerKg: number;
  carbonCredits: number;
}

export interface Summary {
  totalWaste: number;
  totalBiogas: number;
  totalFertilizer: number;
  totalCarbonCredits: number;
}

export interface DailyTrend {
  date: string;
  wasteKg: number;
  biogasM3: number;
  carbonCredits: number;
}

function generateDummyEntries(): WasteEntry[] {
  const data: WasteEntry[] = [];
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
    const hostel = hostels[Math.floor(Math.random() * hostels.length)];
    const biogasM3 = parseFloat((wasteKg * 0.05).toFixed(2));
    const fertilizerKg = parseFloat((wasteKg * 0.25).toFixed(2));
    const carbonCredits = parseFloat((wasteKg * 0.001).toFixed(3));

    data.push({
      _id: `entry-${i}`,
      date: date.toISOString().split("T")[0],
      hostelName: hostel,
      wasteKg,
      biogasM3,
      fertilizerKg,
      carbonCredits,
    });
  }
  return data;
}

export async function fetchEntries(): Promise<WasteEntry[]> {
  try {
    const res = await fetch(`${API_BASE}/waste`, { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  } catch {
    return generateDummyEntries();
  }
}

export async function fetchSummary(): Promise<Summary> {
  try {
    const res = await fetch(`${API_BASE}/waste/summary`, { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  } catch {
    const entries = generateDummyEntries();
    return {
      totalWaste: entries.reduce((sum, e) => sum + e.wasteKg, 0),
      totalBiogas: entries.reduce((sum, e) => sum + e.biogasM3, 0),
      totalFertilizer: entries.reduce((sum, e) => sum + e.fertilizerKg, 0),
      totalCarbonCredits: entries.reduce(
        (sum, e) => sum + e.carbonCredits,
        0
      ),
    };
  }
}

export async function fetchDailyTrend(): Promise<DailyTrend[]> {
  try {
    const res = await fetch(`${API_BASE}/waste/daily-trend`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  } catch {
    const entries = generateDummyEntries();
    return entries.map((e) => ({
      date: e.date,
      wasteKg: e.wasteKg,
      biogasM3: e.biogasM3,
      carbonCredits: e.carbonCredits,
    }));
  }
}

export async function postWasteEntry(
  hostelName: string,
  wasteKg: number
): Promise<WasteEntry | null> {
  try {
    const res = await fetch(`${API_BASE}/waste`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hostelName, wasteKg }),
    });
    return res.json();
  } catch {
    return null;
  }
}
