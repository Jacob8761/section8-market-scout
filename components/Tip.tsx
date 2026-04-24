'use client'
import { useState } from 'react'
import { TIPS } from '@/lib/config'

interface TipProps {
  id: string
  children: React.ReactNode
  placement?: 'top' | 'bottom'
}

const base: React.CSSProperties = {
  background: '#0a1628', border: '1px solid #1e3a5f', borderRadius: 10,
  padding: '11px 14px', fontSize: 12.5, color: '#cbd5e1',
  lineHeight: 1.65, boxShadow: '0 10px 40px rgba(0,0,0,0.75)',
  whiteSpace: 'pre-wrap', fontFamily: "'Inter',sans-serif", fontWeight: 400,
}

export default function Tip({ id, children, placement = 'top' }: TipProps) {
  const [vis, setVis] = useState(false)
  const text = TIPS[id]
  if (!text) return <span>{children}</span>

  const label = (
    <>
      <span style={{ display: 'block', color: '#60a5fa', fontWeight: 700, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>{id}</span>
      {text}
    </>
  )

  return (
    <>
      <span
        style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 3, cursor: 'help' }}
        onMouseEnter={() => setVis(true)}
        onMouseLeave={() => setVis(false)}
        onClick={e => { e.stopPropagation(); setVis(v => !v) }}
      >
        {children}
        <span style={{
          fontSize: 9.5, color: '#3b82f6', border: '1px solid #3b82f666', borderRadius: '50%',
          width: 13, height: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, flexShrink: 0, lineHeight: 1,
        }}>?</span>

        {/* Desktop tooltip — hidden on mobile via CSS */}
        {vis && (
          <span className="tip-dt" style={{
            ...base,
            position: 'absolute',
            ...(placement === 'top' ? { bottom: 'calc(100% + 10px)' } : { top: 'calc(100% + 10px)' }),
            left: '50%', transform: 'translateX(-50%)',
            width: 290, zIndex: 9999, pointerEvents: 'none',
          }}>
            {label}
            <span style={{
              position: 'absolute',
              ...(placement === 'top'
                ? { top: '100%', borderTop: '6px solid #1e3a5f' }
                : { bottom: '100%', borderBottom: '6px solid #1e3a5f' }),
              left: '50%', transform: 'translateX(-50%)',
              borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
              display: 'block', width: 0, height: 0,
            }} />
          </span>
        )}
      </span>

      {/* Mobile tooltip — fixed, centered, never clipped. Hidden on desktop via CSS */}
      {vis && (
        <>
          <div
            className="tip-mc-bd"
            onClick={e => { e.stopPropagation(); setVis(false) }}
          />
          <div className="tip-mc" style={{ ...base, zIndex: 10000 }}>
            {label}
            <button
              onClick={e => { e.stopPropagation(); setVis(false) }}
              style={{
                display: 'block', marginTop: 12, marginLeft: 'auto',
                background: 'none', border: '1px solid #1e3a5f44', color: '#64748b',
                borderRadius: 6, padding: '4px 12px', fontSize: 11, cursor: 'pointer',
                fontFamily: "'Inter',sans-serif",
              }}
            >✕ Close</button>
          </div>
        </>
      )}
    </>
  )
}
