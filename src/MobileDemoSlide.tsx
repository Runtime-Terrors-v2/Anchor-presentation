import React, { useRef, useEffect } from 'react';
import demoVideo from './assets/vids/Demo_Mobile.mp4';

export default function MobileDemoSlide() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(() => {});
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* DEMO label */}
      <p
        style={{
          color: '#4ade80',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          margin: '0 0 16px 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        MOBILE APP DEMO
      </p>

      {/* Glow border container */}
      <div
        style={{
          borderRadius: '20px',
          padding: '3px',
          background: 'linear-gradient(135deg, rgba(74,222,128,0.6), rgba(74,222,128,0.1), rgba(74,222,128,0.6))',
          boxShadow: '0 0 40px rgba(74,222,128,0.35), 0 0 80px rgba(74,222,128,0.15), 0 0 120px rgba(74,222,128,0.08)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src={demoVideo}
          autoPlay
          loop
          muted
          playsInline
          {...({ controlsList: 'nofullscreen nodownload' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
          disablePictureInPicture
          style={{
            width: '72vw',
            height: '72vh',
            objectFit: 'contain',
            borderRadius: '16px',
            display: 'block',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
