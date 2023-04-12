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

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
