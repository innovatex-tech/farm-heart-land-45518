import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sesameImage from "@/assets/sesame-hands.jpg";
import maizeImage from "@/assets/maize.jpg";
import watermelonImage from "@/assets/watermelon.jpg";
import farmerImage from "@/assets/farmer-portrait.jpg";
import tractorImage from "@/assets/tractor.jpg";
import heroImage from "@/assets/hero-farm.jpg";

const galleryImages = [
  {
    src: sesameImage,
    alt: "Golden sesame seeds being held in farmer's hands showing premium quality harvest",
    quote: "Every seed is a promise.",
    span: "md:col-span-2",
  },
  {
    src: farmerImage,
    alt: "Portrait of dedicated farmer from Lovable Dude Farm in Mogadishu",
    quote: "Passion meets dedication.",
    span: "md:row-span-2",
  },
  {
    src: maizeImage,
    alt: "Fresh golden maize corn harvested from Mogadishu fields",
    quote: "Golden harvests, golden hearts.",
    span: "",
  },
  {
    src: tractorImage,
    alt: "Agricultural tractor used for plowing and field preparation services",
    quote: "Tools that build communities.",
    span: "md:col-span-2",
  },
  {
    src: watermelonImage,
    alt: "Sweet fresh watermelons grown under African sun in Somalia",
    quote: "Nature's sweetest gifts.",
    span: "",
  },
  {
    src: heroImage,
    alt: "Panoramic view of Lovable Dude Farm agricultural fields in Mogadishu",
    quote: "From our fields to your table.",
    span: "md:col-span-2",
  },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Life at the Farm
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the journey from soil to harvest
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${image.span} h-64 md:h-80`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-heading text-xl md:text-2xl text-primary-foreground italic">
                  "{image.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
