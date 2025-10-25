import { motion } from "framer-motion";
import { Shield, Heart, Award, Users } from "lucide-react";
import farmerImage from "@/assets/farmer-portrait.jpg";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every product meets our strict quality standards for excellence.",
    },
    {
      icon: Heart,
      title: "Grown with Care",
      description: "Sustainable farming practices that respect the land and environment.",
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "Award-winning produce recognized for superior quality and taste.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local farmers and building strong community partnerships.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that dedication, quality, and care make in every harvest
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={farmerImage}
                alt="Our dedicated farmer"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Passionate About Agriculture
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Committed to delivering the finest produce from our farms to your table
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Side */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
