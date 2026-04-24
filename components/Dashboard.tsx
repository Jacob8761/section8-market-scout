'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { markets, Market } from '@/lib/data'
import { mtCfg, fmtPop } from '@/lib/config'
import Tip from './Tip'
import { MBadge, RPill } from './Badges'
import Modal from './Modal'

export default function Dashboard() {
  const [search, setSearch]   = useState('')
  const [selMT, setSelMT]     = useState<string[]>([])
  const [selSt, setSelSt]     = useState<string[]>([])
  const [sortC, setSortC]     = useState<keyof Market>('city')
  const [sortD, setSortD]     = useState<'asc' | 'desc'>('asc')
  const [active, setActive]   = useState<Market | null>(null)
  const [adv, setAdv]         = useState(false)
  const [stDrop, setStDrop]   = useState(false)

  const allStates = useMemo(() => [...new Set(markets.map(m => m.state))].sort(), [])
  const tog = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v])

  const filtered = useMemo(() => {
    let d = [...markets]
    if (search) {
      const q = search.toLowerCase()
      d = d.filter(m =>
        m.city.toLowerCase().includes(q) ||
        m.state.toLowerCase().includes(q) ||
        m.marketType.toLowerCase().includes(q)
      )
    }
    if (selMT.length) d = d.filter(m => selMT.some(t => m.marketType.toLowerCase().includes(t.toLowerCase())))
    if (selSt.length) d = d.filter(m => selSt.includes(m.state))
    d.sort((a, b) => {
      const av = String(a[sortC]).toLowerCase()
      const bv = String(b[sortC]).toLowerCase()
      return sortD === 'asc' ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1)
    })
    return d
  }, [search, selMT, selSt, sortC, sortD])

  const doSort = (c: keyof Market) => {
    if (sortC === c) setSortD(d => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortC(c); setSortD('asc') }
  }

  const SortIcon = ({ c }: { c: keyof Market }) =>
    sortC !== c
      ? <span style={{ opacity: .2, marginLeft: 3, fontSize: 9 }}>⇅</span>
      : <span style={{ marginLeft: 3, fontSize: 9, color: '#3b82f6' }}>{sortD === 'asc' ? '▲' : '▼'}</span>

  const TH: React.CSSProperties = {
    padding: '11px 13px', textAlign: 'left', fontSize: 10.5, fontWeight: 700,
    color: '#64748b', textTransform: 'uppercase', letterSpacing: .8,
    cursor: 'pointer', whiteSpace: 'nowrap', userSelect: 'none',
    background: '#07090e', borderBottom: '1px solid #151f2e',
  }
  const TD: React.CSSProperties = {
    padding: '10px 13px', fontSize: 13, color: '#cbd5e1',
    borderBottom: '1px solid #0c1320', verticalAlign: 'middle',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#060a0f', color: '#e2e8f0' }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #07090e; }
        ::-webkit-scrollbar-thumb { background: #1a2535; border-radius: 3px; }
        tr.dr:hover td { background: #0b1320 !important; }
        .chip { border-radius: 20px; border: 1px solid; padding: 5px 14px; font-size: 12px; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; transition: opacity .15s; background: transparent; }
        .chip:hover { opacity: .85; }
        .cbtn { background: #0b1320; border: 1px solid #172030; color: #94a3b8; border-radius: 8px; padding: 7px 14px; cursor: pointer; font-size: 12px; font-weight: 600; font-family: 'Inter', sans-serif; display: inline-flex; align-items: center; gap: 6px; transition: border-color .15s, color .15s; }
        .cbtn:hover { border-color: #3b82f6; color: #e2e8f0; }
        @media (max-width: 768px) { .dt { display: none !important; } .mc { display: flex !important; } .sb { grid-template-columns: 1fr !important; } .adv-btn { display: none !important; } .tip-dt { display: none !important; } .tip-mc-bd { display: block; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.55); } .tip-mc { display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: min(290px,85vw); max-height: 70vh; overflow-y: auto; } }
        @media (min-width: 769px) { .mc { display: none !important; } .tip-mc { display: none !important; } .tip-mc-bd { display: none !important; } }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: 'linear-gradient(180deg,#07101f 0%,#060a0f 100%)', borderBottom: '1px solid #151f2e' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '14px 24px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="/" style={{ display: 'block', cursor: 'pointer', flexShrink: 0 }} title="Return home">
              <Image
                src="/logo.png"
                alt="Success with Section 8"
                width={220}
                height={58}
                style={{ height: 58, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(30,77,183,0.25))' }}
                priority
              />
            </a>
            <div style={{ width: 1, height: 44, background: '#151f2e', flexShrink: 0 }} />
            <div>
              <h1 style={{ margin: 0, fontSize: 'clamp(13px,2vw,18px)', fontWeight: 700, color: '#e2e8f0', letterSpacing: -.3, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.2 }}>
                Success With Section 8 Market Analysis
              </h1>
              <div style={{ fontSize: 11, color: '#475569', marginTop: 3 }}>
                {filtered.length} of {markets.length} markets shown · 2026 Data
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {([['Cashflow','#22c55e'],['Mix','#3b82f6'],['Appreciation','#a855f7']] as [string,string][]).map(([t,c]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#64748b' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: c, display: 'inline-block' }} />{t}
              </div>
            ))}
          </div>
        </div>

        {/* Stat bar */}
        <div className="sb" style={{ maxWidth: 1440, margin: '0 auto', padding: '8px 24px 14px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
          {[
            { label: 'Markets Shown',  val: filtered.length },
            { label: 'States Covered', val: [...new Set(filtered.map(m => m.state))].length },
          ].map(({ label, val }) => (
            <div key={label} style={{ background: '#0b1320', border: '1px solid #151f2e', borderRadius: 10, padding: '8px 14px' }}>
              <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0', fontFamily: "'DM Mono',monospace" }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '16px 24px 40px' }}>

        {/* Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 14, alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: '1 1 220px', minWidth: 180 }}>
            <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#475569', fontSize: 14, pointerEvents: 'none' }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search city, state, or type…"
              style={{ width: '100%', background: '#0b1320', border: '1px solid #172030', borderRadius: 9, padding: '9px 12px 9px 34px', color: '#e2e8f0', fontSize: 13, outline: 'none', fontFamily: "'Inter',sans-serif" }}
            />
          </div>

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {(['Cashflow','Mix','Appreciation'] as const).map(t => {
              const c = mtCfg[t]; const on = selMT.includes(t)
              return (
                <button key={t} className="chip" onClick={() => tog(selMT, setSelMT, t)}
                  style={{ color: on ? c.color : '#64748b', borderColor: on ? c.color : '#172030', background: on ? c.bg : 'transparent' }}>
                  {t}
                </button>
              )
            })}
          </div>

          <div style={{ position: 'relative' }}>
            <button className="cbtn" onClick={() => setStDrop(o => !o)}>
              📍 State {selSt.length ? `(${selSt.length})` : ''} ▾
            </button>
            {stDrop && (
              <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, background: '#0b1320', border: '1px solid #172030', borderRadius: 10, padding: 8, zIndex: 200, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, minWidth: 160, boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
                {allStates.map(s => (
                  <button key={s} onClick={() => tog(selSt, setSelSt, s)}
                    style={{ background: selSt.includes(s) ? 'rgba(59,130,246,0.18)' : 'none', border: 'none', color: selSt.includes(s) ? '#3b82f6' : '#94a3b8', padding: '5px 10px', cursor: 'pointer', borderRadius: 6, textAlign: 'left', fontSize: 12, fontFamily: "'Inter',sans-serif" }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {(search || selMT.length || selSt.length) && (
            <button onClick={() => { setSearch(''); setSelMT([]); setSelSt([]); setStDrop(false) }}
              style={{ background: 'none', border: '1px solid #ef444455', color: '#ef4444', borderRadius: 8, padding: '7px 12px', cursor: 'pointer', fontSize: 12, fontFamily: "'Inter',sans-serif" }}>
              Clear ×
            </button>
          )}

          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button className="cbtn adv-btn" onClick={() => setAdv(a => !a)}
              style={{ borderColor: adv ? '#3b82f6' : '#172030', color: adv ? '#3b82f6' : '#94a3b8', background: adv ? 'rgba(59,130,246,0.1)' : '#0b1320' }}>
              {adv ? '▾' : '▸'} Advanced
            </button>
          </div>
        </div>

        {/* Hint bar */}
        <div style={{ marginBottom: 12, padding: '8px 14px', background: '#0b1320', border: '1px solid #151f2e', borderRadius: 8, fontSize: 12, color: '#475569', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#3b82f6', fontSize: 14, flexShrink: 0 }}>💡</span>
          <span>New to Section 8 investing? Hover any <span style={{ color: '#60a5fa', fontWeight: 600 }}>?</span> icon for a plain-English explanation. Click any row for a full market breakdown.</span>
        </div>

        {/* ── Desktop table ── */}
        <div className="dt" style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid #151f2e', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
            <thead>
              <tr>
                {([
                  { c: 'city'       as keyof Market, l: 'City / State', tip: null },
                  { c: 'population' as keyof Market, l: 'Population',   tip: null },
                  { c: 'popTrend'   as keyof Market, l: 'Pop. Trend',   tip: 'Pop. Trend' },
                  { c: 'marketType' as keyof Market, l: 'Market Type',  tip: 'Market Type' },
                  { c: null,                          l: 'Risk Flags',   tip: 'Risk Flags' },
                ]).map(({ c, l, tip }) => (
                  <th key={l} style={TH} onClick={c ? () => doSort(c) : undefined}>
                    {tip ? <Tip id={tip} placement="bottom">{l}</Tip> : l}
                    {c && <SortIcon c={c} />}
                  </th>
                ))}
                {adv && [
                  { l: 'Unemploy.',  tip: 'Unemployment' },
                  { l: 'Prop Tax',   tip: 'Property Tax Rate' },
                  { l: 'Insurance',  tip: 'Insurance Index' },
                  { l: 'Poverty',    tip: 'Poverty Rate' },
                ].map(({ l, tip }) => (
                  <th key={l} style={TH}><Tip id={tip} placement="bottom">{l}</Tip></th>
                ))}
                <th style={TH}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(m => {
                const trend = m.popTrend.includes('Inc') ? '↑ ' : m.popTrend.includes('Dec') ? '↓ ' : '→ '
                const tCol  = m.popTrend.includes('Inc') ? '#22c55e' : m.popTrend.includes('Dec') ? '#ef4444' : '#64748b'
                return (
                  <tr key={`${m.city}-${m.state}`} className="dr" onClick={() => setActive(m)} style={{ cursor: 'pointer' }}>
                    <td style={TD}>
                      <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 14, fontFamily: "'Space Grotesk',sans-serif" }}>{m.city}</div>
                      <div style={{ fontSize: 11, color: '#475569', marginTop: 1 }}>{m.state}</div>
                    </td>
                    <td style={TD}><span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12 }}>{fmtPop(m.population)}</span></td>
                    <td style={TD}><span style={{ fontSize: 12, color: tCol }}>{trend}{m.popTrend}</span></td>
                    <td style={TD}><MBadge type={m.marketType} /></td>
                    <td style={TD}>
                      {m.riskFlags.length === 0
                        ? <span style={{ color: '#22c55e', fontSize: 11, fontWeight: 600 }}>✓ Clean</span>
                        : m.riskFlags.map(f => <RPill key={f} flag={f} />)}
                    </td>
                    {adv && <>
                      <td style={TD}><span style={{ fontSize: 12, color: '#64748b', fontFamily: "'DM Mono',monospace" }}>{m.unemployment}</span></td>
                      <td style={TD}><span style={{ fontSize: 12, color: '#64748b', fontFamily: "'DM Mono',monospace" }}>{m.propertyTaxRate}</span></td>
                      <td style={TD}><span style={{ fontSize: 12, color: '#64748b' }}>{m.insuranceIndex}</span></td>
                      <td style={TD}><span style={{ fontSize: 12, color: '#64748b', fontFamily: "'DM Mono',monospace" }}>{m.povertyRate}</span></td>
                    </>}
                    <td style={{ ...TD, maxWidth: 220, fontSize: 12, color: '#475569', lineHeight: 1.4 }}>{m.notes}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {!filtered.length && <div style={{ textAlign: 'center', padding: 60, color: '#475569' }}>No markets match your current filters.</div>}
        </div>

        {/* ── Mobile cards ── */}
        <div className="mc" style={{ flexDirection: 'column', gap: 12 }}>
          {filtered.map(m => (
            <div key={`${m.city}-${m.state}`} onClick={() => setActive(m)}
              style={{ background: '#0b1320', border: '1px solid #151f2e', borderRadius: 14, padding: 16, cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#e2e8f0', fontFamily: "'Space Grotesk',sans-serif" }}>{m.city}, {m.state}</div>
                  <div style={{ fontSize: 12, color: '#475569', marginTop: 2 }}>{m.popTrend} · {fmtPop(m.population)}</div>
                </div>
                <MBadge type={m.marketType} />
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                {m.riskFlags.map(f => <RPill key={f} flag={f} />)}
                {!m.riskFlags.length && <span style={{ color: '#22c55e', fontSize: 11, fontWeight: 600 }}>✓ No Risk Flags</span>}
              </div>
              <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.4 }}>{m.notes}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 36, padding: '14px 0 6px', borderTop: '1px solid #0d1520', fontSize: 11, color: '#334155', lineHeight: 1.7, textAlign: 'center' }}>
          Data as of 2026 &nbsp;•&nbsp; Educational tool for Success with Section 8 Mentees only &nbsp;•&nbsp;<br />
          Always verify latest HUD FMRs, local PHA rules, property values, and insurance costs with official sources.
        </div>
      </div>

      {active && <Modal m={active} onClose={() => setActive(null)} advanced={adv} />}
      {stDrop && <div onClick={() => setStDrop(false)} style={{ position: 'fixed', inset: 0, zIndex: 100 }} />}
    </div>
  )
}
