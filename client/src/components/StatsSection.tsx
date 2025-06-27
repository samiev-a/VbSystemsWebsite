import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * numericValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);
  
  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Client Retention" },
    { value: "24/7", label: "Support Available" },
    { value: "50+", label: "IT Specialists" }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#121632] to-[#0F62FE] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Counter value={stat.value} />
              <div className="text-neutral-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
