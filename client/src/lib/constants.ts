import { Service, Testimonial } from "./types";

export const servicesData: Service[] = [
  {
    icon: "server",
    title: "IT Infrastructure Management",
    description: "Complete management of your IT infrastructure, including servers, networks, and cloud systems to ensure optimal performance."
  },
  {
    icon: "shield",
    title: "Cybersecurity Solutions",
    description: "Protect your business from cyber threats with our comprehensive security solutions, including firewalls, endpoint protection, and security training."
  },
  {
    icon: "cloud",
    title: "Cloud Computing Services",
    description: "Leverage the power of cloud computing with our migration, management, and optimization services for improved efficiency and scalability."
  },
  {
    icon: "headset",
    title: "IT Help Desk Support",
    description: "24/7 technical support for your employees, ensuring minimal downtime and quick resolution of IT issues."
  },
  {
    icon: "code",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to process automation tools."
  },
  {
    icon: "chart",
    title: "Business Intelligence",
    description: "Data analytics and business intelligence solutions to help you make informed decisions and identify growth opportunities."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    rating: 5,
    text: "\"VB Systems completely transformed our IT infrastructure. Their team was professional, responsive, and went above and beyond to ensure our systems were optimized and secure.\"",
    name: "Michael Richardson",
    position: "CEO, Nexus Innovations",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    rating: 5,
    text: "\"We've been working with VB Systems for over 5 years now, and they've consistently provided exceptional IT support and strategic guidance for our growing business.\"",
    name: "Sarah Johnson",
    position: "Operations Director, Quantum Health",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    rating: 4.5,
    text: "\"The cybersecurity solutions from VB Systems have given us peace of mind. Their team quickly identified vulnerabilities and implemented robust protection measures.\"",
    name: "David Thompson",
    position: "IT Manager, Apex Financial",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];
