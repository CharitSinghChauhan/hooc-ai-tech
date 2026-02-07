import { Navbar } from "@/components/Home/Navbar";
import { LogosSection } from "@/components/Home/LogosSection";
import { VideoSection } from "@/components/Home/VideoSection";
import FeatureBento from "@/components/Home/FeatureBento";
import CardStack from "@/components/card";
import Footer from "@/components/Home/Footer";
import { Hero } from "@/components/Home/Hero";
import Testimonials from "@/components/mvpblocks/testimonials-marquee";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import CTA2 from "@/components/mvpblocks/cta-2";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <div className="bg-black">
        <LogosSection />
      </div>
      <VideoSection />
      <FeatureBento />
      <CardStack />
      <Testimonials />
      <ContactUs1 />
      <CTA2 />
      <Footer />
    </main>
  );
}
