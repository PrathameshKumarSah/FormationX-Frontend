
"use client"
import FoodVendorSection from "../components/vendors/FoodVendorSection";
import FoodPreorderForm from "../components/vendors/FoodPreorderForm";

const Food = () => {
  return (
    <div className="min-h-screen bg-background">
      <FoodVendorSection />

      {/* Pre-order Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Hackathon Fuel
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            Pre-Order Your <span className="text-primary">Meal</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Select your meal and pickup time so your food is ready when you need a break!
          </p>
        </div>
        <FoodPreorderForm />
      </section>
    </div>
  );
};

export default Food;
