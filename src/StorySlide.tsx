import React from 'react';
import { Anchor } from 'lucide-react';
import videoSrc from './assets/vids/Elderly_Man_s_Confused_Expression_Video.mp4';

export default function StorySlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'calc(100vh - 160px)',
        gap: '48px',
        alignItems: 'stretch',
        paddingTop: '70px',
      }}
    >
      {/* Left column — 55% */}
      <div style={{ flex: '0 0 55%', overflow: 'hidden', borderRadius: '16px', clipPath: 'inset(0 1cm 0 0 round 16px)' }}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          {...({ controlsList: 'nofullscreen nodownload noremoteplayback' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
          disablePictureInPicture
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
        />
      </div>

      {/* Right column — 45%, vertically centered */}
      <div
        style={{
          flex: '0 0 45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '48px',
          gap: '28px',
        }}
      >
        <p
          className="text-green-400 font-mono uppercase"
          style={{ fontSize: '11px', letterSpacing: '0.22em', margin: 0 }}
        >
          THE STORY
        </p>

        <blockquote
          className="text-white"
          style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, margin: 0 }}
        >
          "He knows every shortcut.
          <br />
          He hasn't left his block
          <br />
          in 6 months."
        </blockquote>

        <div className="w-full bg-green-400" style={{ height: '1px', opacity: 0.35 }} />

        <p style={{ fontSize: '16px', color: '#c0c0c0', lineHeight: 1.7, margin: 0 }}>
          The barrier isn't physical. It's fear.
          <br />
          We built something about that.
        </p>

        <Anchor className="text-green-400" width={32} height={32} />
      </div>
    </div>
  );
}
