import { Service, Testimonial } from "./types";

export const servicesData: Service[] = [
  {
    icon: "camera",
    title: "Surveillance Systems",
    description: "Complete CCTV and IP surveillance systems with HD video, remote viewing capabilities, wireless options, and ongoing maintenance and support. Digital video surveillance for residential and commercial locations."
  },
  {
    icon: "server",
    title: "Computer & IT Solutions",
    description: "Comprehensive IT services including laptop & desktop repair, website design, data backup & restore, software/hardware updates, and scalable technical support programs for businesses."
  },
  {
    icon: "network",
    title: "Data Networking",
    description: "Structured cabling design and installation from Cat5e to Fiber Optic. Network configuration, consulting, testing and certification. We provide secure and efficient data networks for all business sizes."
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
