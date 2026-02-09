export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  icon: string;
  name: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
}
