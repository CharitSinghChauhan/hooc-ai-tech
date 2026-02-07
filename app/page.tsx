import { Navbar } from "@/components/Home/Navbar";

import { LogosSection } from "@/components/Home/LogosSection";
import { VideoSection } from "@/components/Home/VideoSection";
import { Hero } from "@/components/Home/Hero";
import Testimonials from "@/components/mvpblocks/testimonials-marquee";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import CTA2 from "@/components/mvpblocks/cta-2";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogosSection />
      <VideoSection />
      <Testimonials />
      <ContactUs1 />
      <CTA2 />
    </main>
  );
}
