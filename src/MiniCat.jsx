import React, { useState } from 'react';
import './MiniCat.css';

export default function MiniCat() {
  const [action, setAction] = useState('idle');

  return (
    <div className="cat-container">
      {/* The Cat SVG */}
      <div 
        className={`cat-body-wrapper ${action}`}
        onClick={() => {
          if (action === 'idle') setAction('wave');
          else if (action === 'wave') setAction('tilt');
          else setAction('idle');
        }}
      >
        <svg viewBox="0 0 200 200" className="cat-svg" width="200" height="200">
          {/* Cat Shadow */}
          <ellipse cx="100" cy="180" rx="40" ry="8" fill="#e0d0c0" />

          {/* Tail */}
          <path d="M 130 150 Q 160 140 150 110" stroke="#333" strokeWidth="12" fill="none" strokeLinecap="round" />

          {/* Body */}
          <path d="M 70 160 C 60 140 60 110 75 100 L 125 100 C 140 110 140 140 130 160 Z" fill="#333" />

          {/* Head */}
          <circle cx="100" cy="80" r="45" fill="#333" />

          {/* Ears */}
          <polygon points="65,55 55,20 85,40" fill="#333" />
          <polygon points="135,55 145,20 115,40" fill="#333" />
          <polygon points="70,50 62,28 82,40" fill="#f7aef8" />
          <polygon points="130,50 138,28 118,40" fill="#f7aef8" />

          {/* Face Details */}
          <circle cx="85" cy="75" r="4" fill="white" />
          <circle cx="115" cy="75" r="4" fill="white" />
          <polygon points="97,83 103,83 100,87" fill="#f7aef8" />
          <path d="M 95 91 Q 100 96 105 91" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Left Paws */}
          <ellipse cx="80" cy="160" rx="8" ry="6" fill="#333" />
          <ellipse cx="120" cy="160" rx="8" ry="6" fill="#333" />

          {/* Right Paw */}
          <g className="paw-arm">
            <ellipse cx="135" cy="120" rx="7" ry="10" fill="#333" />
          </g>
        </svg>
      </div>

      <p className="instruction">Click the cat to make it wave or tilt its head!</p>
    </div>
  );
}
