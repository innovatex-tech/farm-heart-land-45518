import { Navbar } from "@/components/Navbar";
import { Services as ServicesSection } from "@/components/Services";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <ServicesSection />
        <Footer />
      </main>
    </>
  );
};

export default Services;
