import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Truck } from "lucide-react";
import tractorImage from "@/assets/tractor.jpg";

const services = [
  {
    name: "Tractor Hours",
    icon: Tractor,
    description: "Professional tractor services for plowing, tilling, and field preparation. Reliable equipment operated by experienced hands.",
    features: ["Land Preparation", "Plowing Services", "Field Maintenance", "Flexible Hours"],
  },
  {
    name: "Transportation",
    icon: Truck,
    description: "Safe and timely transportation services for your agricultural produce and equipment. We ensure your goods reach their destination in perfect condition.",
    features: ["Produce Delivery", "Equipment Transport", "Flexible Routes", "On-time Service"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${tractorImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Supporting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond crops, we provide essential agricultural services
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {service.name}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Book {service.name === "Tractor Hours" ? "a Tractor" : "Transport"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
