"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  Cpu,
  Server,
  Database,
  Code,
  Terminal,
  Shield,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";
import React from "react";

/* ---------------- STATIC BACKGROUND ORB ---------------- */
export const AnimatedBackgroundOrb = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 rounded-full blur-[160px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      />
    </div>
  );
};

/* ---------------- STATIC COMPARISON ICONS ---------------- */
export const FloatingComparisonIcons = () => {
  const icons = [
    { Icon: Cpu, x: "10%", y: "20%", side: "left" },
    { Icon: Server, x: "85%", y: "30%", side: "right" },
    { Icon: Database, x: "15%", y: "70%", side: "left" },
    { Icon: Code, x: "75%", y: "60%", side: "right" },
    { Icon: Terminal, x: "25%", y: "85%", side: "left" },
    { Icon: Shield, x: "90%", y: "80%", side: "right" },
    { Icon: Users, x: "5%", y: "45%", side: "left" },
    { Icon: Zap, x: "95%", y: "55%", side: "right" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, x, y, side }, index) => (
        <div
          key={index}
          className="absolute"
          style={{ 
            left: x, 
            top: y, 
            width: 24, 
            height: 24,
            // Left = "Old Way" (Destructive/Red), Right = "New Way" (Primary)
            color: side === "left" 
                ? "hsl(var(--destructive) / 0.4)" 
                : "hsl(var(--primary) / 0.2)"
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

/* ---------------- COMPARISON ROW ---------------- */
export const AnimatedComparisonRow = ({
  item,
  index,
}: {
  item: any;
  index: number;
}) => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 p-4 rounded-xl backdrop-blur border transition-all duration-300 relative overflow-hidden group"
      // Dynamic Background & Border
      style={{
        backgroundColor: "hsl(var(--card) / 0.6)",
        borderColor: "hsl(var(--border) / 0.5)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      {/* Hover background */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
            background: `linear-gradient(to right, hsl(var(--primary) / 0.05), transparent)`
        }}
      />

      {/* Feature */}
      <div className="text-left relative z-10">
        <span 
            className="font-medium flex items-center gap-2"
            style={{ color: "hsl(var(--foreground))" }}
        >
          {item.feature}
          <Sparkles 
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
            style={{ color: "hsl(var(--primary))" }}
          />
        </span>
      </div>

      {/* Other Platforms (The "Bad" or "Partial" side) */}
      <div className="flex justify-center relative z-10">
        {item.existing === false ? (
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "hsl(var(--muted))" }}
          >
            <X className="w-4 h-4" style={{ color: "hsl(var(--muted-foreground))" }} />
          </div>
        ) : (
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ 
                backgroundColor: "hsl(var(--muted))",
                color: "hsl(var(--muted-foreground))"
            }}
          >
            Partial
          </span>
        )}
      </div>

      {/* FORX (The "Good" side) */}
      <div className="flex justify-center relative z-10">
        <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ 
                backgroundColor: "hsl(var(--primary) / 0.2)",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.35)"
            }}
        >
          <Check className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
        </div>
      </div>

      {/* Bottom accent */}
      <div 
        className="absolute bottom-0 left-4 right-4 h-0.5 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
            background: `linear-gradient(to right, transparent, hsl(var(--primary)), transparent)`
        }}
      />
    </motion.div>
  );
};

/* ---------------- SECTION HEADER ---------------- */
export const AnimatedSectionHeader = () => {
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
        Why FORX?
      </span>

      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        style={{ color: "hsl(var(--foreground))" }}
      >
        <span style={{ color: "hsl(var(--primary))" }}>Infrastructure-First</span> vs{" "}
        <span style={{ color: "hsl(var(--destructive))" }}>Listing-First</span>
      </h2>

      <p 
        className="max-w-2xl mx-auto text-lg"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Existing platforms focus on registrations. FORX focuses on execution.
      </p>
    </motion.div>
  );
};

/* ---------------- SUMMARY BOX ---------------- */
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      className="mt-14 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div 
        className="absolute -inset-4 rounded-3xl blur-xl" 
        style={{
            background: `linear-gradient(to right, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))`
        }}
      />

      <div 
        className="relative p-8 rounded-2xl border backdrop-blur-sm"
        style={{
            borderColor: "hsl(var(--primary) / 0.3)",
            backgroundColor: "hsl(var(--primary) / 0.05)"
        }}
      >
        <p 
            className="text-lg font-medium mb-2"
            style={{ color: "hsl(var(--foreground))" }}
        >
          “Hackathons are treated as events to list, not operations to execute.”
        </p>
        <p style={{ color: "hsl(var(--muted-foreground))" }}>
          FORX fills this gap with an infrastructure-first approach.
        </p>
      </div>
    </motion.div>
  );
};

/* ---------------- TABLE HEADER ---------------- */
export const AnimatedTableHeader = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 mb-6 px-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <span 
        className="text-sm uppercase tracking-wider"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Feature
      </span>
      <span 
        className="text-center text-sm uppercase tracking-wider"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Other Platforms
      </span>
      <span 
        className="text-center text-sm uppercase tracking-wider"
        style={{ color: "hsl(var(--primary))" }}
      >
        FORX
      </span>
    </motion.div>
  );
};