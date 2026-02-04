"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Server,
  Database,
  Terminal,
  Zap,
  Heart, // Imported Heart for a theme-able icon
} from "lucide-react";
import React from "react";

/* ---------------- STATIC TECH ICONS ---------------- */
export const FloatingTechElements = () => {
  const elements = [
    { Icon: Code, x: "5%", y: "20%", size: 16 },
    { Icon: Cpu, x: "90%", y: "30%", size: 20 },
    { Icon: Server, x: "10%", y: "70%", size: 18 },
    { Icon: Database, x: "85%", y: "60%", size: 14 },
    { Icon: Terminal, x: "20%", y: "85%", size: 22 },
    { Icon: Zap, x: "80%", y: "15%", size: 16 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map(({ Icon, x, y, size }, index) => (
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

/* ---------------- BRAND LOGO ---------------- */
export const AnimatedBrandLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg"
        style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))"
        }}
      >
        F
      </div>
      <span 
        className="text-xl font-bold"
        style={{ color: "hsl(var(--primary))" }}
      >
        FORX
      </span>
    </motion.div>
  );
};

/* ---------------- SOCIAL ICON ---------------- */
export const AnimatedSocialLink = ({
  icon: Icon,
  href,
  label,
  index,
}: {
  icon: any;
  href: string;
  label: string;
  index: number;
}) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      // Uses Tailwind arbitrary values to hook into CSS variables for hover states
      className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)]"
      style={{
          backgroundColor: "hsl(var(--muted))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--muted-foreground))"
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

/* ---------------- FOOTER LINK ---------------- */
export const AnimatedFooterLink = ({
  name,
  href,
  index,
}: {
  name: string;
  href: string;
  index: number;
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <a
        href={href}
        className="transition-colors text-sm hover:text-[hsl(var(--primary))]"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {name}
      </a>
    </motion.li>
  );
};

/* ---------------- SECTION TITLE ---------------- */
export const AnimatedSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.h4
      className="font-semibold mb-4"
      style={{ color: "hsl(var(--foreground))" }}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.h4>
  );
};

/* ---------------- BACKGROUND GLOW ---------------- */
export const AnimatedBackgroundGlow = () => {
  return (
    <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
            background: `linear-gradient(to top, hsl(var(--background)), hsl(var(--primary)/0.05), hsl(var(--background)))`
        }}
    />
  );
};

/* ---------------- HEART ---------------- */
export const AnimatedHeart = () => {
  // Replaced emoji with Icon to allow dynamic coloring
  return (
    <span className="mx-1 inline-block align-middle">
      <Heart 
        className="w-4 h-4 fill-current" 
        style={{ color: "hsl(var(--primary))" }} 
      />
    </span>
  );
};

/* ---------------- STATIC PARTICLES ---------------- */
export const FloatingParticles = () => {
  const particles = [
    { x: "10%", y: "20%", size: 2 },
    { x: "30%", y: "40%", size: 1 },
    { x: "50%", y: "70%", size: 3 },
    { x: "70%", y: "30%", size: 2 },
    { x: "85%", y: "60%", size: 1 },
    { x: "20%", y: "80%", size: 2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: "hsl(var(--primary) / 0.1)"
          }}
        />
      ))}
    </div>
  );
};

/* ---------------- BORDER ---------------- */
export const AnimatedBorderGlow = () => {
  return (
    <div 
        className="absolute inset-0 border pointer-events-none" 
        style={{ borderColor: "hsl(var(--border) / 0.5)" }}
    />
  );
};