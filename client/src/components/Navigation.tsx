import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as required
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleHashLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile: boolean = false,
  ) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const header = document.querySelector("header");
        const headerHeight = header?.getBoundingClientRect().height || 72;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        setTimeout(() => {
          window.scrollTo({
            top: targetPosition - (isMobile ? 620 : 0),
            behavior: "smooth",
          });
        }, 300);
        // window.pageYOffset = target.getBoundingClientRect().top - headerHeight;
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 bg-white z-50 transition-shadow duration-300 border-b border-neutral-200",
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-white font-bold text-2xl px-3 py-1 rounded mr-2">
              VB
            </div>
            <div>
              <div className="text-secondary-900 font-semibold text-lg leading-tight">
                VB Systems
              </div>
              <div className="text-neutral-400 text-xs leading-tight">
                Communication
              </div>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashLinkClick(e, link.href)}
                className={cn(
                  "relative text-neutral-600 hover:text-primary font-medium transition-colors py-2 nav-link",
                  activeSection === link.href.substring(1) &&
                    "text-primary active",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.href.substring(1) ? "w-full" : "w-0",
                  )}
                ></span>
              </a>
            ))}
          </nav>
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="container mx-auto px-4 py-3 space-y-3 min-h-screen">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashLinkClick(e, link.href)}
                  className={cn(
                    "block py-2 font-medium transition-all duration-150",
                    activeSection === link.href.substring(1)
                      ? "text-primary border-l border-l-4 border-primary pl-2"
                      : "text-neutral-600 hover:text-primary hover:border-l-4 border-primary pl-2",
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
