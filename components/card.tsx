'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Viroka One",
    description: "A new way to perceive the digital world.",
    src: "",
    link: "#",
    color: "#0f172a"
  },
  {
    title: "Flow State",
    description: "Fluid dynamics in user interface design.",
    src: "",
    link: "#",
    color: "#1e1b4b" 
  },
  {
    title: "Portrait Mode",
    description: "Capturing the essence of human expression.",
    src: "",
    link: "#",
    color: "#2e1065"
  },
  {
    title: "Abstract Form",
    description: "Geometric harmony in motion.",
    src: "",
    link: "#",
    color: "#4a044e"
  },
  {
    title: "Etherial",
    description: "The subtle art of invisibility.",
    src: "",
    link: "#",
    color: "#020617"
  }
];

export default function CardStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-[20vh] mb-[20vh] w-screen">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center mb-20 pointer-events-none">
             <div className="texy-center space-y-2 text-center mb-12">
                <p className="text-sm font-mono text-gray-400">SCROLL DOWN</p>
                <div className="h-10 w-[1px] bg-gray-700 mx-auto" />
                <p className="text-sm font-mono text-gray-400 max-w-[100px] mx-auto leading-tight">TO SEE CARD STACK</p>
            </div>
        </div>

      {projects.map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 w-screen">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="flex flex-col relative w-[400px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl origin-top overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="relative w-full h-full"> 
          <motion.div style={{scale: imageScale}} className="w-full h-full">
            <Image
                fill
                src={src}
                alt={title}
                className="object-cover"
            />
          </motion.div>
          {/* Overlay gradient for text readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300 text-lg">{description}</p>
             </div>
             
             <div className="hidden md:block">
                 <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-transform hover:scale-110 cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
             </div>
        </div>
      </motion.div>
    </div>
  );
};
