import { motion } from "framer-motion";

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
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-neutral-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
