import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Camera, Network, CheckCircle, ArrowRight } from "lucide-react";
import { detailedServicesData } from "@/lib/constants";
import surveillanceImage from "@assets/bea4fa1e-c189-4c77-8c0a-202790aca8d0_1751029732307.jpg";
import itOfficeImage from "@assets/9ac6c16a-5ea6-49d8-9e95-63a0057f0874_1751029720293.jpg";

export default function DetailedServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getIcon = (iconName: string, className = "h-12 w-12 text-primary") => {
    const iconProps = { className };
    switch (iconName) {
      case "camera":
        return <Camera {...iconProps} />;
      case "server":
        return <Server {...iconProps} />;
      case "network":
        return <Network {...iconProps} />;
      default:
        return <Server {...iconProps} />;
    }
  };

  const handleContactClick = () => {
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      const headerHeight = 80;
      const targetPosition =
        contactElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            COMPREHENSIVE SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121632] mt-4 mb-6">
            Professional IT Solutions Tailored for Your Business
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From surveillance systems to network infrastructure and complete IT
            support, we provide end-to-end technology solutions that help your
            business operate efficiently and securely.
          </p>
        </div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {detailedServicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Section */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#121632] mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-primary font-semibold">
                    {service.callToAction}
                  </p>
                  <Button
                    onClick={handleContactClick}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Visual Section */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={service.id === 'surveillance' ? surveillanceImage : 
                             service.id === 'networking' ? itOfficeImage : 
                             service.id === 'it-solutions' ? itOfficeImage : itOfficeImage}
                        alt={`${service.title} - Professional installation and support`}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                            {getIcon(service.icon, "h-6 w-6 text-white")}
                          </div>
                          <h4 className="text-2xl font-bold">
                            Professional {service.title}
                          </h4>
                        </div>
                        <p className="text-white/90 text-sm">
                          Expert installation, configuration, and ongoing support
                          for all your {service.title.toLowerCase()} needs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-[#121632] mb-4">
              Ready to Upgrade Your Technology Infrastructure?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Contact our team of experts today for a free consultation and
              discover how our comprehensive IT solutions can transform your
              business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Schedule Free Consultation
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
