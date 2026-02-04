"use client";

import React from "react";
// Removed unused motion import
import {
  AnimatedTimelineConnector,
  FloatingTechIcons,
  AnimatedStepCard,
  AnimatedSectionHeader,
  AnimatedBackgroundGlow,
  ConnectionDotsAnimation,
} from "./ui/how-it-works-enhancements";

const steps = [
  {
    number: "01",
    title: "Plan & Setup",
    description:
      "Define your hackathon intent with guided planning tools and templates.",
    features: ["Structured planning", "Timeline templates", "Checklist guidance"],
  },
  {
    number: "02",
    title: "Book & Secure",
    description:
      "Discover and book verified venues, connect with sponsors, and engage vendors.",
    features: ["Venue discovery", "Sponsor pitching", "Vendor marketplace"],
  },
  {
    number: "03",
    title: "List & Promote",
    description:
      "Launch your hackathon listing in minutes and reach thousands of participants.",
    features: ["CSV fast listing", "Built-in promotion", "Participant discovery"],
  },
  {
    number: "04",
    title: "Execute & Manage",
    description:
      "Run your event seamlessly with real-time communication and operations tools.",
    features: ["Native chat rooms", "Meal tracking", "Attendance management"],
  },
  {
    number: "05",
    title: "Judge & Announce",
    description:
      "Digital judging system with structured scoring and instant winner calculation.",
    features: ["Digital scoring", "Auto aggregation", "Transparent results"],
  },
  {
    number: "06",
    title: "Connect & Hire",
    description:
      "Participants showcase skills, recruiters discover talent through real work.",
    features: ["Skill profiles", "Project visibility", "Interview requests"],
  },
];

const HowItWorksSection = () => {
  return (
    <section 
        className="relative py-16 overflow-hidden"
        style={{ backgroundColor: "hsl(var(--background))" }}
    >
      {/* Dynamic Background Gradient: Background -> Card */}
      <div 
        className="absolute inset-0" 
        style={{
            background: `linear-gradient(to bottom, hsl(var(--background)), hsl(var(--background)), hsl(var(--card)))`
        }}
      />

      <AnimatedBackgroundGlow />
      <FloatingTechIcons />
      <ConnectionDotsAnimation />

      <div className="relative container mx-auto px-4">
        <AnimatedSectionHeader />

        <div className="relative max-w-5xl mx-auto">
          <AnimatedTimelineConnector />

          <div className="relative">
            {steps.map((step, index) => (
              <AnimatedStepCard
                key={step.number}
                step={step}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Static border separator (Transparent for now, but ready for theme var) */}
      <div className="absolute inset-0 border border-transparent pointer-events-none" />
    </section>
  );
};

export default HowItWorksSection;