import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/constants";

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#121632] mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-neutral-500">
            Don't just take our word for it - hear from some of our satisfied clients about 
            their experience working with VB Systems Communication.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-primary flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5" 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-6 italic">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4" 
                    />
                    <div>
                      <h4 className="text-[#121632] font-medium">{testimonial.name}</h4>
                      <p className="text-neutral-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
