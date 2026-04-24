# Success With Section 8 Market Analysis

A Next.js 15 App Router dashboard for Section 8 investment market data.

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Leave all settings as defaults — Vercel auto-detects Next.js
4. Click **Deploy**

## Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Adding New Cities

Edit `lib/data.ts` and append to the `markets` array:

```ts
{
  city: "City Name",
  state: "XX",
  population: 000000,
  popTrend: "Increasing",        // Increasing | Decreasing | Flatline
  marketType: "Cashflow",        // Cashflow | Mix | Appreciation
  riskFlags: [],                  // "Crime" | "Insurance" | "Population Decline" | "Sloping Homes"
  notes: "Your notes here",
  unemployment: "4.0%",
  propertyTaxRate: "1.5%",
  insuranceIndex: "Medium",      // Low | Medium | Medium-High | High
  povertyRate: "20%"
}
```

## Project Structure

```
s8scout/
├── app/
│   ├── layout.tsx        # Root layout + metadata + Google Fonts
│   └── page.tsx          # Home page
├── components/
│   ├── Dashboard.tsx     # Main interactive dashboard (client component)
│   ├── Modal.tsx         # Market detail modal
│   ├── Badges.tsx        # MBadge + RPill components
│   └── Tip.tsx           # Hover tooltip component
├── lib/
│   ├── data.ts           # Markets dataset + TypeScript types
│   └── config.ts         # Colors, tooltip text, helpers
├── public/
│   └── logo.png          # Company logo
├── next.config.js
├── package.json
└── tsconfig.json
```
