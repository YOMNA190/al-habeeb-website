export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  process: string[];
  benefits: string[];
  image: string;
  relatedProjects: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  location: string;
  area: string;
  timeline: string;
  progress: number;
  completion: string;
  images: string[];
  features: string[];
  investment: boolean;
  gallery: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface Testimonial {
  name: string;
  position: string;
  content: string;
  rating: number;
}

export interface Partner {
  name: string;
  logo: string;
}
