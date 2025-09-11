import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Square, 
  DollarSign, 
  Calendar,
  Building2,
  Eye,
  Heart,
  Share2
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Property } from "@/data/properties";
import officeBuilding1 from "@/assets/office-building-1.jpg";
import heroBuilding from "@/assets/hero-commercial-building.jpg";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSqft = (sqft: number) => {
    return new Intl.NumberFormat('en-US').format(sqft);
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-luxury border border-border/20 h-[500px] flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-smooth">
            <Heart className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </button>
          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-smooth">
            <Share2 className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-success/90 text-success-foreground font-medium">
            Available
          </Badge>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border/20">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price)}
            </div>
            <div className="text-sm text-muted-foreground">
              ${Math.round(property.price / property.sqft)}/sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="capitalize bg-primary/10 text-primary border-primary/20">
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

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm flex-grow">
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1 text-secondary" />
            <span className="font-medium">
              {formatSqft(property.sqft)} sq ft
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1 text-secondary" />
            <span className="font-medium">
              {property.financials.capRate}% Cap
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          <div>
            <p className="text-xl font-bold text-foreground">
              ${(property.price / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs text-muted-foreground">
              ${Math.round(property.price / property.sqft)}/sq ft
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calendar className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;