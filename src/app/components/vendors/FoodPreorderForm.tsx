
"use client"
import { useState } from "react";
import {Button} from "@/app/admin-dashboard/components/ui/button"
import { toast } from "@/app/admin-dashboard/hooks/use-toast";

const mealOptions = [
  { id: "veg-thali", label: "🥗 Veg Thali", description: "Dal, Sabzi, Roti, Rice, Salad" },
  { id: "non-veg-thali", label: "🍗 Non-Veg Thali", description: "Chicken Curry, Roti, Rice, Raita" },
  { id: "pizza-combo", label: "🍕 Pizza Combo", description: "2 Slices + Drink" },
  { id: "burger-combo", label: "🍔 Burger Combo", description: "Burger + Fries + Drink" },
  { id: "sandwich-wrap", label: "🌯 Sandwich/Wrap", description: "Grilled Wrap + Juice" },
  { id: "biryani", label: "🍛 Biryani Bowl", description: "Biryani + Raita + Salad" },
];

const timeSlots = ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

const FoodPreorderForm = () => {
  const [selectedMeal, setSelectedMeal] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMeal || !selectedSlot || !name.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "🎉 Order Placed!",
      description: `${mealOptions.find(m => m.id === selectedMeal)?.label} at ${selectedSlot}`,
    });
    setSelectedMeal("");
    setSelectedSlot("");
    setName("");
    setTeamName("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Name fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
        </div>
      </div>

      {/* Meal selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">Choose Your Meal *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mealOptions.map((meal) => (
            <button
              key={meal.id}
              type="button"
              onClick={() => setSelectedMeal(meal.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedMeal === meal.id
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <p className="font-semibold text-foreground">{meal.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{meal.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Time slot */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">Pickup Time *</label>
        <div className="flex flex-wrap gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedSlot(slot)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedSlot === slot
                  ? "bg-primary text-primary-foreground shadow-[var(--hero-shadow)]"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full rounded-full text-base font-bold">
        Place Pre-Order 🍽️
      </Button>
    </form>
  );
};

export default FoodPreorderForm;
