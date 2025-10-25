import { Navbar } from "@/components/Navbar";
import { About as AboutSection } from "@/components/About";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default About;
