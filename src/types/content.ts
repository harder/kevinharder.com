import type { ImageMetadata } from 'astro';

export type Link = {
  label: string;
  href: string;
};

export type SocialLink = Link & {
  icon: string;
};

export type FamilyMember = {
  name: string;
  blurb: string;
  image: ImageMetadata;
  link?: string;
};

export type CareerRole = {
  company: string;
  companyUrl?: string;
  companyUrlTitle?: string;
  title: string;
  timeframe: string;
  logos: ImageMetadata[];
  summary: string;
  highlights: string[];
  openByDefault?: boolean;
};
