"use client";

import { motion } from "framer-motion";
import React from "react";
// Switched to standard imports for better compatibility than 'require'
import { Code, Terminal, Cpu, Server, Database, Zap } from "lucide-react";

/* ---------------- TECH PARTICLES (STATIC) ---------------- */
export const TechParticles = () => {
  const particles = [
    { icon: Code, x: "5%", y: "10%" },
    { icon: Terminal, x: "85%", y: "20%" },
    { icon: Cpu, x: "15%", y: "80%" },
    { icon: Server, x: "75%", y: "70%" },
    { icon: Database, x: "25%", y: "40%" },
    { icon: Zap, x: "90%", y: "60%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {particles.map(({ icon: Icon, x, y }, index) => (
        <div
          key={index}
          className="absolute"
          // Dynamic Color: Primary with low opacity
          style={{ 
            left: x, 
            top: y, 
            width: 24, 
            height: 24,
            color: "hsl(var(--primary) / 0.1)" 
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

/* ---------------- PROBLEM CARD ---------------- */
export const AnimatedProblemCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
      // Dynamic Colors:
      // bg-gray-900/40 -> bg-[var(--card)]/40
      // border-white/5 -> border-[var(--border)]
      // hover:border-cyan -> hover:border-[var(--primary)]
      className="group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full"
      style={{
        backgroundColor: "hsl(var(--card) / 0.4)",
        borderColor: "hsl(var(--border))",
      }}
    >
      {/* Hover Border Effect (using pseudo-element or class override) */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[hsl(var(--primary)/0.3)] transition-colors duration-300 pointer-events-none" />

      {/* Hover Gradient Background */}
      <div 
        className="absolute inset-0 bg-linear-to-br from-[hsl(var(--primary)/0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
      />

      {/* Icon Container */}
      <div 
        className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      >
        <Icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} />
      </div>

      <h3 
        className="relative text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[hsl(var(--primary))]"
        style={{ color: "hsl(var(--foreground))" }}
      >
        {title}
      </h3>

      <p 
        className="relative text-sm leading-relaxed"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {description}
      </p>

      {/* Bottom Loading Bar Effect */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: "hsl(var(--primary) / 0.5)" }}
      />
    </motion.div>
  );
};

/* ---------------- STATIC GLOW ---------------- */
export const AnimatedGlowOrb = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
      style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}
    />
  );
};

/* ---------------- SECTION HEADER ---------------- */
export const AnimatedSectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-center mb-16 relative z-10"
    >
      <span 
        className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
        style={{ color: "hsl(var(--primary))" }}
      >
        The Challenge
      </span>

      <h2 
        className="text-3xl md:text-5xl font-bold mb-6"
        style={{ color: "hsl(var(--foreground))" }}
      >
        Why{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.6)]">
          Hackathons Fail
        </span>
      </h2>

      <p 
        className="max-w-2xl mx-auto text-lg leading-relaxed"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        College hackathon organizers face recurring operational challenges
        that existing platforms don&apos;t address effectively.
      </p>
    </motion.div>
  );
};

/* ---------------- SUMMARY BOX ---------------- */
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-16 max-w-3xl mx-auto relative"
    >
      {/* Background Glow - mapped purple to primary to keep single-theme consistency */}
      <div 
        className="absolute -inset-1 rounded-2xl blur-lg opacity-50"
        style={{ 
          background: `linear-gradient(to right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))` 
        }}
      />

      <div 
        className="relative p-8 rounded-xl backdrop-blur-md"
        style={{
          backgroundColor: "hsl(var(--card) / 0.8)",
          borderColor: "hsl(var(--primary) / 0.2)",
          borderWidth: "1px"
        }}
      >
        <p 
          className="text-lg italic text-center font-medium"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          &quot;College hackathon organizers lack a reliable, end-to-end
          infrastructure and operational support system, resulting in
          frequent event cancellations, mismanagement, and loss of trust.&quot;
        </p>

        {/* Corner Accents - using Primary shadow */}
        <div 
          className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: "hsl(var(--primary))",
            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)"
          }}
        />
        <div 
          className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full"
          style={{ 
             // Kept consistent with primary, but could be secondary if you want contrast
            backgroundColor: "hsl(var(--primary))",
            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)"
          }}
        />
      </div>
    </motion.div>
  );
};