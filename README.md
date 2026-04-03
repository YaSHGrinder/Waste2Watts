# Waste2Watts — Turn Food Waste Into Clean Energy

## Tech Stack

- **Frontend:** Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + Recharts
- **Backend:** Express.js + Mongoose (MongoDB)
- **Charts:** Recharts (Area, Line, Pie, Bar)
- **Icons:** Lucide React

## Project Structure

```
Waste2Watts/
├── frontend/                    # Next.js frontend
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DashboardPreview.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ImpactCalculator.tsx
│   │   │   ├── CarbonCredits.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PartnerForm.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Full interactive dashboard
│   │   ├── page.tsx             # Landing page (all sections)
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles + design tokens
│   └── lib/
│       ├── api.ts               # API client with dummy data fallback
│       └── conversions.ts       # Waste-to-output formulas
│
├── backend/                     # Express.js API
│   ├── src/
│   │   ├── server.js            # Entry point
│   │   ├── models/
│   │   │   └── WasteEntry.js    # Mongoose model
│   │   ├── routes/
│   │   │   └── waste.js         # Waste API routes
│   │   ├── controllers/
│   │   │   └── wasteController.js
│   │   └── utils/
│   │       ├── conversions.js   # Server-side formulas
│   │       └── seedData.js      # 90-day dummy data
│   └── .env
└── README.md
```

## Running Locally

### 1. Frontend

```bash
cd frontend
npm run dev
```

Open http://localhost:3000

### 2. Backend (optional, has in-memory fallback)

```bash
cd backend
npm install
npm run dev
```

Runs on http://localhost:5000

The frontend API client automatically falls back to in-memory dummy data if the backend is unavailable.

## Conversion Formulas

| Input | Output |
|-------|--------|
| 1 kg food waste | 0.05 m³ biogas |
| 1 kg food waste | 0.25 kg fertilizer |
| 1 kg food waste | 0.001 ton CO₂ offset |

## Features

- **Landing Page:** Animated hero section with live stats, glassmorphism cards, smooth scroll
- **Dashboard:** Real-time input/output with circular gauges, Recharts (Area, Pie, Bar), weekly data table
- **Impact Calculator:** Interactive slider showing environmental impact from 1-1000 kg waste
- **Carbon Credits:** Trend chart with area fill, market value estimates
- **How It Works:** 4-step animated flow diagram with icons
- **About Us:** Funding-focused with problem, opportunity, and scalability sections
- **Partner Form:** Full partnership request form with ESG benefits
- **Premium UI:** Dark + green theme, glass cards, gradient borders, Framer Motion animations
