// Fix: Added type import for `ReactElement` to make React types available in this file.
import type { ReactElement } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  // Fix: Replaced `JSX.Element` with `ReactElement` to resolve the 'Cannot find namespace JSX' error.
  icon: ReactElement;
}
