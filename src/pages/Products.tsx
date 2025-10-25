import { Navbar } from "@/components/Navbar";
import { Products as ProductsSection } from "@/components/Products";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <ProductsSection />
        <Footer />
      </main>
    </>
  );
};

export default Products;
