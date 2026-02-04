"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Rocket,
  Users,
  Shield,
  CheckCircle,
  Target,
} from "lucide-react";
import React from "react";

/* ---------------- STATIC TRUST PARTICLES ---------------- */
export const FloatingTrustParticles = () => {
  const particles = [
    { icon: Shield, x: "10%", y: "20%" },
    { icon: CheckCircle, x: "85%", y: "30%" },
    { icon: Users, x: "15%", y: "70%" },
    { icon: Zap, x: "75%", y: "60%" },
    { icon: Target, x: "25%", y: "85%" },
    { icon: Rocket, x: "90%", y: "15%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map(({ icon: Icon, x, y }, index) => (
        <div
          key={index}
          className="absolute"
          // Dynamic Color: Primary with low opacity
          style={{ 
            left: x, 
            top: y, 
            width: 32, 
            height: 32,
            color: "hsl(var(--primary) / 0.1)" 
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

/* ---------------- STATIC BACKGROUND GLOW ---------------- */
export const AnimatedBackgroundGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full blur-[160px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: "hsl(var(--secondary) / 0.05)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}
      />
    </div>
  );
};

/* ---------------- BADGE ---------------- */
export const AnimatedBadge = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 backdrop-blur-sm relative overflow-hidden border"
      style={{
          backgroundColor: "hsl(var(--primary) / 0.1)",
          borderColor: "hsl(var(--primary) / 0.3)"
      }}
      initial={{ scale: 0.9, opacity: 0, y: -20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <Sparkles 
        className="w-4 h-4 relative z-10" 
        style={{ color: "hsl(var(--primary))" }}
      />
      <span 
        className="text-sm font-medium relative z-10"
        style={{ color: "hsl(var(--primary))" }}
      >
        Join the Revolution
      </span>
    </motion.div>
  );
};

/* ---------------- HEADING ---------------- */
export const AnimatedHeading = () => {
  return (
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
      style={{ color: "hsl(var(--foreground))" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Ready to Host Your
      <br />
      <span style={{ color: "hsl(var(--primary))" }}>
        Best Hackathon Ever?
      </span>
    </motion.h2>
  );
};

/* ---------------- PRIMARY BUTTON ---------------- */
export const EnhancedPrimaryButton = () => {
  return (
    <motion.button
      className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden"
      // Using global variables for the gradient background
      style={{
          background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-hover)))`,
          color: "hsl(var(--primary-foreground))"
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">START FOR FREE</span>
      <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
};

/* ---------------- SECONDARY BUTTON ---------------- */
export const EnhancedSecondaryButton = () => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-lg border transition-colors"
      style={{
          borderColor: "hsl(var(--primary) / 0.4)",
          color: "hsl(var(--primary))"
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      whileHover={{ 
          scale: 1.05,
          borderColor: "hsl(var(--primary))"
      }}
      whileTap={{ scale: 0.95 }}
    >
      Schedule Demo
    </motion.button>
  );
};

/* ---------------- TRUST SIGNAL ---------------- */
export const AnimatedTrustSignal = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <span 
        className="w-2 h-2 rounded-full" 
        style={{ backgroundColor: "hsl(var(--primary))" }}
      />
      <span 
        className="text-sm"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {text}
      </span>
    </motion.div>
  );
};

/* ---------------- DESCRIPTION ---------------- */
export const AnimatedDescription = () => {
  return (
    <motion.p
      className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
      style={{ color: "hsl(var(--muted-foreground))" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Join thousands of colleges using FORX to run successful, stress-free
      hackathons. Infrastructure-first. Execution-focused. Trust-driven.
    </motion.p>
  );
};