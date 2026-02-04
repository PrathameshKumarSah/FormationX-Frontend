"use client";

import { motion } from "framer-motion";
import React from "react";
// Using standard imports instead of require
import { 
  Cpu, Server, Database, Terminal, Network, Zap, GitBranch, Cloud 
} from "lucide-react";

/* ---------------- STATIC BACKGROUND GRID ---------------- */
export const AnimatedFeatureGrid = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--border) / 0.1) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--border) / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
};

/* ---------------- FLOATING TECH ELEMENTS (STATIC) ---------------- */
export const FloatingTechElements = () => {
  const elements = [
    { icon: Cpu, x: "5%", y: "20%", size: 24 },
    { icon: Server, x: "90%", y: "30%", size: 28 },
    { icon: Database, x: "15%", y: "80%", size: 22 },
    { icon: Terminal, x: "85%", y: "70%", size: 26 },
    { icon: Network, x: "25%", y: "40%", size: 20 },
    { icon: Zap, x: "95%", y: "85%", size: 24 },
    { icon: GitBranch, x: "10%", y: "60%", size: 28 },
    { icon: Cloud, x: "80%", y: "15%", size: 22 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map(({ icon: Icon, x, y, size }, index) => (
        <div
          key={index}
          className="absolute"
          // Dynamic Color: Primary with low opacity
          style={{ 
            left: x, 
            top: y, 
            width: size, 
            height: size,
            color: "hsl(var(--primary) / 0.1)" 
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

/* ---------------- FEATURE CARD ---------------- */
export const AnimatedFeatureCard = ({
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      // Dynamic Card Colors
      className="group relative p-5 rounded-2xl backdrop-blur border transition-all duration-300"
      style={{
          backgroundColor: "hsl(var(--card) / 0.6)",
          borderColor: "hsl(var(--border) / 0.5)"
      }}
    >
      {/* Hover Border override */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[hsl(var(--primary)/0.4)] transition-colors duration-300 pointer-events-none" />

      {/* Hover Gradient Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
            background: `linear-gradient(to bottom right, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))`
        }} 
      />

      {/* Icon Container */}
      <div 
        className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      >
        <Icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} />
      </div>

      <h3 
        className="text-sm font-semibold mb-2"
        style={{ color: "hsl(var(--foreground))" }}
      >
        {title}
      </h3>

      <p 
        className="text-sm leading-relaxed"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {description}
      </p>

      {/* Bottom Loading Bar Effect */}
      <div 
        className="absolute bottom-0 left-1/2 w-[80%] h-0.5 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
            background: `linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), transparent)`
        }} 
      />
    </motion.div>
  );
};

/* ---------------- SECTION HEADER ---------------- */
export const AnimatedFeaturesHeader = () => {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span 
        className="inline-block text-sm uppercase tracking-widest mb-4"
        style={{ color: "hsl(var(--primary))" }}
      >
        Platform Capabilities
      </span>

      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        style={{ color: "hsl(var(--foreground))" }}
      >
        <span style={{ color: "hsl(var(--primary))" }}>10 Powerful</span> Solutions
      </h2>

      <p 
        className="max-w-2xl mx-auto text-lg"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        A complete operating system for hackathons—from venue booking to
        talent discovery.
      </p>
    </motion.div>
  );
};

/* ---------------- STATIC GLOW ---------------- */
export const AnimatedFeatureGlow = () => {
  return (
    <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 rounded-full blur-[160px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
    />
  );
};

/* ---------------- CONNECTION LINES (STATIC SVG) ---------------- */
export const FeatureConnectionLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
      <defs>
        <linearGradient id="feature-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* Dynamic stops for gradient using CSS variables won't work easily inside SVG defs without JS help or currentColor */}
            {/* We will use 'currentColor' and set the color on the parent SVG */}
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Set the color of the SVG to primary */}
      <g style={{ color: "hsl(var(--primary))" }}>
        <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="url(#feature-gradient)" strokeWidth="0.5" />
        <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="url(#feature-gradient)" strokeWidth="0.5" />
        <line x1="30%" y1="70%" x2="50%" y2="80%" stroke="url(#feature-gradient)" strokeWidth="0.5" />
        <line x1="70%" y1="20%" x2="90%" y2="40%" stroke="url(#feature-gradient)" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

/* ---------------- FLOATING COUNT BADGE ---------------- */
export const FloatingCountBadge = () => {
  return (
    <motion.div
      className="absolute top-10 right-10 hidden lg:flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      <div 
        className="w-12 h-12 rounded-full border flex items-center justify-center"
        style={{
            backgroundColor: "hsl(var(--primary) / 0.2)",
            borderColor: "hsl(var(--primary) / 0.4)"
        }}
      >
        <span 
            className="text-sm font-bold"
            style={{ color: "hsl(var(--primary))" }}
        >
            10+
        </span>
      </div>
    </motion.div>
  );
};