export interface SectionData {
  id: string;
  index: string;
  title: string;
  kanji: string;
  tag: string;
  subtitle: string;
  description: string;
  category: string;
  code: string;
  metrics: {
    label: string;
    value: string;
  }[];
  centralImageUrl: string;
  centralHeading: string;
  telemetry: {
    co2: number;
    n2: number;
    o2: number;
    carbon: number;
    ch: string;
    coordinates: string;
    bearing: number;
  };
}

export type MorphStage = 'rhombus' | 'hexagon' | 'aperture';
