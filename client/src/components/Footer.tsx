import { Link } from "wouter";
import { Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News & Events", href: "#" },
  ];

  const serviceLinks = [
    { name: "Surveillance Systems", href: "#services" },
    { name: "Computer & IT Solutions", href: "#services" },
    { name: "Data Networking", href: "#services" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "https://www.facebook.com/pages/VB-Systems-Communication/276479169053960" },
  ];

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-[#121632] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="bg-white text-primary font-bold text-2xl px-2 py-1 rounded mr-2">VB</div>
              <div>
                <div className="text-white font-semibold text-lg leading-tight">VB Systems</div>
                <div className="text-[#00A3E0] text-xs leading-tight">Communication</div>
              </div>
            </Link>
            <p className="text-neutral-300 mb-6">
              Over 23 years of experience in IT, surveillance, and networking technologies. Leading provider in the Metroplex area.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-300 hover:text-[#00A3E0] transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                    className="text-neutral-300 hover:text-[#00A3E0] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                    className="text-neutral-300 hover:text-[#00A3E0] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter to get updates on our latest services and tech insights.
            </p>
            <form className="mb-6">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border border-white/20 text-white placeholder-neutral-400 rounded-l-lg focus:ring-[#00A3E0] focus:border-[#00A3E0]"
                />
                <Button type="submit" className="bg-[#00A3E0] hover:bg-[#00A3E0]/90 text-white rounded-l-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} VB Systems Communication. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-neutral-400 hover:text-[#00A3E0] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
