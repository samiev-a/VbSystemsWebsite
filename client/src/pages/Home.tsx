import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation when the page loads
    if (location === "/" && window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    } else if (location === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DetailedServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
