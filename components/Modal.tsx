'use client'
import { Market } from '@/lib/data'
import { mtCfg, fmtPop } from '@/lib/config'
import { MBadge, RPill } from './Badges'
import Tip from './Tip'

interface ModalProps {
  m: Market
  onClose: () => void
  advanced: boolean
}

export default function Modal({ m, onClose, advanced }: ModalProps) {
  const bullets: string[] = []
  if (m.marketType === 'Cashflow')
    bullets.push('💵 Pure Cashflow market: buy cheap, rent high. Ideal for investors who want monthly income from day one.')
  if (m.marketType === 'Mix')
    bullets.push('⚖️ Mixed market: decent monthly income while also building equity as values rise over time.')
  if (m.marketType === 'Appreciation' || m.marketType === 'Appreciating')
    bullets.push('📈 Appreciation market: property values are climbing. Think long-term — 5–10 year wealth building strategy.')
  if (!m.riskFlags.length)
    bullets.push('✅ No risk flags — lower due-diligence burden. A great starting market for newer investors.')
  if (m.riskFlags.includes('Crime'))
    bullets.push('⚠️ Crime flag: focus on specific safe neighborhoods. Use a crime map overlay and ask your local agent for the best pockets within the city.')
  if (m.riskFlags.includes('Insurance'))
    bullets.push('⚠️ High insurance costs: always get 3 quotes before closing. Some coastal/southern areas run $4,000–$8,000+/year — this directly reduces your monthly profit.')
  if (m.riskFlags.includes('Sloping Homes'))
    bullets.push('⚠️ Sloping homes common here: hire a structural inspector before buying. Foundation issues can cost $10,000–$50,000+ to fix.')
  if (m.riskFlags.includes('Population Decline'))
    bullets.push('⚠️ Population is declining: Section 8 demand may still be strong now, but plan your exit strategy and track resale liquidity.')
  bullets.push(`📋 Notes: ${m.notes}`)

  const card = { background: '#1a2332', border: '1px solid #1e2d3d', borderRadius: 10, padding: '11px 13px' }
  const cardSm = { background: '#131c27', border: '1px solid #1e2d3d', borderRadius: 10, padding: '9px 12px' }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0f1419', border: '1px solid #1e2d3d', borderRadius: 18,
          maxWidth: 620, width: '100%', maxHeight: '90vh', overflowY: 'auto',
          padding: '26px 26px 22px', boxShadow: '0 24px 80px rgba(0,0,0,0.9)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 10.5, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, marginBottom: 6 }}>
              Market Deep Dive
            </div>
            <h2 style={{ margin: 0, fontSize: 24, fontFamily: "'Space Grotesk',sans-serif", color: '#e2e8f0', fontWeight: 700, letterSpacing: -0.3 }}>
              {m.city}, <span style={{ color: '#475569' }}>{m.state}</span>
            </h2>
            <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              <MBadge type={m.marketType} />
              {m.riskFlags.map(f => <RPill key={f} flag={f} />)}
              {!m.riskFlags.length && <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>✓ No Risk Flags</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: '1px solid #1e2d3d', color: '#64748b',
              borderRadius: 8, cursor: 'pointer', fontSize: 20, width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >×</button>
        </div>

        {/* Core metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
          {[
            { label: 'Population',  val: fmtPop(m.population), tip: null },
            { label: 'Pop. Trend',  val: m.popTrend,            tip: 'Pop. Trend', small: true },
            { label: 'Market Type', val: (mtCfg[m.marketType] ?? mtCfg.Mix).label, tip: 'Market Type' },
          ].map(({ label, val, tip, small }) => (
            <div key={label} style={card}>
              <div style={{ fontSize: 10, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>
                {tip ? <Tip id={tip}>{label}</Tip> : label}
              </div>
              <div style={{ fontSize: small ? 12 : 17, fontWeight: 700, color: '#e2e8f0', fontFamily: "'DM Mono',monospace", lineHeight: 1.2 }}>
                {val}
              </div>
            </div>
          ))}
        </div>

        {/* Advanced metrics */}
        {advanced && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, marginBottom: 14 }}>
            {[
              { id: 'Unemployment',      val: m.unemployment },
              { id: 'Property Tax Rate', val: m.propertyTaxRate },
              { id: 'Insurance Index',   val: m.insuranceIndex },
              { id: 'Poverty Rate',      val: m.povertyRate },
            ].map(({ id, val }) => (
              <div key={id} style={cardSm}>
                <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                  <Tip id={id} placement="bottom">{id}</Tip>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', fontFamily: "'DM Mono',monospace" }}>{val}</div>
              </div>
            ))}
          </div>
        )}

        {/* Notes */}
        <div style={{ background: '#131c27', border: '1px solid #1e2d3d', borderRadius: 10, padding: '11px 14px', marginBottom: 14 }}>
          <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
            Notes
          </div>
          <div style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.55 }}>{m.notes}</div>
        </div>

        {/* Why section */}
        <div style={{ background: 'linear-gradient(135deg,#0e1e3c,#0c1828)', border: '1px solid #1e3a5f', borderRadius: 12, padding: '16px 18px' }}>
          <div style={{ fontSize: 11, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, marginBottom: 12 }}>
            💡 Why This Market for Section 8 Investors?
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ color: '#94a3b8', fontSize: 13.5, lineHeight: 1.65, borderLeft: '2px solid #1e3a5f', paddingLeft: 12 }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
