'use client'
import { useState, useRef, useEffect } from 'react'
import { TIPS } from '@/lib/config'

interface TipProps {
  id: string
  children: React.ReactNode
  placement?: 'top' | 'bottom'
}

// Tooltip always has a dark background in both modes — text must always be light.
const base: React.CSSProperties = {
  background: 'var(--tooltip-bg)',
  border: '1px solid var(--border-blue)',
  borderRadius: 10,
  padding: '11px 14px',
  fontSize: 12.5,
  color: 'var(--tooltip-text)',   // dedicated always-light var
  lineHeight: 1.65,
  boxShadow: '0 10px 40px rgba(0,0,0,0.75)',
  whiteSpace: 'pre-wrap',
  fontFamily: "'Inter',sans-serif",
  fontWeight: 400,
}

interface Pos { anchor: number; left: number }

export default function Tip({ id, children, placement = 'top' }: TipProps) {
  const [vis, setVis] = useState(false)
  const [pos, setPos] = useState<Pos>({ anchor: 0, left: 0 })
  const ref = useRef<HTMLSpanElement>(null)
  const text = TIPS[id]

  // Hide tooltip on scroll so it doesn't drift from its anchor
  useEffect(() => {
    if (!vis) return
    const hide = () => setVis(false)
    window.addEventListener('scroll', hide, true)
    return () => window.removeEventListener('scroll', hide, true)
  }, [vis])

  if (!text) return <span>{children}</span>

  const calcPos = () => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    // Clamp horizontally so 290px tooltip stays within viewport with 10px margin
    const clamped = Math.max(155, Math.min(window.innerWidth - 155, cx))
    setPos({
      anchor: placement === 'top' ? r.top : r.bottom,
      left: clamped,
    })
  }

  const show = () => { calcPos(); setVis(true) }
  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!vis) { calcPos(); setVis(true) } else setVis(false)
  }

  const label = (
    <>
      <span style={{
        display: 'block', color: 'var(--tooltip-title)', fontWeight: 700,
        fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6,
      }}>{id}</span>
      {text}
    </>
  )

  // For placement='top':  position the bottom of the tooltip 10px above the trigger top
  //   → top = anchor - 10, then translateY(-100%) pulls it fully above that point
  // For placement='bottom': position the top of the tooltip 10px below the trigger bottom
  //   → top = anchor + 10
  const fixedStyle: React.CSSProperties = placement === 'top'
    ? { top: pos.anchor - 10, left: pos.left, transform: 'translateX(-50%) translateY(-100%)' }
    : { top: pos.anchor + 10, left: pos.left, transform: 'translateX(-50%)' }

  const arrowStyle: React.CSSProperties = placement === 'top'
    ? { top: '100%', borderTop: '6px solid var(--border-blue)', borderBottom: 'none' }
    : { bottom: '100%', borderBottom: '6px solid var(--border-blue)', borderTop: 'none' }

  return (
    <>
      <span
        ref={ref}
        style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 3, cursor: 'help' }}
        onMouseEnter={show}
        onMouseLeave={() => setVis(false)}
        onClick={toggle}
      >
        {children}
        <span style={{
          fontSize: 9.5, color: 'var(--blue)', border: '1px solid var(--blue)66', borderRadius: '50%',
          width: 13, height: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, flexShrink: 0, lineHeight: 1,
        }}>?</span>
      </span>

      {/* Desktop tooltip — position: fixed so overflow containers never clip it */}
      {vis && (
        <span
          className="tip-dt"
          style={{
            ...base,
            position: 'fixed',
            width: 290,
            zIndex: 9999,
            pointerEvents: 'none',
            ...fixedStyle,
          }}
        >
          {label}
          <span style={{
            position: 'absolute',
            ...arrowStyle,
            left: '50%', transform: 'translateX(-50%)',
            borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
            display: 'block', width: 0, height: 0,
          }} />
        </span>
      )}

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
                background: 'none', border: '1px solid var(--border-blue)44',
                color: 'var(--tooltip-text)',
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
