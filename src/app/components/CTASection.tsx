"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FloatingTrustParticles,
  AnimatedBackgroundGlow,
  AnimatedBadge,
  AnimatedHeading,
  EnhancedPrimaryButton,
  EnhancedSecondaryButton,
  AnimatedTrustSignal,
  AnimatedDescription,
} from "./ui/cta-enhancements";

const CTASection = () => {
  return (
    <section 
        className="relative py-16 overflow-hidden"
        // Dynamic Background
        style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <AnimatedBackgroundGlow />
      <FloatingTrustParticles />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedBadge />
          <AnimatedHeading />
          <AnimatedDescription />

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <EnhancedPrimaryButton />
            <EnhancedSecondaryButton />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedTrustSignal text="No credit card required" />
            <AnimatedTrustSignal text="Free for student organizers" delay={0.1} />
            <AnimatedTrustSignal text="24/7 support" delay={0.2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;