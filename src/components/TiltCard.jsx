import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', isFeatured = false }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlareStyle({
      opacity: 0.15,
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0, x: '50%', y: '50%' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d'
      }}
      className={`relative overflow-hidden rounded-3xl transition-shadow ${
        isFeatured
          ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/10'
          : 'hover:shadow-xl'
      } ${className}`}
    >
      {/* 3D dynamic lighting glare */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.8), transparent 70%)`
        }}
      />
      {children}
    </div>
  );
}
