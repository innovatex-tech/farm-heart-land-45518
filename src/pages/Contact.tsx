import { Navbar } from "@/components/Navbar";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
