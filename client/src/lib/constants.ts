import { Service, Testimonial, DetailedService } from "./types";

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

export const detailedServicesData: DetailedService[] = [
  {
    id: "surveillance",
    icon: "camera",
    title: "Surveillance Systems",
    description: "Professional installation and configuration of comprehensive security systems for residential and commercial properties.",
    features: [
      "Complete CCTV and IP camera systems installation",
      "DVR and NVR setup and configuration",
      "Network infrastructure (modems, routers) setup",
      "Remote viewing setup for iPhone, Android, PC, and laptop",
      "HD video surveillance systems",
      "Wireless camera system installation",
      "Ongoing maintenance and technical support",
      "Remote viewer device configuration"
    ],
    callToAction: "Secure your property with our professional surveillance solutions"
  },
  {
    id: "networking",
    icon: "network",
    title: "Data Networking",
    description: "Professional network infrastructure design, installation, and optimization for businesses of all sizes.",
    features: [
      "Custom network infrastructure design and installation",
      "Structured cabling services (Cat5e to Fiber Optic)",
      "Comprehensive network consulting services",
      "Copper and fiber optic solutions",
      "Network testing and certification",
      "OSI model compliance and VB systems integration",
      "Complete wiring services from configuration to application",
      "Network security and optimization"
    ],
    callToAction: "Build a robust network foundation for your business growth"
  },
  {
    id: "it-solutions",
    icon: "server",
    title: "Computer & IT Solutions",
    description: "Complete IT support and solutions to keep your business technology running smoothly and efficiently.",
    features: [
      "Professional laptop and desktop repair services",
      "Custom website design and development",
      "Comprehensive IT solutions and ongoing support",
      "Data backup and disaster recovery services",
      "Software and hardware updates and upgrades",
      "System optimization and performance tuning",
      "Technical support and maintenance programs",
      "IT consulting and strategic planning"
    ],
    callToAction: "Let us handle your IT needs while you focus on your business"
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
