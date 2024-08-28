import * as React from 'react';
import { getArrow } from 'curved-arrows';

interface Point {
  x: number;
  y: number;
}

interface CurvedArrowProps {
  from: Point;
  to: Point;
  color?: string;
  width?: number;
}

export function CurvedArrow({ from, to, color = 'black', width = 2 }: CurvedArrowProps) {
  const arrowHeadSize = 9;
  const [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae] = getArrow(from.x, from.y, to.x, to.y, {
    padEnd: arrowHeadSize,
  });

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
    >
      <path
        d={`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`}
        stroke={color}
        strokeWidth={width}
        fill="none"
      />
      <polygon
        points={`0,${-arrowHeadSize} ${arrowHeadSize * 2},0 0,${arrowHeadSize}`}
        transform={`translate(${ex}, ${ey}) rotate(${ae})`}
        fill={color}
      />
    </svg>
  );
}
