import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Farmer with a Purpose
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={farmerPortrait}
                alt="Portrait of experienced farmer from Lovable Dude Farm, dedicated to sustainable agriculture in Mogadishu, Somalia"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the sun-kissed fields of Mogadishu comes a story of dedication, 
              tradition, and unwavering commitment to quality. Every harvest at Lovable 
              Dude Farm is a testament to the bond between farmer and land.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience nurturing the finest crops, I take pride in 
              delivering produce that speaks for itself—premium sesame seeds, golden 
              maize, and refreshing watermelons, all grown with sustainable practices 
              and genuine care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond crops, I offer tractor services and reliable transportation to 
              support our farming community, because agriculture is more than business—it's 
              about building connections and helping each other thrive.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <div className="relative inline-block">
                <p className="font-heading text-3xl text-primary italic">
                  "Every seed is a promise."
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-accent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
