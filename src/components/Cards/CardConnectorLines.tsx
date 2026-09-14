import React from 'react';

interface CardConnectorLinesProps {
  progress: number;
}

export const CardConnectorLines: React.FC<CardConnectorLinesProps> = ({ progress }) => {
  // Opacity fades in as user starts scrolling, then fades back
  const opacity = Math.min(progress * 3, 1) * (1 - Math.max(0, (progress - 0.7) * 3));

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
      {/* Top-Left → Center */}
      <g opacity={opacity * 0.4}>
        <line
          x1="20%"
          y1="22%"
          x2="43%"
          y2="42%"
          stroke="#121316"
          strokeWidth="0.7"
          strokeDasharray="5 5"
        />
        <circle cx="20%" cy="22%" r="2" fill="#121316" opacity="0.5" />
        <circle cx="43%" cy="42%" r="2" fill="#121316" opacity="0.5" />
      </g>

      {/* Top-Right → Center */}
      <g opacity={opacity * 0.4}>
        <line
          x1="80%"
          y1="22%"
          x2="57%"
          y2="42%"
          stroke="#121316"
          strokeWidth="0.7"
          strokeDasharray="5 5"
        />
        <circle cx="80%" cy="22%" r="2" fill="#121316" opacity="0.5" />
        <circle cx="57%" cy="42%" r="2" fill="#121316" opacity="0.5" />
      </g>

      {/* Bottom-Left → Center */}
      <g opacity={opacity * 0.4}>
        <line
          x1="18%"
          y1="78%"
          x2="43%"
          y2="58%"
          stroke="#121316"
          strokeWidth="0.7"
          strokeDasharray="5 5"
        />
        <circle cx="18%" cy="78%" r="2" fill="#121316" opacity="0.5" />
        <circle cx="43%" cy="58%" r="2" fill="#121316" opacity="0.5" />
      </g>

      {/* Bottom-Right → Center */}
      <g opacity={opacity * 0.4}>
        <line
          x1="82%"
          y1="78%"
          x2="57%"
          y2="58%"
          stroke="#121316"
          strokeWidth="0.7"
          strokeDasharray="5 5"
        />
        <circle cx="82%" cy="78%" r="2" fill="#121316" opacity="0.5" />
        <circle cx="57%" cy="58%" r="2" fill="#121316" opacity="0.5" />
      </g>
    </svg>
  );
};
