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
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '6px',
            backgroundColor: '#0077B6',
            marginBottom: '36px',
          }}
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: '#0F172A',
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          Fahrschule Kursmann
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#64748B',
            display: 'flex',
          }}
        >
          Führerschein in Landsberg am Lech
        </div>
      </div>
    ),
    { ...size }
  )
}
