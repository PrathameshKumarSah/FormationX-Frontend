
"use client"
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";

interface VendorCardProps {
  image: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  distance: string;
  featured?: boolean;
}

const VendorCard = ({
  image,
  name,
  cuisine,
  rating,
  reviewCount,
  deliveryTime,
  distance,
  featured,
}: VendorCardProps) => {
  return (
    <div className="group vendor-card-hover rounded-xl overflow-hidden bg-card shadow-[var(--card-shadow)] cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-body font-bold text-lg text-card-foreground">{name}</h3>
          <div className="flex items-center gap-1 bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-md">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {distance}
          </span>
          <span className="text-muted-foreground/60">({reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
