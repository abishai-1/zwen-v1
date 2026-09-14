export interface Point {
  x: number;
  y: number;
}

const NUM_VERTICES = 32;
const CX = 200;
const CY = 200;

// Generate 32 parametrically aligned, strictly clockwise vertices for each stage

// Stage 1: Rotated Chamfered Rhombus (Diamond with corner bevels and side notches)
export const STAGE_RHOMBUS_OUTER: Point[] = Array.from({ length: NUM_VERTICES }).map((_, i) => {
  const theta = -Math.PI / 2 + (i * 2 * Math.PI) / NUM_VERTICES;
  // Diamond formula: |x| + |y| = const
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  const manhattan = Math.abs(cosT) + Math.abs(sinT);
  let r = 185 / Math.max(0.7, manhattan);

  // Corner beveling / chamfering clamp
  r = Math.min(r, 195);

  // Micro notch cutouts on diagonal flanks (matching sci-fi chassis)
  const flankAngle = Math.abs(Math.sin(2 * theta));
  if (flankAngle > 0.95 && flankAngle < 0.99) {
    r -= 6;
  }

  return {
    x: CX + r * cosT,
    y: CY + r * sinT,
  };
});

// Stage 2: Cybernetic Hexagon (6 chamfered edges with mechanical side cutouts)
export const STAGE_HEXAGON_OUTER: Point[] = Array.from({ length: NUM_VERTICES }).map((_, i) => {
  const theta = -Math.PI / 2 + (i * 2 * Math.PI) / NUM_VERTICES;
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  
  // 6-sided polygon radius calculation
  const sector = (theta + Math.PI / 6 + 2 * Math.PI) % (Math.PI / 3) - (Math.PI / 6);
  let r = 175 / Math.cos(sector);
  r = Math.min(r, 190);

  // Mechanical vent accents
  if (i % 4 === 0) {
    r += 4;
  }

  return {
    x: CX + r * cosT,
    y: CY + r * sinT,
  };
});

// Stage 3: Futuristic Circular Aperture with 6 Angular Stepped Mechanical Sensor Wings
export const STAGE_APERTURE_OUTER: Point[] = Array.from({ length: NUM_VERTICES }).map((_, i) => {
  const theta = -Math.PI / 2 + (i * 2 * Math.PI) / NUM_VERTICES;
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  
  // Base circle of radius 160
  let r = 160;

  // 6 Stepped angular wings extending outward
  const wingFactor = Math.cos(6 * theta);
  if (wingFactor > 0.5) {
    r += 28 * Math.pow(wingFactor, 2);
  }

  return {
    x: CX + r * cosT,
    y: CY + r * sinT,
  };
});

// Scale points around center
export function scalePointsAroundCenter(pts: Point[], scaleFactor: number, cx = CX, cy = CY): Point[] {
  return pts.map((p) => ({
    x: cx + (p.x - cx) * scaleFactor,
    y: cy + (p.y - cy) * scaleFactor,
  }));
}

// Linear interpolation between two sets of points
export function interpolatePoints(shapeA: Point[], shapeB: Point[], t: number): Point[] {
  const clampedT = Math.max(0, Math.min(1, t));
  return shapeA.map((pA, i) => {
    const pB = shapeB[i] || pA;
    return {
      x: pA.x + (pB.x - pA.x) * clampedT,
      y: pA.y + (pB.y - pA.y) * clampedT,
    };
  });
}

// Convert points array to SVG polygon points attribute string
export function pointsToSvgPolygon(pts: Point[]): string {
  return pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
}

// Convert points to percentage string for CSS clip-path: polygon(...)
export function pointsToPercentPolygon(pts: Point[], width = 400, height = 400): string {
  return pts
    .map((p) => `${((p.x / width) * 100).toFixed(2)}% ${((p.y / height) * 100).toFixed(2)}%`)
    .join(', ');
}

// Full 3-phase interpolation based on continuous progress [0 .. 1]
export function getInterpolatedShapes(progress: number) {
  let outerPts: Point[];
  if (progress <= 0.5) {
    const localT = progress / 0.5;
    outerPts = interpolatePoints(STAGE_RHOMBUS_OUTER, STAGE_HEXAGON_OUTER, localT);
  } else {
    const localT = (progress - 0.5) / 0.5;
    outerPts = interpolatePoints(STAGE_HEXAGON_OUTER, STAGE_APERTURE_OUTER, localT);
  }

  // Inner viewport scaled to 68%
  const innerPts = scalePointsAroundCenter(outerPts, 0.68, CX, CY);

  return {
    outerPolygon: pointsToSvgPolygon(outerPts),
    innerPolygon: pointsToSvgPolygon(innerPts),
    innerClipPathCss: `polygon(${pointsToPercentPolygon(innerPts)})`,
  };
}
