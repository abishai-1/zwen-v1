export interface ZwenHeroTelemetry {
  designPrecision: number;
  computeArch: string;
  renderFps: string;
  creativeVector: string;
  status: string;
  systemCode: string;
  coordinates: string;
  bearing: number;
}

export interface HeroCardConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  preview: string;
  summary: string;
}

export interface CapabilityItem {
  name: string;
  desc?: string;
}

export interface CapabilityGroup {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  category: string;
  services: string[];
  coverImage: string;
  featured: boolean;
  challenge?: string;
  approach?: string;
  deliverables?: string[];
  outcome?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  focus: string;
  description: string;
  avatar?: string;
}

export interface LabExperiment {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tag: string;
  status: 'ACTIVE' | 'EXPERIMENTAL' | 'PROTOTYPE' | 'CONCEPT';
}
