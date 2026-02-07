import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-20 px-4 md:px-8 mt-24">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section: Logo & Hero Text */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              {/* Placeholder for the logo in the image (3 colored rings) */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <circle
                  cx="20"
                  cy="14"
                  r="8"
                  stroke="#A855F7"
                  strokeWidth="3"
                />
                <circle
                  cx="14"
                  cy="24"
                  r="8"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <circle
                  cx="26"
                  cy="24"
                  r="8"
                  stroke="#EF4444"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Uncover a new approach to design
          </h2>

          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Get Viroka now and be part of a community of designers, from
            freelancers to top Fortune 500 companies
          </p>

          <div className="pt-4">
            <Button className="bg-[#6366f1] hover:bg-[#5558e6] w-64 text-white rounded-full py-6 text-base shadow-lg shadow-indigo-500/20">
              Get started for free
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20 border-t border-white/10 pt-16 justify-items-center">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-mono text-gray-500 mb-2">Product</h3>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              What's New
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Design
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Collaboration
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Prototyping
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Developer Handoff
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              All Features
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-mono text-gray-500 mb-2">Support</h3>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Download and Install
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Support Community
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Enterprise Support
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community Forum
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-mono text-gray-500 mb-2">Resources</h3>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Our Blog
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Extensions & Plugins
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Free for Education
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Newsletter
            </Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-mono text-gray-500 mb-2">About</h3>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Partners
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Security
            </Link>
          </div>
        </div>

        {/* Bottom Newsletter & Copyright */}
        <div className="w-full border-white/10 pt-12">
          {/* HOOC TECH Background - Anchored at bottom */}
          <div className="absolute -bottom-10 left-0 right-0 flex items-end justify-center pointer-events-none overflow-hidden select-none h-50">
            <h1 className="text-[24vh] font-bold text-white/2 tracking-tighter whitespace-nowrap leading-none">
              HOOC TECH
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8">
            <div className="mb-4 md:mb-0">
              &copy; 2024 Viroka. Designed by TubeDao
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
