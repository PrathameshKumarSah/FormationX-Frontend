
"use client"

import { useState } from "react";

const categories = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "mexican", label: "Mexican", emoji: "🌮" },
  { id: "italian", label: "Italian", emoji: "🍕" },
  { id: "japanese", label: "Japanese", emoji: "🍣" },
  { id: "american", label: "American", emoji: "🍔" },
  { id: "thai", label: "Thai", emoji: "🍜" },
  { id: "indian", label: "Indian", emoji: "🍛" },
];

interface CuisineFilterProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

const CuisineFilter = ({ activeFilter, onFilterChange }: CuisineFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onFilterChange(cat.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
            activeFilter === cat.id
              ? "bg-primary text-primary-foreground shadow-[var(--hero-shadow)]"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          <span className="text-base">{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CuisineFilter;
