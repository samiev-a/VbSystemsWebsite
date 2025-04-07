import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      title: "Experienced Team",
      description: "Our certified IT professionals bring decades of combined experience in diverse technology domains."
    },
    {
      title: "Client-Focused Approach",
      description: "We prioritize understanding your business needs to deliver solutions that truly make a difference."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We stay ahead of technology trends to provide innovative solutions that give your business a competitive edge."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <span className="text-primary font-semibold">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121632] mt-2 mb-6">
              Technology Partners for Your Business Growth
            </h2>
            <p className="text-neutral-500 mb-6">
              VB Systems Communication has been providing exceptional IT services to small and medium businesses 
              for over 15 years. We understand the unique challenges faced by SMBs and offer tailored solutions 
              that align with your business goals and budget.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#121632]">{feature.title}</h4>
                    <p className="text-neutral-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="IT team meeting" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-36 md:w-48">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                    <div className="text-neutral-500 text-sm mt-1">Years of Experience</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-36 md:w-48">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                    <div className="text-neutral-500 text-sm mt-1">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
