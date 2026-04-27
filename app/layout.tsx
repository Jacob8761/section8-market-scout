import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success With Section 8 Market Analysis',
  description: 'Section 8 investment market data and analysis — 2026 edition for Success with Section 8 mentees.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --bg:              #060a0f;
            --surface:         #0b1320;
            --surface-deep:    #07090e;
            --surface-modal:   #0f1419;
            --surface-card:    #1a2332;
            --surface-card-sm: #131c27;
            --header-from:     #07101f;
            --border:          #151f2e;
            --border-2:        #172030;
            --border-3:        #1e2d3d;
            --border-subtle:   #0c1320;
            --border-footer:   #0d1520;
            --border-blue:     #1e3a5f;
            --scrollbar-track: #07090e;
            --scrollbar-thumb: #1a2535;
            --text:            #e2e8f0;
            --text-2:          #cbd5e1;
            --text-3:          #94a3b8;
            --text-4:          #64748b;
            --text-5:          #475569;
            --text-6:          #334155;
            --blue:            #3b82f6;
            --blue-light:      #60a5fa;
            --blue-subtle:     rgba(59,130,246,0.1);
            --blue-subtle-2:   rgba(59,130,246,0.18);
            --tooltip-bg:      #0a1628;
            --tooltip-text:    #cbd5e1;
            --tooltip-title:   #60a5fa;
            --why-bg:          linear-gradient(135deg,#0e1e3c,#0c1828);
            --why-border:      #1e3a5f;
            --why-text:        #60a5fa;
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg:              #f0f4f8;
              --surface:         #ffffff;
              --surface-deep:    #f8fafc;
              --surface-modal:   #ffffff;
              --surface-card:    #f1f5f9;
              --surface-card-sm: #e8edf3;
              --header-from:     #dbeafe;
              --border:          #dde3ec;
              --border-2:        #c8d3de;
              --border-3:        #b8c5d4;
              --border-subtle:   #edf1f7;
              --border-footer:   #dde3ec;
              --border-blue:     #93c5fd;
              --scrollbar-track: #f8fafc;
              --scrollbar-thumb: #c8d3de;
              --text:            #0f172a;
              --text-2:          #1e293b;
              --text-3:          #475569;
              --text-4:          #64748b;
              --text-5:          #475569;
              --text-6:          #94a3b8;
              --blue:            #2563eb;
              --blue-light:      #1d4ed8;
              --blue-subtle:     rgba(37,99,235,0.08);
              --blue-subtle-2:   rgba(37,99,235,0.12);
              --tooltip-bg:      #1e293b;
              --tooltip-text:    #e2e8f0;
              --tooltip-title:   #93c5fd;
              --why-bg:          linear-gradient(135deg,#eff6ff,#dbeafe);
              --why-border:      #93c5fd;
              --why-text:        #1d4ed8;
            }
          }
          body { margin: 0; padding: 0; background: var(--bg); }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0, background: 'var(--bg)' as string }}>
        {children}
      </body>
    </html>
  )
}
