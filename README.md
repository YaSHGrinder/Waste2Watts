# Waste2Watts

> Turning food waste into clean energy.

Waste2Watts is a waste-to-energy platform that quantifies the biogas, fertilizer, and CO₂ offset output from food waste collected at hostels, canteens, and campuses. We are building for a circular economy — turning a disposal cost into a revenue stream.

**Live site:** [waste2watts.vercel.app](https://waste2watts.vercel.app)

---

## The Problem

India generates ~65,000 tonnes of food waste every day. Most of it ends up in landfills, producing methane — a greenhouse gas 25x more potent than CO₂. Hostels, messes, and eateries pay to dispose of this waste when it could be a resource.

## Our Solution

1. **Collect** organic waste from waste generators (hostels, canteens, campuses)
2. **Process** through anaerobic biogas digesters
3. **Convert** waste into biogas (cooking fuel), liquid fertilizer, and carbon credits
4. **Track** everything through a real-time dashboard with measurable KPIs

### Pilot Plan

- **Scale:** 2 tonnes per day (TPD) processing unit
- **Target:** Hostel and canteen clusters
- **Output per kg waste:** 0.05 m³ biogas · 0.25 kg fertilizer · 0.001 tonne CO₂ offset

## Vision

Make distributed, small-scale waste-to-energy economically viable — starting from hostel clusters and scaling to neighborhood micro-plants across India.

## Current Status

**Pilot Phase** — MVP deployed. Landing page, impact calculator, and monitoring dashboard are live. Backend API with data pipeline is in development.

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Recharts |
| Backend | Node.js · Express · MongoDB · Mongoose |
| Hosting | Vercel (frontend) · Self-hosted (backend) |
| Analytics | Vercel Analytics |

## Project Structure

```
Waste2Watts/
├── frontend/              # Next.js frontend (Vercel)
│   ├── app/
│   │   ├── components/    # Landing page & UI sections
│   │   ├── dashboard/     # Monitoring dashboard
│   │   └── about/         # About & team page
│   ├── lib/               # API client, conversion utilities
│   └── public/            # Static assets
│
└── backend/               # Express.js API
    └── src/
        ├── models/        # MongoDB schemas
        ├── controllers/   # Request handlers
        ├── routes/        # API routes
        └── utils/         # Conversion formulas, data seed
```

## Running Locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens on [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
cp .env.example .env     # copy and edit as needed
npm install
npm run dev
```

Runs on port 5000. The frontend falls back to in-memory data if the backend is not running.

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and configure:

| Variable | Description |
|---|---|
| `PORT` | Backend server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `NODE_ENV` | `development` or `production` |

## License

Private — all rights reserved. Not for distribution without permission.
