"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AnimatedBackgroundOrb,
  FloatingComparisonIcons,
  AnimatedComparisonRow,
  AnimatedSectionHeader,
  AnimatedSummaryBox,
  AnimatedTableHeader,
} from "./ui/differentiation-enhancements";

const comparisons = [
  { feature: "Venue Booking & Discovery", existing: false, forx: true },
  { feature: "Sponsor Access & Pitching", existing: false, forx: true },
  { feature: "Verified Vendor Marketplace", existing: false, forx: true },
  { feature: "Guided Organizer Support", existing: false, forx: true },
  { feature: "Native Communication", existing: false, forx: true },
  { feature: "Digital Judging System", existing: "partial", forx: true },
  { feature: "Skill-Based Hiring", existing: false, forx: true },
  { feature: "Fast CSV Listing", existing: false, forx: true },
];

const DifferentiationSection = () => {
  return (
    <section
      id="why-forx"
      className="relative py-16 overflow-hidden"
      // Dynamic Background Color
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <AnimatedBackgroundOrb />
      <FloatingComparisonIcons />

      <div className="relative container mx-auto px-4">
        <AnimatedSectionHeader />

        <div className="max-w-3xl mx-auto">
          <AnimatedTableHeader />

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {comparisons.map((item, index) => (
              <AnimatedComparisonRow
                key={item.feature}
                item={item}
                index={index}
              />
            ))}
          </motion.div>

          <AnimatedSummaryBox />
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;