"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  Code,
  Terminal,
  Cloud,
  Database,
  Server,
  CpuIcon,
} from "lucide-react";
import React from "react";

/* ---------------- FLOATING ICONS ---------------- */
export const FloatingHackathonIcons = () => {
  const icons = [
    { Icon: Code, size: 20, x: "10%", y: "20%" },
    { Icon: Terminal, size: 24, x: "85%", y: "30%" },
    { Icon: Cpu, size: 22, x: "15%", y: "70%" },
    { Icon: Cloud, size: 26, x: "80%", y: "60%" },
    { Icon: Database, size: 18, x: "25%", y: "85%" },
    { Icon: Server, size: 28, x: "75%", y: "15%" },
    { Icon: Zap, size: 20, x: "90%", y: "80%" },
    { Icon: CpuIcon, size: 22, x: "5%", y: "45%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, size, x, y }, index) => (
        <motion.div
          key={index}
          // Changed text-cyan-400/20 to primary color with low opacity
          className="absolute"
          style={{ 
            left: x, 
            top: y, 
            width: size, 
            height: size,
            color: "hsl(var(--primary) / 0.2)" 
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

/* ---------------- BACKGROUND GRID ---------------- */
export const AnimatedBackgroundGrid = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        // Using var(--border) for the grid lines so it matches your theme's subtle lines
        backgroundImage: `
          linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
};

/* ---------------- FLOATING CODE LINES ---------------- */
export const FloatingCodeLines = () => {
  const lines = [
    { width: "100px", left: "10%" },
    { width: "150px", left: "30%" },
    { width: "80px", left: "50%" },
    { width: "120px", left: "70%" },
    { width: "90px", left: "85%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute h-px"
          // Replaced hardcoded cyan gradient with var(--primary)
          style={{
            width: line.width,
            left: line.left,
            top: `${20 + index * 15}%`,
            background: `linear-gradient(90deg, hsl(var(--primary) / 0.3), transparent)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
        />
      ))}
    </div>
  );
};

/* ---------------- GLOWING ORB ---------------- */
export const AnimatedGlowingOrb = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div 
      className={`absolute rounded-full blur-3xl ${className}`}
      // Ensure the glow uses the primary color variable
      style={{ backgroundColor: "hsl(var(--primary) / 0.15)" }}
    />
  );
};

/* ---------------- BADGE ---------------- */
export const AnimatedBadge = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      // Changed bg-gray-800 to bg-[var(--secondary)] and border to var(--border)
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border"
      style={{
        backgroundColor: "hsl(var(--secondary) / 0.5)",
        borderColor: "hsl(var(--border))",
        color: "hsl(var(--foreground))"
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------- STATS ---------------- */
export const AnimatedStatItem = ({
  icon: Icon,
  value,
  label,
  delay,
}: {
  icon: any;
  value: string;
  label: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay || 0, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2">
        {/* Changed text-cyan-500 to text-[var(--primary)] */}
        <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
        <span 
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "hsl(var(--primary))" }}
        >
          {value}
        </span>
      </div>
      {/* Changed text-gray-400 to var(--muted-foreground) */}
      <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
        {label}
      </span>
    </motion.div>
  );
};

/* ---------------- BUTTON ---------------- */
export const EnhancedButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) => {
  if (variant === "primary") {
    return (
      <motion.button
        // Using your custom CSS class .btn-primary defined in global css
        className={`group relative inline-flex items-center justify-center btn-primary ${className}`}
        // The background color is handled by the .btn-primary class in your CSS, 
        // but we can enforce it here if needed for framer-motion overrides
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  // Secondary Variant
  return (
    <motion.button
      className={`relative group ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      <div 
        className="relative px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-sm border rounded-lg"
        // Dynamic colors using global variables
        style={{
            backgroundColor: "hsl(var(--card) / 0.9)",
            borderColor: "hsl(var(--border))"
        }}
      >
        <span 
            className="text-base sm:text-lg font-semibold tracking-wide"
            style={{ color: "hsl(var(--foreground))" }}
        >
          {children}
        </span>
      </div>
    </motion.button>
  );
};