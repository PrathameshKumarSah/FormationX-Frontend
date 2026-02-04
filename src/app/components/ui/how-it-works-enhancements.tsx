"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Code,
  Cpu,
  Server,
  Database,
  Terminal,
  Network,
} from "lucide-react";
import React from "react";

/* ---------------- TIMELINE CONNECTOR ---------------- */
export const AnimatedTimelineConnector = () => {
  return (
    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5"
        // Dynamic Gradient: Transparent -> Primary -> Transparent
        style={{
          background: `linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)`
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Static dots */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{ backgroundColor: "hsl(var(--primary))" }} 
      />
      <div 
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{ backgroundColor: "hsl(var(--primary))" }}
      />
    </div>
  );
};

/* ---------------- FLOATING TECH ICONS (STATIC) ---------------- */
export const FloatingTechIcons = () => {
  const icons = [
    { Icon: Code, x: "10%", y: "20%" },
    { Icon: Cpu, x: "85%", y: "30%" },
    { Icon: Server, x: "15%", y: "70%" },
    { Icon: Database, x: "75%", y: "60%" },
    { Icon: Terminal, x: "25%", y: "85%" },
    { Icon: Network, x: "90%", y: "80%" },
    { Icon: Zap, x: "5%", y: "45%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, x, y }, index) => (
        <div
          key={index}
          className="absolute"
          // Dynamic Color: Primary with 10% opacity
          style={{ 
            left: x, 
            top: y, 
            width: 28, 
            height: 28,
            color: "hsl(var(--primary) / 0.1)" 
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

/* ---------------- STEP CARD ---------------- */
export const AnimatedStepCard = ({
  step,
  index,
  isEven,
}: {
  step: any;
  index: number;
  isEven: boolean;
}) => {
  return (
    <motion.div
      className={`relative flex flex-col lg:flex-row items-center gap-10 mb-20 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* CARD */}
      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <div 
            className="p-6 rounded-2xl backdrop-blur border transition-all duration-300 relative group"
            style={{
                backgroundColor: "hsl(var(--card) / 0.6)",
                borderColor: "hsl(var(--border) / 0.5)"
            }}
        >
          {/* Hover Border Effect using CSS variable for Primary */}
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[hsl(var(--primary)/0.4)] transition-colors duration-300 pointer-events-none" />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{
                background: `linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))`
            }} 
          />

          {/* Step Badge */}
          <div
            className={`absolute -top-3 ${
              isEven ? "-right-3" : "-left-3"
            } px-3 py-1 rounded-full border`}
            style={{
                backgroundColor: "hsl(var(--primary) / 0.1)",
                borderColor: "hsl(var(--primary) / 0.2)"
            }}
          >
            <span 
                className="text-xs font-semibold"
                style={{ color: "hsl(var(--primary))" }}
            >
              Step {step.number}
            </span>
          </div>

          <h3 
            className="text-xl md:text-2xl font-bold mb-3"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {step.title}
          </h3>

          <p 
            className="mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {step.description}
          </p>

          <div
            className={`flex flex-wrap gap-2 ${
              isEven ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {step.features.map((feature: string) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full"
                style={{
                    color: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.1)"
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STEP NUMBER */}
      <div className="relative z-10 shrink-0">
        <div 
            className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center"
            style={{
                background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-hover)))`,
                boxShadow: "0 10px 25px -5px hsl(var(--primary) / 0.4)"
            }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "hsl(var(--background))" }}
          >
            <span 
                className="text-lg font-bold"
                style={{ color: "hsl(var(--foreground))" }}
            >
              {step.number}
            </span>
          </div>
        </div>

        {/* Connector line */}
        <motion.div
          className="hidden lg:block absolute top-1/2 w-20 h-0.5"
          style={{
            left: isEven ? "100%" : "-20px",
            transform: "translateY(-50%)",
            background: `linear-gradient(to right, hsl(var(--primary) / 0.4), transparent)`
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="flex-1 hidden lg:block" />
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
        The Journey
      </span>

      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        style={{ color: "hsl(var(--foreground))" }}
      >
        End-to-End{" "}
        <span style={{ color: "hsl(var(--primary))" }}>
            Hackathon Lifecycle
        </span>
      </h2>

      <p 
        className="max-w-2xl mx-auto text-lg"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        From initial planning to talent outcomes—every step is supported by
        FORX.
      </p>
    </motion.div>
  );
};

/* ---------------- BACKGROUND GLOW (STATIC) ---------------- */
export const AnimatedBackgroundGlow = () => {
  return (
    <>
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-150 h-150 blur-[120px]" 
        style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
      />
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-[100px]" 
        style={{ backgroundColor: "hsl(var(--secondary) / 0.05)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full blur-[100px]" 
        style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}
      />
    </>
  );
};

/* ---------------- CONNECTION DOTS (STATIC) ---------------- */
export const ConnectionDotsAnimation = () => {
  const dots = [
    { x: "20%", y: "25%" },
    { x: "40%", y: "40%" },
    { x: "60%", y: "55%" },
    { x: "80%", y: "70%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{ 
            left: dot.x, 
            top: dot.y,
            backgroundColor: "hsl(var(--primary) / 0.3)" 
          }}
        />
      ))}
    </div>
  );
};