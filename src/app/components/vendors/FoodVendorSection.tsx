
"use client"
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import VendorCard from "./VendorCard";
import CuisineFilter from "./CuisineFilter";


const vendors = [
  {
    id: 1,
    image: "/vendors/vendor-tacos.jpg",
    name: "Casa del Taco",
    cuisine: "Mexican • Tacos • Burritos",
    category: "mexican",
    rating: 4.8,
    reviewCount: 324,
    deliveryTime: "20-30 min",
    distance: "1.2 km",
    featured: true,
  },
  {
    id: 2,
   image: "/vendors/vendor-pizza.jpg",
    name: "Napoli's Fire",
    cuisine: "Italian • Wood-Fired Pizza",
    category: "italian",
    rating: 4.9,
    reviewCount: 512,
    deliveryTime: "25-35 min",
    distance: "2.1 km",
    featured: true,
  },
  {
    id: 3,
  image: "/vendors/vendor-sushi.jpg",
    name: "Sakura Sushi Bar",
    cuisine: "Japanese • Sushi • Sashimi",
    category: "japanese",
    rating: 4.7,
    reviewCount: 287,
    deliveryTime: "30-40 min",
    distance: "3.0 km",
    featured: false,
  },
  {
    id: 4,
    image: "/vendors/vendor-burger.jpg",
    name: "Smash & Stack",
    cuisine: "American • Burgers • Fries",
    category: "american",
    rating: 4.6,
    reviewCount: 198,
    deliveryTime: "15-25 min",
    distance: "0.8 km",
    featured: false,
  },
  {
    id: 5,
    image: "/vendors/vendor-thai.jpg",
    name: "Bangkok Bites",
    cuisine: "Thai • Curry • Noodles",
    category: "thai",
    rating: 4.5,
    reviewCount: 156,
    deliveryTime: "25-35 min",
    distance: "1.5 km",
    featured: false,
  },
  {
    id: 6,
   image: "/vendors/vendor-indian.jpg",
    name: "Spice Route",
    cuisine: "Indian • Biryani • Curry",
    category: "indian",
    rating: 4.8,
    reviewCount: 421,
    deliveryTime: "30-40 min",
    distance: "2.4 km",
    featured: true,
  },
];

const FoodVendorSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = useMemo(() => {
    return vendors.filter((v) => {
      const matchesCategory = activeFilter === "all" || v.category === activeFilter;
      const matchesSearch =
        !searchQuery ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          Local Favorites
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
          Food <span className="text-primary">Vendors</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Discover the best local food vendors near you, from street tacos to artisan pizza.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search vendors or cuisines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
        />
      </div>

      {/* Filters */}
      <div className="mb-10 flex justify-center">
        <CuisineFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Grid */}
      {filteredVendors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl mb-2">😔</p>
          <p className="text-muted-foreground">No vendors found. Try a different filter!</p>
        </div>
      )}
    </section>
  );
};

export default FoodVendorSection;
