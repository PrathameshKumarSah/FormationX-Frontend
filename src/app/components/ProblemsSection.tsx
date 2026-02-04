"use client";

import React from "react";
import {
  MapPinOff, // Better icon for Venue
  Banknote,    // Better icon for Sponsors
  ClipboardList,
  TimerOff,
  MessagesSquare,
  Compass,
  UtensilsCrossed,
} from "lucide-react";

import {
  TechParticles,
  BackgroundGrid,
  AnimatedProblemCard,
  AnimatedSectionHeader,
  AnimatedSummaryBox,
} from "./ui/problem-enhancements";

// Updated Icons and Copy for maximum impact
const problems = [
  {
    icon: MapPinOff,
    title: "Venue Instability",
    description: "Last-minute cancellations and facility failures that leave organizers scrambling and damage event reputation.",
  },
  {
    icon: Banknote,
    title: "Sponsorship Dead Ends",
    description: "Organizers lack verified channels to pitch global sponsors, often leaving great events underfunded.",
  },
  {
    icon: ClipboardList,
    title: "Manual Logistics",
    description: "Attendance, food tracking, and check-ins managed on spreadsheets and paper, causing massive bottlenecks.",
  },
  {
    icon: TimerOff,
    title: "Launch Delays",
    description: "Complex, non-standardized listing processes cause organizers to miss critical promotion windows.",
  },
  {
    icon: MessagesSquare,
    title: "Communication Silos",
    description: "Critical updates get lost across Discord, WhatsApp, and Email, leading to participant confusion.",
  },
  {
    icon: Compass,
    title: "Zero Guidance",
    description: "First-time organizers are forced to reinvent the wheel without playbooks or mentorship.",
  },
  {
    icon: UtensilsCrossed,
    title: "Vendor Roulette",
    description: "No access to a verified network of hackathon-ready food and swag providers creates quality risks.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      
      {/* --- Ambient Layers --- */}
      <BackgroundGrid />
      <TechParticles />
      
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />

      <div className="container relative mx-auto px-4 md:px-6 z-20">
        
        {/* --- Header --- */}
        <AnimatedSectionHeader />

        {/* --- Bento-Style Grid --- */}
        {/* Using CSS Grid for a 3-column layout that feels solid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Map through first 6 items */}
          {problems.slice(0, 6).map((problem, index) => (
            <AnimatedProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}

          {/* The 7th item (Vendor) - Spanning full width on mobile, or centered on large screens if desired. 
              Here, I'm making it look distinct or part of the grid flow. 
              Let's center the last one to make it 3-3-1 symmetry or just standard grid.
              Standard grid is cleaner. */}
           <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
             <AnimatedProblemCard
              icon={problems[6].icon}
              title={problems[6].title}
              description={problems[6].description}
              index={6}
            />
           </div>
        </div>

        {/* --- Summary / Conclusion --- */}
        <AnimatedSummaryBox />

      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default ProblemsSection;