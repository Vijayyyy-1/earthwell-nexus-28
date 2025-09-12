import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCompare } from "@/context/CompareContext";
import { useState } from "react";
import {
  MapPin,
  Square,
  Calendar,
  Building2,
  Eye,
  Heart,
  Share2,
  Users,
  Check,
} from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(
  //   property.likes ?? Math.floor(Math.random() * 50) + 10
  // );

  const toggleLike = () => {
    if (isLiked) {
      removeFromCompare(property.id);
    } else {
      addToCompare(property);
    }
  };

  // Format INR price (e.g., ₹1,30,00,00,000)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Format square feet with commas (e.g., 65,000)
  const formatSqft = (sqft: number) => {
    return new Intl.NumberFormat("en-IN").format(sqft);
  };

  // --- FOMO Logic ---
  // Using optional chaining and nullish coalescing for robust data handling
  const interestedCount =
    property.interested ?? Math.floor(Math.random() * 30) + 5;
  const likesCount = property.likes ?? Math.floor(Math.random() * 50) + 10;
  const isHotProperty = interestedCount > 400;
  const { compareList, addToCompare, removeFromCompare } = useCompare();
  const isLiked = compareList.some((p) => p.id === property.id);
  const isCompared = compareList.some((p) => p.id === property.id);
  const baseLikes = property.likes ?? Math.floor(Math.random() * 50) + 10;
  const displayedLikes = isLiked ? baseLikes + 1 : baseLikes;

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-luxury border border-border/20 h-[520px] flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
        />

        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={toggleLike}
            className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-smooth"
          >
            <Heart
              className={`w-4 h-4 transition-colors duration-300 ${
                isLiked ? "text-red-500" : "text-muted-foreground"
              }`}
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>

          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-smooth">
            <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            className={`capitalize font-medium ${
              property.availability === "available"
                ? "bg-success/90 text-success-foreground"
                : property.availability === "pending"
                ? "bg-amber-500/90 text-amber-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {property.availability}
          </Badge>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border/20">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price)}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatPrice(Math.round(property.price / property.sqft))}/sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <Badge
            variant="secondary"
            className="capitalize bg-primary/10 text-primary border-primary/20"
          >
            {property.type}
          </Badge>
          <span className="text-xs text-muted-foreground">
            Built {property.yearBuilt}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {property.location.city}, {property.location.state}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1.5 text-secondary" />
            <span className="font-medium">
              {formatSqft(property.sqft)} sq ft
            </span>
          </div>
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-1.5 text-secondary" />
            <span className="font-medium">
              {property.financials.capRate}% Cap Rate
            </span>
          </div>
        </div>

        {/* --- Enhanced FOMO Section --- */}
        <div className="mb-4 pt-3 border-t border-border/50">
          {isHotProperty && (
            <Badge
              variant="destructive"
              className="animate-pulse mb-2.5 text-xs font-bold"
            >
              🔥 In High Demand
            </Badge>
          )}
          <div className="flex items-center space-x-5 text-sm">
            <div className="flex items-center space-x-1.5 text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500/80" />
              <span className="font-semibold text-foreground">
                {displayedLikes}
              </span>
              <span>Likes</span>
            </div>
            <div className="flex items-center space-x-1.5 text-muted-foreground">
              <Users className="w-4 h-4 text-blue-500/80" />
              <span className="font-semibold text-foreground">
                {interestedCount}
              </span>
              <span>watching</span>
            </div>
          </div>
        </div>

        {/* Footer with Price and Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xl font-bold text-foreground">
              {formatPrice(property.price)}
            </p>
            <p className="text-xs text-muted-foreground">Price</p>
          </div>
          <div className="flex space-x-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-primary/20 text-primary hover:bg-primary/5"
            >
              <Link to={`/property/${property.id}`} aria-label="View Details">
                <Eye className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/contact" aria-label="Schedule a Viewing">
                <Calendar className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="sm"
              variant={isCompared ? "secondary" : "outline"}
              className={`flex items-center justify-center border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 ${
                isCompared ? "bg-secondary text-white" : ""
              }`}
              onClick={() =>
                isCompared
                  ? removeFromCompare(property.id)
                  : addToCompare(property)
              }
            >
              {isCompared ? <Check className="w-4 h-4" /> : "Compare"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
