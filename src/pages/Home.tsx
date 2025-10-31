import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Our Journey: Visual Storytelling */}
      <section className="w-full py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Journey: From Vision to Harvest
          </h2>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed">
            Every great harvest tells a story. Ours begins with vision, grows through community, and flourishes with dedication.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 rounded-full" />
          
          {/* Chapter 1: Field Assessment */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center mb-24 relative"
          >
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img 
                src="/images/assessment.jpeg" 
                alt="Field Assessment - Walking the land with purpose" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-primary-foreground text-base sm:text-lg italic">"Understanding the land is where transformation begins"</p>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Chapter 1</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Field Assessment</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                We walk the land with experienced eyes, listening to what the soil tells us. Every field has a story, 
                a unique potential waiting to be unlocked. Our assessment isn't just about measurements—it's about 
                understanding the heartbeat of the earth beneath our feet.
              </p>
              <div className="inline-flex items-center gap-2 text-primary">
                <span className="w-12 h-0.5 bg-primary" />
                <span className="font-semibold">Where it all begins</span>
              </div>
            </div>
          </motion.div>

          {/* Chapter 2: Community Meeting */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center mb-24 relative"
          >
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <span className="text-secondary font-bold text-sm uppercase tracking-wider">Chapter 2</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Community Gathering</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Agriculture is a symphony, not a solo. We gather farmers, families, and dreamers around shared tables, 
                forging bonds stronger than any fence. Here, traditional wisdom meets innovative thinking, and partnerships 
                are born that will sustain generations.
              </p>
              <div className="inline-flex items-center gap-2 text-secondary">
                <span className="w-12 h-0.5 bg-secondary" />
                <span className="font-semibold">Building together</span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img 
                src="/images/communitymeeting.jpeg" 
                alt="Community Meeting - Unity in purpose" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-primary-foreground text-base sm:text-lg italic">"Together we cultivate more than crops—we grow community"</p>
              </div>
            </div>
          </motion.div>

          {/* Chapter 3: Land Preparation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center relative"
          >
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img 
                src="/images/landprep.jpeg" 
                alt="Land Preparation - Transforming vision into reality" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-primary-foreground text-base sm:text-lg italic">"From the first turn of soil to the final seed planted"</p>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Chapter 3</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Land Preparation</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Now comes the transformation—where vision meets action, and potential becomes reality. With hands in the soil 
                and hearts full of purpose, we prepare the earth for its greatest performance. Every furrow is a promise, 
                every seed a prayer for abundance.
              </p>
              <div className="inline-flex items-center gap-2 text-accent">
                <span className="w-12 h-0.5 bg-accent" />
                <span className="font-semibold">The harvest awaits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <FeaturedProducts />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
