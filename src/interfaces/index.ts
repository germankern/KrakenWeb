export interface ImageAsset {
  url: string;
  filename: string;
  height: number;
  width: number;
  title: string;
  description: string;
}

export interface StudioHead {
  id: string;
  name: string;
  quote: string;
  title: string;
  order: number;
  avatar: ImageAsset;
  trajectory: string;
}

export interface Service {
  id: string;
  order: number;
  link: string;
  background: ImageAsset;
  title: string;
  description: string;
}

export interface OurWork {
  id: string;
  order: number;
  image: ImageAsset;
  title: string;
  description: string;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
