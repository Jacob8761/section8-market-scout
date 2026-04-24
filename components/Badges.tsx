'use client'
import Tip from './Tip'
import { mtCfg, rkCfg } from '@/lib/config'

export function MBadge({ type }: { type: string }) {
  const c = mtCfg[type] ?? mtCfg.Mix
  return (
    <Tip id={c.label}>
      <span style={{
        color: c.color, background: c.bg, border: `1px solid ${c.color}44`,
        borderRadius: 6, padding: '2px 9px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
      }}>
        {c.label}
      </span>
    </Tip>
  )
}

export function RPill({ flag }: { flag: string }) {
  const c = rkCfg[flag] ?? { color: '#94a3b8', bg: 'rgba(148,163,184,0.15)' }
  return (
    <Tip id={flag}>
      <span style={{
        color: c.color, background: c.bg, border: `1px solid ${c.color}44`,
        borderRadius: 6, padding: '2px 7px', fontSize: 11, fontWeight: 600,
        display: 'inline-block', marginRight: 3, marginBottom: 2, whiteSpace: 'nowrap',
      }}>
        {flag}
      </span>
    </Tip>
  )
}
