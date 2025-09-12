import { useCompare } from "@/context/CompareContext";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";
import {
  MapPin,
  Square,
  Bed,
  Bath,
  CalendarDays,
  Percent,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Compare = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-center text-muted-foreground py-20 text-lg">
          You haven't added any properties for comparison yet.
        </p>
        <Button
          variant="default"
          onClick={() => (window.location.href = "/properties")}
        >
          Browse Properties
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-foreground">
          Compare Properties
        </h1>
        <Button
          variant="destructive"
          size="sm"
          onClick={clearCompare}
          className="flex items-center gap-1"
        >
          <X className="w-4 h-4" /> Clear All
        </Button>
      </div>

      {/* Compare Cards */}
      <div className="flex flex-wrap justify-center gap-6 pb-6">
        {compareList.map((property: Property) => (
          <div
            key={property.id}
            className="flex flex-col bg-card rounded-xl shadow-lg border border-border/20 overflow-hidden transition-all hover:shadow-xl w-80"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="destructive"
                className="absolute top-3 right-3 rounded-full h-8 w-8"
                onClick={() => removeFromCompare(property.id)}
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Remove {property.title}</span>
              </Button>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold line-clamp-2 text-foreground mb-1">
                {property.title}
              </h3>

              <div className="flex items-center text-muted-foreground text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1.5" />
                {property.location.city}, {property.location.state}
              </div>

              <div className="text-2xl font-extrabold text-primary mb-4">
                ₹{property.price.toLocaleString("en-IN")}
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.beds || 0} Beds
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.baths || 0} Baths
                </div>
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.sqft.toLocaleString("en-IN")} sq ft
                </div>
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-2 text-muted-foreground" />
                  Built {property.yearBuilt}
                </div>
              </div>

              {/* Financials */}
              <div className="flex-grow">
                <p className="font-semibold text-foreground mb-2">
                  Financials & Details:
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Percent className="w-4 h-4 mr-2 text-muted-foreground" />
                    Cap Rate:{" "}
                    <span className="font-medium text-foreground ml-1">
                      {property.financials.capRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="font-semibold text-foreground mb-2">
                    Amenities:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
