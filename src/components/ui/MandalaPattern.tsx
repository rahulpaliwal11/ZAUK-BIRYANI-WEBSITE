import React from 'react';

interface MandalaPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
  spin?: boolean;
}

export const MandalaPattern: React.FC<MandalaPatternProps> = ({
  className = '',
  size = 400,
  opacity = 0.06,
  spin = false,
}) => {
  return (
    <div
      className={`pointer-events-none absolute select-none ${spin ? 'animate-spin-slow' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 500 500" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="scallopMandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DC" />
            <stop offset="50%" stopColor="#FCEAA8" />
            <stop offset="100%" stopColor="#DFB74F" />
          </linearGradient>
        </defs>
        <g transform="translate(250, 250)" stroke="url(#scallopMandalaGold)" strokeWidth="5" strokeLinecap="round">
          {/* 12 Outer Scalloped Floral Arches with Inner Dots */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path d="M -40 -170 C -25 -210 25 -210 40 -170" strokeWidth="4.5" />
              <circle cx="0" cy="-185" r="4.5" fill="url(#scallopMandalaGold)" stroke="none" />
              <path d="M -60 -125 C -15 -155 15 -155 60 -125" strokeWidth="3.5" opacity="0.7" />
              <path d="M 0 -140 L 0 -115" strokeWidth="3" opacity="0.5" />
            </g>
          ))}
          <circle cx="0" cy="0" r="170" stroke="url(#scallopMandalaGold)" strokeWidth="3" strokeDasharray="6 8" />
          <circle cx="0" cy="0" r="120" stroke="url(#scallopMandalaGold)" strokeWidth="2.5" opacity="0.6" />
          <circle cx="0" cy="0" r="70" stroke="url(#scallopMandalaGold)" strokeWidth="2" strokeDasharray="3 5" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
};
