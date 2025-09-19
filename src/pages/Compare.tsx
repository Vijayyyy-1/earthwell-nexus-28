import { useCompare } from "@/context/CompareContext";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";
import {
  MapPin,
  Square,
  Percent,
  X,
  Phone,
  User,
  Bed,
  Bath,
  CalendarDays,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DemoChatbot from "@/components/DemoChatbot";

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
      <div className="flex flex-wrap justify-center gap-8 pb-6">
        {compareList.map((property: Property) => (
          <div
            key={property.id}
            className="flex flex-col bg-card rounded-3xl shadow-2xl border border-border/30 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-3xl w-[26rem]"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={
                  property.images[0] ||
                  "https://via.placeholder.com/400x300?text=Property+Image"
                }
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Remove button */}
              <Button
                size="icon"
                variant="destructive"
                className="absolute top-3 right-3 rounded-full h-9 w-9 shadow-md"
                onClick={() => removeFromCompare(property.id)}
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Remove {property.title}</span>
              </Button>

              {/* Property badges */}
              <div className="absolute bottom-3 left-3 flex gap-2">
                {property.type && (
                  <Badge className="bg-primary/90 text-white shadow-md capitalize">
                    {property.type}
                  </Badge>
                )}
                {property.availability && (
                  <Badge variant="secondary" className="shadow-md capitalize">
                    {property.availability}
                  </Badge>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
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
                {/* Original commented parts */}
                {/*
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.beds || 0} Beds
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.baths || 0} Baths
                </div>
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-2 text-muted-foreground" />
                  Built {property.yearBuilt}
                </div>
                */}
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-2 text-muted-foreground" />
                  {property.sqft.toLocaleString("en-IN")} sq ft
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
                    MIN ROI:{" "}
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
                    Description:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-2 py-1"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Agent Info */}
              {property.agent && (
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-3">
                  <img
                    src={property.agent.img ?? "/agent-placeholder.jpg"}
                    alt={property.agent.name}
                    className="w-12 h-12 rounded-full object-cover border border-border/30"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground flex items-center gap-1">
                      <User className="w-4 h-4 text-muted-foreground" />
                      {property.agent.name}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Phone className="w-4 h-4" /> {property.agent.phone}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <DemoChatbot compareList={compareList} />
    </div>
  );
};

export default Compare;
