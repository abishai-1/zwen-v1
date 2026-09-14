import React from 'react';

interface CardConnectorLinesProps {
  progress: number;
}

export const CardConnectorLines: React.FC<CardConnectorLinesProps> = ({ progress }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
      {/* Top-Left Line */}
      <g opacity={0.35 + progress * 0.25}>
        <line
          x1="28%"
          y1="25%"
          x2="45%"
          y2="42%"
          stroke="#121316"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="28%" cy="25%" r="2.5" fill="#121316" />
        <circle cx="45%" cy="42%" r="2.5" fill="#121316" />
      </g>

      {/* Top-Right Line */}
      <g opacity={0.35 + progress * 0.25}>
        <line
          x1="72%"
          y1="25%"
          x2="55%"
          y2="42%"
          stroke="#121316"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="72%" cy="25%" r="2.5" fill="#121316" />
        <circle cx="55%" cy="42%" r="2.5" fill="#121316" />
      </g>

      {/* Bottom-Left Line */}
      <g opacity={0.35 + progress * 0.25}>
        <line
          x1="26%"
          y1="75%"
          x2="45%"
          y2="58%"
          stroke="#121316"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="26%" cy="75%" r="2.5" fill="#121316" />
        <circle cx="45%" cy="58%" r="2.5" fill="#121316" />
      </g>

      {/* Bottom-Right Line */}
      <g opacity={0.35 + progress * 0.25}>
        <line
          x1="74%"
          y1="75%"
          x2="55%"
          y2="58%"
          stroke="#121316"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="74%" cy="75%" r="2.5" fill="#121316" />
        <circle cx="55%" cy="58%" r="2.5" fill="#121316" />
      </g>
    </svg>
  );
};
