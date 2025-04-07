import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="bg-gradient-to-r from-primary to-[#00A3E0] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-neutral-100 mb-8 text-lg">
              Let's discuss how our IT services can help your business grow, become more efficient, 
              and stay protected from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-neutral-100 border-white"
                asChild
              >
                <a href="#contact">Get Started Today</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 border-white text-white"
                asChild
              >
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
