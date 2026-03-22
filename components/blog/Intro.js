'use client';

import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    // Check if already loaded
    if (customElements.get('model-viewer')) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!scriptReady) return;
    // Small delay to let custom element register
    const timer = setTimeout(() => {
      const mv = document.querySelector('model-viewer');
      if (mv) {
        mv.addEventListener('load', () => setModelLoaded(true));
        // If already loaded
        if (mv.loaded) setModelLoaded(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [scriptReady]);

  return (
    <>

      <section className="intro-root">
        {/* Decorative BG */}
        <div className="intro-bg-ring" />
        <div className="intro-bg-ring" />
        <div className="intro-bg-ring" />
        <div className="intro-bg-dot" />
        <div className="intro-bg-dot" />

        <div className="intro-card">
          {/* ── 3D Model ── */}
          <div className="model-wrap">
            <div className="model-stage">
              {/* Loader overlay */}
              <div className={`model-loader ${modelLoaded ? 'hidden' : ''}`}>
                <div className="loader-ring" />
                <span className="loader-text">Loading model</span>
              </div>

              {scriptReady && (
                 <model-viewer
                   //src="https://models.readyplayer.me/692892e1786317131c782cae.glb"\
                 src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                   auto-rotate
                   auto-rotate-delay="0"
                   rotation-per-second="5deg"
                   interaction-prompt="none"
                   disable-zoom
                   disable-pan
                   disable-tap
                   style={{ width: '100%', height: '100%', background: 'transparent' }}
                 />
                
              )}
            </div>
            <div className="model-shadow" />
          </div>
          {/* ── Text ── */}
          <div className="intro-text-side">
            <span className="intro-eyebrow">Hello there!</span>

            <h1 className="intro-name">
              I'm Shaurya<br /><span>Wajge</span>
            </h1>

            {/* <span className="intro-role">Computer Engineering Student</span> */}

            <div className="intro-divider" />

            <p className="intro-bio">
              I love  trying out new things, whether it's
              exploring tech, experimenting with ideas, or just following where
              curiosity takes me. It's what drives me to keep building, and growing.
            </p>

            <p className="intro-bio" style={{ marginTop: '-0.5rem' }}>
              I hope you have a good time reading about my experiences as much
              as I enjoy writing about them
            </p>

            <div className="intro-welcome">
              <span className="intro-welcome-dot" />
              It&apos;s nice to have you here
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;