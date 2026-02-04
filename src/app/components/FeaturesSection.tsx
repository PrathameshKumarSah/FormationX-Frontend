"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  DollarSign,
  FileText,
  Briefcase,
  MessageCircle,
  UtensilsCrossed,
  Award,
  Store,
  HeadphonesIcon,
  Code,
} from "lucide-react";
import {
  AnimatedFeatureGrid,
  FloatingTechElements,
  AnimatedFeatureCard,
  AnimatedFeaturesHeader,
  AnimatedFeatureGlow,
  FeatureConnectionLines,
  FloatingCountBadge,
} from "./ui/features-enhancements";

const capabilities = [
  { icon: MapPin, title: "Venue Discovery & Booking", description: "Find hackathon-ready venues with verified profiles, real-time availability, and digital booking assurance." },
  { icon: DollarSign, title: "Sponsor Discovery Platform", description: "Access sponsor directories, pitch directly to companies, and track interest—all in one place." },
  { icon: FileText, title: "Fast CSV Listing", description: "List your hackathon in minutes with our CSV upload system—no more multi-page forms." },
  { icon: Briefcase, title: "Skill-Based Hiring", description: "Professional feeds and skill profiles let recruiters discover talent through real work, not applications." },
  { icon: MessageCircle, title: "Built-in Chat Rooms", description: "Auto-created channels for announcements, participants, and organizers—zero information loss." },
  { icon: UtensilsCrossed, title: "Meal & Attendance Tracking", description: "Digital attendance and meal distribution tracking eliminates wastage and mismanagement." },
  { icon: Award, title: "Digital Judging System", description: "Structured scoring, automatic aggregation, and instant winner calculation with full transparency." },
  { icon: Store, title: "Verified Vendor Marketplace", description: "Trusted network of meal providers, goodies vendors, and logistics partners at competitive prices." },
  { icon: HeadphonesIcon, title: "Organizer Enablement", description: "Step-by-step playbooks, milestone guidance, and live support for first-time organizers." },
  { icon: Code, title: "Project Deployment", description: "Platform-based code submission, storage, and standardized evaluation for all projects." },
];

const FeaturesSection = () => {
  return (
    <section 
        id="features" 
        className="relative py-16 overflow-hidden"
        // Dynamic Background
        style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <AnimatedFeatureGrid />
      <AnimatedFeatureGlow />
      <FloatingTechElements />
      <FeatureConnectionLines />
      <FloatingCountBadge />

      <div className="relative container mx-auto px-4">
        <AnimatedFeaturesHeader />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {capabilities.map((cap, index) => (
            <AnimatedFeatureCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;