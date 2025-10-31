import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Services as ServicesSection } from "@/components/Services";
import { Footer } from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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
