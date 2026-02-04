"use client";

import React from "react";
import {
  Users,
  Briefcase,
  Award,
  Building,
  Gavel,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedEcosystemGlow,
  FloatingEcosystemIcons,
  AnimatedRoleCard,
  AnimatedRolesHeader,
  EcosystemConnections,
  FloatingRoleIndicators,
} from "./ui/user-roles-enhancements";

const roles = [
  {
    icon: Users,
    title: "Organizers",
    description:
      "Plan, manage, and execute hackathons with comprehensive tools for venue, sponsor, and vendor coordination.",
  },
  {
    icon: Briefcase,
    title: "Participants",
    description:
      "Register for hackathons, build projects, and showcase skills to unlock career opportunities.",
  },
  {
    icon: Building,
    title: "Sponsors",
    description:
      "Discover hackathons, engage with organizers, evaluate talent, and gain brand exposure.",
  },
  {
    icon: Award,
    title: "Recruiters",
    description:
      "Browse skilled participants, review real work and performance, and initiate interview conversations.",
  },
  {
    icon: Gavel,
    title: "Judges",
    description:
      "Evaluate projects digitally with structured scoring criteria and seamless submission review.",
  },
  {
    icon: Package,
    title: "Vendors",
    description:
      "Provide meals, goodies, printing, and logistics services to hackathon organizers.",
  },
];

const UserRolesSection = () => {
  return (
    <section
      id="for-everyone"
      className="relative py-16 overflow-hidden"
      // Dynamic Background Color
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <AnimatedEcosystemGlow />
      <FloatingEcosystemIcons />
      <EcosystemConnections />
      <FloatingRoleIndicators />

      <div className="relative container mx-auto px-4">
        <AnimatedRolesHeader />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <AnimatedRoleCard
              key={role.title}
              icon={role.icon}
              title={role.title}
              description={role.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UserRolesSection;