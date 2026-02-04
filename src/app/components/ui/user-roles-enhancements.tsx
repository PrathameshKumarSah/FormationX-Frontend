"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Server,
  Terminal,
  Network,
  Zap,
} from "lucide-react";
import React from "react";

/* ---------------- STATIC BACKGROUND GLOW ---------------- */
export const AnimatedEcosystemGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full blur-[160px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-[100px]"
        style={{ backgroundColor: "hsl(var(--secondary) / 0.05)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-[100px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}
      />
    </div>
  );
};

/* ---------------- STATIC FLOATING ICONS ---------------- */
export const FloatingEcosystemIcons = () => {
  const icons = [
    { Icon: Code, x: "10%", y: "20%", size: 24 },
    { Icon: Cpu, x: "85%", y: "30%", size: 28 },
    { Icon: Server, x: "15%", y: "70%", size: 26 },
    { Icon: Terminal, x: "75%", y: "60%", size: 22 },
    { Icon: Network, x: "25%", y: "85%", size: 30 },
    { Icon: Zap, x: "90%", y: "80%", size: 24 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, x, y, size }, index) => (
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

/* ---------------- ROLE CARD ---------------- */
export const AnimatedRoleCard = ({
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
      className="group relative p-6 rounded-2xl backdrop-blur border transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      // Dynamic Card Styles
      style={{
          backgroundColor: "hsl(var(--card) / 0.6)",
          borderColor: "hsl(var(--border) / 0.5)"
      }}
    >
      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[hsl(var(--primary)/0.4)] transition-colors duration-300 pointer-events-none" />

      {/* Hover glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
            background: `linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))`
        }}
      />

      {/* Icon */}
      <div 
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      >
        <Icon className="w-7 h-7" style={{ color: "hsl(var(--primary))" }} />
      </div>

      <h3 
        className="text-xl font-semibold mb-2"
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

      {/* Bottom accent */}
      <div 
        className="absolute bottom-0 left-6 right-6 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
            background: `linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), transparent)`
        }}
      />
    </motion.div>
  );
};

/* ---------------- SECTION HEADER ---------------- */
export const AnimatedRolesHeader = () => {
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
        For Everyone
      </span>

      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        style={{ color: "hsl(var(--foreground))" }}
      >
        Built for the{" "}
        <span style={{ color: "hsl(var(--primary))" }}>Entire Ecosystem</span>
      </h2>

      <p 
        className="max-w-2xl mx-auto text-lg"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        FORX serves everyone in the hackathon ecosystem—from organizers to
        recruiters.
      </p>
    </motion.div>
  );
};

/* ---------------- STATIC CONNECTION LINES ---------------- */
export const EcosystemConnections = () => {
  return (
    <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        // Set the primary color for the whole SVG group to inherit
        style={{ color: "hsl(var(--primary))" }}
    >
      <defs>
        <linearGradient id="eco-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="eco-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <line x1="20%" y1="35%" x2="40%" y2="50%" stroke="url(#eco-grad-1)" strokeWidth="1" />
      <line x1="60%" y1="35%" x2="80%" y2="50%" stroke="url(#eco-grad-2)" strokeWidth="1" />
      <line x1="30%" y1="65%" x2="50%" y2="80%" stroke="url(#eco-grad-1)" strokeWidth="1" />
      <line x1="70%" y1="65%" x2="90%" y2="80%" stroke="url(#eco-grad-2)" strokeWidth="1" />
    </svg>
  );
};

/* ---------------- STATIC ROLE LABELS ---------------- */
export const FloatingRoleIndicators = () => {
  const indicators = [
    { text: "Organizer", x: "10%", y: "25%" },
    { text: "Participant", x: "85%", y: "25%" },
    { text: "Sponsor", x: "20%", y: "75%" },
    { text: "Recruiter", x: "75%", y: "75%" },
    { text: "Judge", x: "45%", y: "15%" },
    { text: "Vendor", x: "55%", y: "85%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {indicators.map((item, index) => (
        <div
          key={index}
          className="absolute text-xs font-semibold"
          style={{ 
            left: item.x, 
            top: item.y,
            color: "hsl(var(--primary) / 0.1)"
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};