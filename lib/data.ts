export type MarketType = 'Cashflow' | 'Mix' | 'Appreciation' | 'Appreciating'
export type RiskFlag = 'Crime' | 'Insurance' | 'Population Decline' | 'Sloping Homes'

export interface Market {
  city: string
  state: string
  population: number
  popTrend: string
  marketType: MarketType
  riskFlags: RiskFlag[]
  notes: string
  unemployment: string
  propertyTaxRate: string
  insuranceIndex: string
  povertyRate: string
}

export const markets: Market[] = [
  { city: "Cleveland", state: "OH", population: 365379, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Landlord-friendly, strong HAP payments, quick inspections", unemployment: "3.8%", propertyTaxRate: "1.8%", insuranceIndex: "Medium", povertyRate: "30.6%" },
  { city: "Akron", state: "OH", population: 189664, popTrend: "Flatline", marketType: "Mix", riskFlags: [], notes: "Solid cashflow, good PHA support", unemployment: "4.9%", propertyTaxRate: "1.7%", insuranceIndex: "Medium", povertyRate: "26%" },
  { city: "Toledo", state: "OH", population: 265638, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Very affordable entry, landlord-friendly", unemployment: "5.8%", propertyTaxRate: "1.6%", insuranceIndex: "Medium", povertyRate: "28%" },
  { city: "Columbus", state: "OH", population: 933263, popTrend: "Increasing", marketType: "Mix", riskFlags: [], notes: "Strong job growth, higher prices", unemployment: "4.1%", propertyTaxRate: "1.6%", insuranceIndex: "Low", povertyRate: "15%" },
  { city: "Dayton", state: "OH", population: 136346, popTrend: "Flatline", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Excellent cashflow potential", unemployment: "4.8%", propertyTaxRate: "1.6%", insuranceIndex: "Medium", povertyRate: "27%" },
  { city: "Detroit", state: "MI", population: 645705, popTrend: "Flatline", marketType: "Cashflow", riskFlags: ["Crime"], notes: "High voucher demand, rehab opportunities", unemployment: "5.3%", propertyTaxRate: "2.8%", insuranceIndex: "Medium-High", povertyRate: "33%" },
  { city: "Chicago", state: "IL", population: 2721308, popTrend: "Flatline", marketType: "Mix", riskFlags: ["Crime"], notes: "Large market, more competition", unemployment: "5.2%", propertyTaxRate: "2.1%", insuranceIndex: "Medium", povertyRate: "21%" },
  { city: "Milwaukee", state: "WI", population: 563531, popTrend: "Decreasing", marketType: "Mix", riskFlags: [], notes: "Balanced market", unemployment: "4.0%", propertyTaxRate: "2.2%", insuranceIndex: "Medium", povertyRate: "24%" },
  { city: "Indianapolis", state: "IN", population: 891484, popTrend: "Increasing", marketType: "Appreciation", riskFlags: [], notes: "Strong growth, good landlord environment", unemployment: "3.5%", propertyTaxRate: "0.8%", insuranceIndex: "Low", povertyRate: "15%" },
  { city: "St. Louis", state: "MO", population: 278144, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Strong cashflow, watch crime pockets", unemployment: "4.6%", propertyTaxRate: "1.9%", insuranceIndex: "Medium", povertyRate: "26%" },
  { city: "Birmingham", state: "AL", population: 194400, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Very strong cashflow", unemployment: "4.2%", propertyTaxRate: "0.4%", insuranceIndex: "High", povertyRate: "30%" },
  { city: "Montgomery", state: "AL", population: 193703, popTrend: "Flatline", marketType: "Mix", riskFlags: ["Crime"], notes: "Good entry prices", unemployment: "4.4%", propertyTaxRate: "0.4%", insuranceIndex: "High", povertyRate: "28%" },
  { city: "Mobile", state: "AL", population: 198806, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Insurance"], notes: "Coastal insurance risk", unemployment: "4.7%", propertyTaxRate: "0.4%", insuranceIndex: "High", povertyRate: "25%" },
  { city: "Memphis", state: "TN", population: 618639, popTrend: "Flatline", marketType: "Cashflow", riskFlags: ["Crime"], notes: "Excellent cashflow", unemployment: "4.5%", propertyTaxRate: "0.7%", insuranceIndex: "Medium", povertyRate: "27%" },
  { city: "Jackson", state: "MS", population: 143709, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Population Decline"], notes: "High risk of decline", unemployment: "5.1%", propertyTaxRate: "0.7%", insuranceIndex: "Medium", povertyRate: "32%" },
  { city: "Baton Rouge", state: "LA", population: 218223, popTrend: "Flatline", marketType: "Cashflow", riskFlags: ["Insurance"], notes: "Flood/insurance concerns", unemployment: "4.3%", propertyTaxRate: "0.5%", insuranceIndex: "High", povertyRate: "26%" },
  { city: "Shreveport", state: "LA", population: 177959, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Insurance", "Sloping Homes"], notes: "Watch insurance and property condition", unemployment: "5.0%", propertyTaxRate: "0.5%", insuranceIndex: "High", povertyRate: "29%" },
  { city: "Little Rock", state: "AR", population: 203842, popTrend: "Increasing", marketType: "Mix", riskFlags: [], notes: "Balanced growth", unemployment: "3.8%", propertyTaxRate: "0.7%", insuranceIndex: "Medium", povertyRate: "19%" },
  { city: "Tallahassee", state: "FL", population: 202221, popTrend: "Increasing", marketType: "Appreciation", riskFlags: ["Insurance"], notes: "Strong university demand", unemployment: "3.9%", propertyTaxRate: "0.8%", insuranceIndex: "High", povertyRate: "22%" },
  { city: "Jacksonville", state: "FL", population: 985843, popTrend: "Increasing", marketType: "Appreciation", riskFlags: ["Insurance"], notes: "Growing market, high insurance", unemployment: "3.6%", propertyTaxRate: "0.8%", insuranceIndex: "High", povertyRate: "16%" },
  { city: "Wichita", state: "KS", population: 396119, popTrend: "Flatline", marketType: "Mix", riskFlags: [], notes: "Good Midwest cashflow", unemployment: "3.8%", propertyTaxRate: "1.2%", insuranceIndex: "Low", povertyRate: "18%" },
  { city: "Kansas City", state: "MO", population: 510704, popTrend: "Increasing", marketType: "Appreciation", riskFlags: [], notes: "Strong growth", unemployment: "3.4%", propertyTaxRate: "1.2%", insuranceIndex: "Medium", povertyRate: "17%" },
  { city: "Fayetteville", state: "NC", population: 209749, popTrend: "Increasing", marketType: "Mix", riskFlags: [], notes: "Military presence helps demand", unemployment: "4.0%", propertyTaxRate: "0.9%", insuranceIndex: "Medium", povertyRate: "20%" },
  { city: "Alexandria", state: "LA", population: 43466, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Insurance"], notes: "Smaller market, cheap entry", unemployment: "5.3%", propertyTaxRate: "0.5%", insuranceIndex: "High", povertyRate: "28%" },
  { city: "Clarksville", state: "TN", population: 180716, popTrend: "Increasing", marketType: "Appreciating", riskFlags: [], notes: "Military-driven demand", unemployment: "3.7%", propertyTaxRate: "0.7%", insuranceIndex: "Medium", povertyRate: "15%" },
  { city: "Lubbock", state: "TX", population: 266878, popTrend: "Increasing", marketType: "Mix", riskFlags: [], notes: "University town", unemployment: "3.5%", propertyTaxRate: "1.7%", insuranceIndex: "Medium", povertyRate: "19%" },
  { city: "Pittsburgh", state: "PA", population: 303255, popTrend: "Decreasing", marketType: "Cashflow", riskFlags: ["Sloping Homes"], notes: "Watch older housing stock", unemployment: "4.0%", propertyTaxRate: "1.4%", insuranceIndex: "Medium", povertyRate: "22%" },
  { city: "Tulsa", state: "OK", population: 411894, popTrend: "Increasing", marketType: "Mix", riskFlags: [], notes: "Good cashflow", unemployment: "3.9%", propertyTaxRate: "0.9%", insuranceIndex: "Medium", povertyRate: "20%" },
  { city: "Cincinnati", state: "OH", population: 311097, popTrend: "Increasing", marketType: "Cashflow", riskFlags: ["Sloping Homes"], notes: "Strong Midwest market", unemployment: "3.8%", propertyTaxRate: "1.6%", insuranceIndex: "Medium", povertyRate: "21%" },
]

// ── To add a new city, append an object matching this shape: ──────────────────
// { city: "City Name", state: "XX", population: 000000, popTrend: "Increasing",
//   marketType: "Cashflow", riskFlags: [], notes: "Your notes here",
//   unemployment: "4.0%", propertyTaxRate: "1.5%", insuranceIndex: "Medium", povertyRate: "20%" }
//
// marketType options  : "Cashflow" | "Mix" | "Appreciation"
// riskFlags options   : "Crime" | "Insurance" | "Population Decline" | "Sloping Homes"
// insuranceIndex opts : "Low" | "Medium" | "Medium-High" | "High"
