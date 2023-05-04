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
  link: string;
}

export interface Company {
  id: string;
  order: number;
  link: string;
  row: string;
  image: ImageAsset;
}

export interface PortfolioClient {
  id: string;
  title: string;
  description: string;
  link: string;
  image: ImageAsset;
  categories: string[] | null;
}

export interface AboutHome {
  id: string;
  order: number;
  title: ImageAsset;
  image: ImageAsset;
  description: string;
}

export interface TheInternalProject {
  id: string;
  order: number;
  title: ImageAsset;
  image: ImageAsset;
  description: string;
}

export interface OurTeam {
  id: string;
  order: number;
  title: ImageAsset;
  image: ImageAsset;
  description: string;
}

export interface ContactUsRequestProps {
  name: string;
  phoneNumber: string;
  subject: string;
  email: string;
  message: string;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
