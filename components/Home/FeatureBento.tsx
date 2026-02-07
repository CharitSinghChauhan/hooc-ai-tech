"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EXPERTISE_DATA = [
  {
    title: "Figma Design",
    description:
      "We create stunning designs for your website and mobile applications using Figma.",
    stats: [
      { label: "Projects", value: "150+" },
      { label: "Downloads", value: "10k+" },
    ],
    className: "md:col-span-2 border-red-500/50",
    illustration: (
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] pointer-events-none">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-tl-xl border-l border-t border-white/5 overflow-hidden">
          <div className="p-4 flex flex-col gap-2">
            <div className="h-2 w-1/2 bg-white/10 rounded" />
            <div className="h-2 w-3/4 bg-white/5 rounded" />
            <div className="mt-4 flex gap-2">
              <div className="size-8 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="size-8 rounded bg-white/5" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 size-40 bg-red-500/10 blur-3xl" />
        </div>
      </div>
    ),
  },
  {
    title: "Illustration",
    description:
      "We create stunning illustrations for your website and mobile applications.",
    stats: [{ label: "Illustrations", value: "50+" }],
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-0 right-0 w-full h-[120px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-4 right-4 size-24 bg-[#1a1a1a] rounded-xl border border-white/5 rotate-12 flex items-center justify-center">
          <div className="size-12 rounded-full border-2 border-dashed border-white/10 animate-spin-slow" />
          <div className="absolute size-4 bg-red-500 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    title: "Inspiration",
    description:
      "We provide inspiration for your website and mobile applications.",
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-0 right-0 w-full h-[120px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-4 right-4 flex gap-1">
          <div className="size-16 bg-red-500/20 rounded-lg border border-red-500/30 flex items-center justify-center">
            <div className="size-6 bg-red-500 rounded-sm rotate-45" />
          </div>
          <div className="mt-4 size-12 bg-white/5 rounded-lg border border-white/10" />
        </div>
      </div>
    ),
  },
  {
    title: "Mobile",
    description:
      "We create modern and responsive applications for your website and mobile applications.",
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-0 right-0 w-full h-[120px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-32 bg-[#1a1a1a] rounded-t-2xl border-x border-t border-white/10">
          <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mt-2" />
          <div className="mt-4 px-4 flex flex-col gap-1">
            <div className="h-1 w-full bg-red-500/40 rounded" />
            <div className="h-1 w-2/3 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile solutions",
    stats: [{ label: "Apps", value: "100+" }],
    className: "md:col-span-1",
    illustration: (
      <div className="absolute bottom-0 right-0 w-full h-[120px] pointer-events-none overflow-hidden">
        <div className="absolute bottom-4 right-4 size-24 bg-[#1a1a1a] rounded-xl border border-white/5 -rotate-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent" />
          <div className="p-3">
            <div className="size-6 border border-white/20 rounded" />
            <div className="mt-2 h-1 w-full bg-white/5 rounded" />
            <div className="mt-1 h-1 w-1/2 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureBento() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-red-500">Expertise</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-3xl text-lg md:text-xl font-medium leading-relaxed"
          >
            We combine strategic thinking with cutting-edge technology to
            deliver solutions that set you apart from the competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {EXPERTISE_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative bg-[#0d0d0d] border border-white/[0.05] rounded-[2.5rem] p-10 overflow-hidden hover:bg-[#111] transition-all duration-500",
                item.className,
              )}
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg mb-12 max-w-[280px] font-medium leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto flex gap-12">
                  {item.stats?.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl md:text-4xl font-black text-red-500 tracking-tighter mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-600 uppercase font-bold tracking-[0.2em]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {item.illustration}
            </motion.div>
          ))}

          {/* Contact Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 flex items-center justify-start md:justify-end p-10 group cursor-pointer"
          >
            <div className="flex items-center gap-6 text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="hover:text-red-500 transition-colors">
                Contact us
              </span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="84"
                  height="24"
                  viewBox="0 0 84 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-red-500 w-16 md:w-24"
                >
                  <path
                    d="M0 12H80M80 12L70 2M80 12L70 22"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
