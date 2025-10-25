import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
