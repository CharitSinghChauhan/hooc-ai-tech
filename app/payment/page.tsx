"use client";

import { Navbar } from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function PaymentGatewayPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New: Instant Global Settlements
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Payments for the <br /> modern economy.
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Accept payments, send payouts, and manage your business online with
            a unified platform built for developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 py-6 text-base bg-indigo-600 hover:bg-indigo-700">
              Start Integration <Zap className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-white"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-xl border border-white/10 bg-black/50 p-2 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
            {/* Abstract Dashboard UI */}
            <div className="w-full h-full bg-[#050505] rounded-lg p-6 grid grid-cols-12 gap-6 relative">
              {/* Sidebar */}
              <div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
                <div className="h-8 w-24 bg-white/10 rounded-md mb-8" />
                <div className="h-4 w-full bg-white/5 rounded-md" />
                <div className="h-4 w-3/4 bg-white/5 rounded-md" />
                <div className="h-4 w-full bg-indigo-500/20 rounded-md" />
                <div className="h-4 w-5/6 bg-white/5 rounded-md" />
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-10">
                <div className="flex justify-between mb-8">
                  <div className="h-8 w-48 bg-white/10 rounded-md" />
                  <div className="h-8 w-8 bg-white/10 rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="h-32 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                    <div className="h-8 w-32 bg-white/20 rounded" />
                  </div>
                  <div className="h-32 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                    <div className="h-8 w-32 bg-white/20 rounded" />
                  </div>
                  <div className="h-32 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="h-4 w-20 bg-white/10 rounded mb-4" />
                    <div className="h-8 w-32 bg-white/20 rounded" />
                  </div>
                </div>
                <div className="h-64 bg-white/5 border border-white/5 rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-6xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p className="text-gray-400">
                Accept payments from 195+ countries in 135+ currencies. Localize
                your checkout automatically.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Fraud Protection</h3>
              <p className="text-gray-400">
                Advanced machine learning models detect and block fraud before
                it happens without blocking real customers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Instant Payouts</h3>
              <p className="text-gray-400">
                Access your funds instantly. Transfer to your bank account or
                debit card in minutes, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Code Block */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold">Developer-first API</h2>
            <p className="text-gray-400 text-lg">
              Our RESTful API is predictable, resource-oriented, and easy to
              use. We provide client libraries for all major languages.
            </p>
            <ul className="space-y-3">
              {[
                "Pre-built checkout flows",
                "Custom UI components",
                "Subscription management",
                "Real-time webhooks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-[#111] rounded-xl border border-white/10 p-6 font-mono text-sm overflow-x-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <code className="text-gray-300">
                <span className="text-purple-400">const</span> stripe ={" "}
                <span className="text-blue-400">require</span>(
                <span className="text-green-400">'stripe'</span>)(
                <span className="text-green-400">'sk_test_...'</span>);
                <br />
                <br />
                <span className="text-purple-400">const</span> paymentIntent ={" "}
                <span className="text-purple-400">await</span>{" "}
                stripe.paymentIntents.
                <span className="text-blue-400">create</span>({"{"} <br />
                &nbsp;&nbsp;amount:{" "}
                <span className="text-orange-400">1099</span>, <br />
                &nbsp;&nbsp;currency:{" "}
                <span className="text-green-400">'usd'</span>, <br />
                &nbsp;&nbsp;payment_method_types: [
                <span className="text-green-400">'card'</span>], <br />
                {"}"});
              </code>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
