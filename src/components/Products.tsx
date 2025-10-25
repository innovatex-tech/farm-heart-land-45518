import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sesameImage from "@/assets/sesame-hands.jpg";
import maizeImage from "@/assets/maize.jpg";
import watermelonImage from "@/assets/watermelon.jpg";

const products = [
  {
    name: "Premium Sesame",
    quantity: "100kg",
    description: "Golden sesame seeds, carefully harvested and cleaned to perfection.",
    image: sesameImage,
    alt: "Premium golden sesame seeds from Lovable Dude Farm - 100kg packages available",
    note: "Rich in nutrients and flavor",
  },
  {
    name: "Golden Maize",
    quantity: "75kg",
    description: "Fresh maize corn, straight from the fields to your doorstep.",
    image: maizeImage,
    alt: "Fresh golden maize corn from Somalia - 75kg packages delivered to your doorstep",
    note: "Perfect for multiple uses",
  },
  {
    name: "Fresh Watermelon",
    quantity: "Fresh Harvest",
    description: "Sweet, juicy watermelons grown under the African sun.",
    image: watermelonImage,
    alt: "Sweet fresh watermelons grown organically under African sun in Mogadishu",
    note: "Seasonal availability",
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality crops harvested with care and expertise
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    {product.quantity}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {product.note}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Prices may vary with market conditions
                  </p>
                  <Link to="/contact">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Request Latest Price
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
