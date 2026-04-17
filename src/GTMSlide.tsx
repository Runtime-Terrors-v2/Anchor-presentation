import React from 'react';
import { BarChart2, Coins, Layers } from 'lucide-react';

export default function GTMSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: 'calc(100vh - 160px)',
        paddingTop: '16px',
        paddingBottom: '80px',
        gap: 0,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px', flexShrink: 0 }}>
        <p
          className="text-green-400 font-mono uppercase"
          style={{ fontSize: '11px', letterSpacing: '0.22em', margin: '0 0 8px 0' }}
        >
          MARKET OPPORTUNITY
        </p>
        <h2
          className="text-white font-bold"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, margin: '0 0 8px 0' }}
        >
          Built for a market no one is serving
        </h2>
        <p style={{ fontSize: '15px', color: '#c0c0c0', margin: 0 }}>
          Singapore's senior population is growing. The wearable app market hasn't noticed.
        </p>
      </div>

      {/* Three cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>

        {/* Card 1 — The Market */}
        <div style={{ background: '#111a11', border: '1px solid #1a2f1a', borderRadius: '12px', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0d2010', border: '1px solid #1a3a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BarChart2 className="text-green-400" size={22} />
          </div>
          <div className="text-green-400 font-bold" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800 }}>
            600,000+
          </div>
          <div style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 600 }}>
            Seniors in Singapore aged 65+
          </div>
          <p style={{ fontSize: '13px', color: '#8a8a8a', margin: 0 }}>
            Fastest growing demographic. Least served on wearable app stores. AppGallery's senior lifestyle category has no meaningful competition.
          </p>
          <span
            className="text-green-400 bg-green-400/10"
            style={{ display: 'inline-block', border: '1px solid rgba(74,222,128,0.25)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', padding: '4px 10px', borderRadius: '20px', alignSelf: 'flex-start' }}
          >
            TAM OPPORTUNITY
          </span>
        </div>

        {/* Card 2 — The Model */}
        <div style={{ background: '#111a11', border: '1px solid #1a2f1a', borderRadius: '12px', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0d2010', border: '1px solid #1a3a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Coins size={22} style={{ color: '#ffaa00' }} />
          </div>
          <div className="text-white font-bold" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800 }}>
            Freemium + B2B
          </div>
          <div style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 600 }}>
            Two revenue streams from day one
          </div>
          <ul style={{ fontSize: '13px', color: '#8a8a8a', margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Freemium watch app with family subscription tier at $6–8/month</li>
            <li>B2B licensing to senior care providers and community centres</li>
          </ul>
          <span
            style={{ display: 'inline-block', background: 'rgba(255,170,0,0.1)', color: '#ffaa00', border: '1px solid rgba(255,170,0,0.25)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', padding: '4px 10px', borderRadius: '20px', alignSelf: 'flex-start' }}
          >
            REVENUE MODEL
          </span>
        </div>

        {/* Card 3 — The Huawei Angle */}
        <div style={{ background: '#111a11', border: '1px solid #1a2f1a', borderRadius: '12px', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0d2010', border: '1px solid #1a3a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Layers size={22} style={{ color: '#5bb8ff' }} />
          </div>
          <div className="text-white font-bold" style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800 }}>
            AppGallery First
          </div>
          <div style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 600 }}>
            A flagship use case for Huawei's ecosystem
          </div>
          <p style={{ fontSize: '13px', color: '#8a8a8a', margin: 0 }}>
            ANCHOR demonstrates HarmonyOS at its best — on-device ML, adaptive GPS, haptic UX, and privacy-first architecture. A senior lifestyle category leader.
          </p>
          <span
            style={{ display: 'inline-block', background: 'rgba(0,136,255,0.1)', color: '#5bb8ff', border: '1px solid rgba(0,136,255,0.25)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', padding: '4px 10px', borderRadius: '20px', alignSelf: 'flex-start' }}
          >
            ECOSYSTEM FIT
          </span>
        </div>
      </div>

      {/* Bottom highlight box */}
      <div
        style={{ marginTop: '18px', background: '#0d2010', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '18px 28px', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: '#c8d8c8', flexShrink: 0 }}
      >
        Every <span className="text-green-400 font-bold">1%</span> of Singapore's senior population ={' '}
        <span className="text-green-400 font-bold">6,000 users</span>. Our target in year one:{' '}
        <span className="text-green-400 font-bold">0.5%</span>.
      </div>
    </div>
  );
}
