import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Sprout, Package, Truck } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: Tractor,
      title: "Farm Mechanization",
      description: "Modern machinery and equipment to optimize your farming operations and increase productivity.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sprout,
      title: "Crop Cultivation",
      description: "Expert guidance and support for growing high-quality crops with sustainable practices.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Package,
      title: "Quality Packaging",
      description: "Professional packaging solutions to maintain freshness and ensure safe transportation.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Reliable transportation and delivery services to get your products where they need to be.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive agricultural solutions to support your farming journey from cultivation to delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
                  <CardHeader className="text-center">
                    <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
