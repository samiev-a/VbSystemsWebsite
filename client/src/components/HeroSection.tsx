import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#121632] to-[#0F62FE] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-cover"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-28 relative">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            IT Solutions Tailored for <span className="text-[#00A3E0]">Small & Medium Businesses</span>
          </h1>
          <p className="text-neutral-100 text-lg md:text-xl mb-8">
            We provide comprehensive IT services and outsourcing to help your business thrive in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-[#00A3E0] hover:bg-[#33B5E8] text-white font-medium"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-neutral-100 text-[#121632] border-white"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
