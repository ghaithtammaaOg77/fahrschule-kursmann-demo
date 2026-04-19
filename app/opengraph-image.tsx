import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fahrschule Kursmann – Führerschein in Landsberg am Lech'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0C14 0%, #0D1A2E 60%, #0A0C14 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
        }}
      >
        {/* Accent bar top left */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: '#0077B6',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0, 119, 182, 0.15)',
            border: '1px solid rgba(0, 119, 182, 0.4)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div style={{ fontSize: 18, color: '#0077B6', fontWeight: 700, display: 'flex' }}>
            🚗 FAHRSCHULE KURSMANN · LANDSBERG AM LECH
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#F0F4FF',
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Führerschein in</span>
          <span style={{ color: '#0077B6' }}>Landsberg am Lech.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            color: '#94A3B8',
            fontSize: 28,
            display: 'flex',
            gap: '24px',
          }}
        >
          <span>Alle Klassen</span>
          <span style={{ color: '#0077B6' }}>·</span>
          <span>Faire Preise</span>
          <span style={{ color: '#0077B6' }}>·</span>
          <span>Persönliche Betreuung</span>
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            right: 100,
            color: '#475569',
            fontSize: 20,
            display: 'flex',
          }}
        >
          fahrschule-kursmann.de
        </div>
      </div>
    ),
    { ...size }
  )
}
