export const mtCfg: Record<string, { color: string; bg: string; label: string }> = {
  Cashflow:     { color: '#22c55e', bg: 'rgba(34,197,94,0.13)',  label: 'Cashflow' },
  Mix:          { color: '#3b82f6', bg: 'rgba(59,130,246,0.13)', label: 'Mix' },
  Appreciation: { color: '#a855f7', bg: 'rgba(168,85,247,0.13)', label: 'Appreciation' },
  Appreciating: { color: '#a855f7', bg: 'rgba(168,85,247,0.13)', label: 'Appreciation' },
}

export const rkCfg: Record<string, { color: string; bg: string }> = {
  Crime:               { color: '#ef4444', bg: 'rgba(239,68,68,0.15)' },
  Insurance:           { color: '#f97316', bg: 'rgba(249,115,22,0.15)' },
  'Population Decline':{ color: '#94a3b8', bg: 'rgba(148,163,184,0.15)' },
  'Sloping Homes':     { color: '#c084fc', bg: 'rgba(192,132,252,0.15)' },
}

export const TIPS: Record<string, string> = {
  'Market Type': "How we classify this market's investment strategy:\n• Cashflow = buy cheap, rent high, profit monthly\n• Appreciation = home values rise over time\n• Mix = balanced monthly income + value growth",
  'Cashflow': 'You buy a property at a low price and charge rent (via Section 8) that covers all your expenses with money left over every month. Best strategy for beginners wanting immediate income.',
  'Mix': 'A balanced market — you earn decent monthly rent income AND the property grows in value over time. Best of both worlds for Section 8 investors.',
  'Appreciation': 'Home values are rising in this market. Monthly cashflow may be lower, but your property becomes worth more over time. Think 5–10 year horizon.',
  'Pop. Trend': 'Is the city growing or shrinking?\n\nGrowing ↑ = more renters, more demand, safer long-term investment.\nShrinking ↓ = plan your exit strategy and watch resale liquidity.',
  'Risk Flags': "Known issues to research before investing here. These aren't automatic deal-breakers — just things to investigate. Click any city row for detailed explanations of each flag.",
  'Crime': 'Higher-than-average crime in this city. You can still invest profitably! Focus on specific safe neighborhoods. Ask your local real estate agent which streets/zip codes to target.',
  'Insurance': 'Home insurance costs are significantly higher here (often due to hurricanes, floods, or coastal location).\n\nAlways get 3 insurance quotes BEFORE buying — high premiums can wipe out your monthly profit.',
  'Population Decline': 'People are leaving this city. Section 8 demand may still be strong short-term, but plan your exit. Make sure you have a 5–7 year strategy and watch resale options.',
  'Sloping Homes': 'Many homes are built on hillsides or have uneven terrain. This can cause foundation and drainage problems.\n\nAlways hire a structural inspector — foundation repairs can cost $10,000–$50,000+.',
  'Unemployment': 'Percentage of residents without jobs. Higher unemployment often means more people qualify for Section 8 assistance (more potential tenants), but also signals economic stress in the area.',
  'Property Tax Rate': "What you pay in taxes yearly as a % of your home's value.\n\nExample: 2% rate on a $150k home = $3,000/year in taxes. This is a real expense that reduces your monthly profit — always factor it in.\n\n⚠️ Important Disclaimer on Property Taxes\nThe property tax rates shown are city-wide averages or typical effective rates. Actual taxes on any individual property can vary significantly based on its exact assessed value, location within special tax districts, owner exemptions, purchase date (due to assessment caps), and recent improvements. Always verify the exact tax history and millage rates for a specific address using the county tax assessor's website before making an investment decision.",
  'Insurance Index': 'A simple rating for how expensive home insurance is here.\n\nLow = affordable (under $1,500/yr)\nMedium = moderate ($1,500–$3,000/yr)\nHigh = expensive ($3,000–$8,000+/yr) — budget carefully!',
  'Poverty Rate': 'Percentage of residents below the poverty line. Higher rates often mean stronger Section 8 voucher demand (more eligible tenants actively looking for housing).',
}

export const fmtPop = (n: number): string =>
  n >= 1e6 ? (n / 1e6).toFixed(2) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(0) + 'k' : String(n)
