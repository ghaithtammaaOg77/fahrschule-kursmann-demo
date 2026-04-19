import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fahrschule Kursmann'
export const size = { width: 1200, height: 1200 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0077B6',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
        }}
      >
        {/* FK Badge */}
        <div
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '72px',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0077B6',
            fontSize: '140px',
            fontWeight: 900,
            letterSpacing: '-4px',
          }}
        >
          FK
        </div>

        {/* Name */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '52px',
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '2px',
            display: 'flex',
          }}
        >
          FAHRSCHULE KURSMANN
        </div>

        {/* City */}
        <div
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '36px',
            fontWeight: 500,
            display: 'flex',
          }}
        >
          Landsberg am Lech
        </div>
      </div>
    ),
    { ...size }
  )
}
