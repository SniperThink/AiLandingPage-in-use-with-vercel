import React from 'react';

interface PointerLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  color?: string;
  width?: number;
  dashArray?: string;
  className?: string;
}

const PointerLine: React.FC<PointerLineProps> = ({
  start,
  end,
  color = 'rgba(255, 255, 255, 0.3)',
  width = 2,
  dashArray = '5,5',
  className = '',
}) => {
  // Calculate control point for the quadratic curve
  const midPoint = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2 + 50, // Adjust curve height
  };

  const pathData = `M ${start.x} ${start.y} Q ${midPoint.x} ${midPoint.y} ${end.x} ${end.y}`;

  return (
    <svg
      className={`pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
      }}
    >
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dashArray}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PointerLine;
