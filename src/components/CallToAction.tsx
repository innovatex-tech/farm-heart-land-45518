import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import tractorImage from "@/assets/tractor.jpg";

export const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tractorImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-10 leading-relaxed">
            Let's grow together. Get in touch today and discover how our premium products and services can benefit your business.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+252615575343">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call Us Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
