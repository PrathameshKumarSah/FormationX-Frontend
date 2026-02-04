"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      
      {/* 1. Background Gradient (Replicating .hero-gradient from reference) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top center, hsl(var(--primary) / 0.08) 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-300 mx-auto px-6 text-center z-10">
        
        {/* 2. Badge Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          TRUSTED BY 500+ UNIVERSITIES
        </motion.div>

        {/* 3. Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto"
        >
          The Operating System for <span className="text-primary">College Hackathons</span>
        </motion.h1>

        {/* 4. Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From venue logistics to sponsor management, scale your event with enterprise-grade infrastructure built for the next generation of builders.
        </motion.p>

        {/* 5. Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="w-full sm:w-auto min-w-45 rounded-full h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Start Organizing
          </button>
          <button className="w-full sm:w-auto min-w-45 rounded-full h-14 px-8 bg-background text-foreground text-base font-bold border border-border hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Explore Hackathons
          </button>
        </motion.div>

        {/* 6. Floating Mockup (Browser Window Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Mockup Container with custom shadow matching reference */}
          <div 
            className="rounded-xl md:rounded-2xl overflow-hidden border border-border bg-card"
            style={{
              boxShadow: "0 50px 100px -20px hsl(var(--primary) / 0.12), 0 30px 60px -30px rgba(0, 0, 0, 0.15)"
            }}
          >
            {/* Browser Header */}
            <div className="bg-muted/50 h-8 flex items-center px-4 gap-1.5 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
            </div>

            {/* Browser Content Area */}
            <div className="aspect-video bg-background p-2 md:p-6">
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-border bg-background">
  <Image
    src="/forximg.png" // 👈 image from public folder
    alt="Dashboard Preview Interface"
    fill
    priority
    className="object-cover md:object-contain"
  />
</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;