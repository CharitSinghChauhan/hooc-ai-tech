import { ArrowRight } from "lucide-react";
import LightRays from "./LightRays";
import { ShimmerButton } from "../ui/shimmer-button";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden bg-black bg-grid">
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,black_70%] pointer-events-none" />

      <div className="z-10 flex flex-col items-center">
        {/* Badge */}
        <ShimmerButton className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 text-brand-green px-4 py-1 rounded-full text-xs font-medium mb-8 hover:bg-brand-green/30 transition-colors cursor-pointer group">
          Student worker: looking for QA
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </ShimmerButton>

        {/* Heading */}
        <h1 className="text-5xl md:text-[7rem] font-extrabold tracking-tight max-w-6xl leading-[0.9] flex flex-col items-center">
          <span className="text-white/30">YOUR PARTNER FOR</span>
          <span className="text-white">
            APP DEVELOPMENT<span className="text-brand-green">.</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
          We develop web & mobile apps that deliver measurable results — whether
          new development relaunch or extension.
        </p>

        {/* CTA Button */}
        <Button
          className="mt-10 group bg-brand-green hover:bg-brand-green text-brand-green-foreground px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(174,255,126,0.3)] p-8 space-x-4"
          size={"lg"}
          variant={"secondary"}
        >
          Schedule a Meeting
          <div className="bg-black text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </section>
  );
}
