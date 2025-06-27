export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface DetailedService {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  callToAction: string;
}

export interface Testimonial {
  rating: number;
  text: string;
  name: string;
  position: string;
  avatar: string;
}
