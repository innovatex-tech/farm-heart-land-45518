import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/50 to-background/90" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </motion.div>

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[15%] w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
          animate={{ 
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative h-full flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-secondary-foreground font-medium text-sm">Premium Agricultural Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                <span className="block text-primary-foreground">Central Africa</span>
                <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                  Trading Company
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-primary-foreground/95 font-medium"
            >
              Grown with Care, Delivered with Heart
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Premium Sesame, Maize, Watermelon, and comprehensive services that bring them to life
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-7 rounded-2xl shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 group"
                >
                  Request a Quote
                  <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 font-semibold text-lg px-8 py-7 rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  Meet the Farmer
                  <Leaf className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-3xl p-6 shadow-2xl"
            >
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium">Hectares Cultivated</div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-3xl p-6 shadow-2xl mt-12"
            >
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/80 font-medium">Years Experience</div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-3xl p-6 shadow-2xl -mt-8"
            >
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-primary-foreground/80 font-medium">Organic & Natural</div>
            </motion.div>

            {/* Stat Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-3xl p-6 shadow-2xl"
            >
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <div className="text-primary-foreground/80 font-medium">Partner Farms</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
