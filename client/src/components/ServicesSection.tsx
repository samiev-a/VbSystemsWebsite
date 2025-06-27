import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Camera, Network, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/constants";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "camera":
        return <Camera className="h-8 w-8 text-primary" />;
      case "server":
        return <Server className="h-8 w-8 text-primary" />;
      case "network":
        return <Network className="h-8 w-8 text-primary" />;
      default:
        return <Server className="h-8 w-8 text-primary" />;
    }
  };

  // return (
  //   <section id="services" className="py-16 md:py-24 bg-neutral-100">
  //     <div className="container mx-auto px-4 md:px-8">
  //       <div className="text-center max-w-3xl mx-auto mb-16">
  //         <span className="text-primary font-semibold">OUR SERVICES</span>
  //         <h2 className="text-3xl md:text-4xl font-bold text-[#121632] mt-2 mb-4">
  //           Professional IT Services That Drive Business Success
  //         </h2>
  //         <p className="text-lg text-neutral-600">
  //           From security surveillance to network infrastructure and complete IT support,
  //           we deliver reliable technology solutions that keep your business running smoothly and securely.
  //         </p>
  //       </div>

  //       <motion.div
  //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //         variants={containerVariants}
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, margin: "-100px" }}
  //       >
  //         {servicesData.map((service, index) => (
  //           <motion.div key={index} variants={itemVariants}>
  //             <Card className="bg-white rounded-xl border border-neutral-300 hover:border-neutral-400 transition-shadow duration-300 h-full overflow-hidden">
  //               <CardContent className="p-6">
  //                 <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
  //                   {getIcon(service.icon)}
  //                 </div>
  //                 <h3 className="text-xl font-semibold text-[#121632] mb-3">
  //                   {service.title}
  //                 </h3>
  //                 <p className="text-neutral-500 mb-4">{service.description}</p>
  //                 <a
  //                   href="#detailed-services"
  //                   className="text-primary font-medium inline-flex items-center hover:underline"
  //                 >
  //                   View Details
  //                   <ArrowRight className="w-4 h-4 ml-2" />
  //                 </a>
  //               </CardContent>
  //             </Card>
  //           </motion.div>
  //         ))}
  //       </motion.div>
  //     </div>
  //   </section>
  // );
}
