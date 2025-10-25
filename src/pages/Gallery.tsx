import { Navbar } from "@/components/Navbar";
import { Gallery as GallerySection } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <GallerySection />
        <Footer />
      </main>
    </>
  );
};

export default Gallery;
