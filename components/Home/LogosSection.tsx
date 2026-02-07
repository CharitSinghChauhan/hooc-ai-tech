import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeFade,
} from "@/components/ui/brand-marquee";

const logos = [
  { name: "T", src: "" },
  { name: "O", src: "" },
  { name: "Klinik Bavaria", src: "" },
  { name: "Wartsila", src: "" },
  { name: "Backshop", src: "" },
  { name: "TU Berlin", src: "" },
  { name: "Woop", src: "" },
];

export function LogosSection() {
  return (
    <div className="relative bg-white rounded-t-[4rem] -mt-16 pt-12 px-8 z-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-zinc-400 text-sm mb-10">
          Partners and partners who trust us
        </p>

        <Marquee className="opacity-60">
          <MarqueeFade side="left" />
          <MarqueeContent speed={30}>
            {/* Duplicate logos to create seamless loop effect */}
            {[...logos, ...logos].map((logo, index) => (
              <MarqueeItem
                key={`${logo.name}-${index}`}
                className="mx-8 md:mx-16"
              >
                <div className="text-zinc-800 font-bold text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                  {logo.name}
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </div>

      {/* Floating Book Appointment Button */}
      <div className="fixed bottom-0 -translate-y-1/2 right-10 hidden lg:block">
        <Button
          className="bg-brand-green text-brand-green-foreground px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 font-bold hover:scale-105 transition-transform group h-16 hover:bg-brand-green"
          size={"lg"}
        >
          <Calendar className="w-6 h-6 fill-black/10" />
          <span>Book an appointment</span>
        </Button>
      </div>
    </div>
  );
}
