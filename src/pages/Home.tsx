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
      {/* Our Journey: Standout Story & Gallery */}
      <section className="w-full py-12 bg-background flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Our Journey: From Vision to Harvest</h2>
        <p className="max-w-2xl text-lg text-primary-foreground/90 mb-10 text-center">
          Every great harvest begins with a vision. Our story starts with <b>Field Assessment</b>, where we walk the land, listen to its needs, and plan for abundance. Next, we bring together hearts and minds in <b>Community Meetings</b>, forging partnerships and building trust with local farmers and families. Finally, with hands in the soil, <b>Land Preparation</b> transforms our vision into reality—turning potential into thriving fields. Each step is a testament to our commitment, care, and the vibrant community behind every crop.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
          <div className="flex flex-col items-center">
            <img src="/images/assessment.jpeg" alt="Assessment" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
            <span className="text-lg font-medium text-primary-foreground">Field Assessment</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/communitymeeting.jpeg" alt="Community Meeting" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
            <span className="text-lg font-medium text-primary-foreground">Community Meeting</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/landprep.jpeg" alt="Land Preparation" className="rounded-xl shadow-lg w-full h-64 object-cover mb-4" />
            <span className="text-lg font-medium text-primary-foreground">Land Preparation</span>
          </div>
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
