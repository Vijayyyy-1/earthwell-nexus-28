import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Building2,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-commercial-building.jpg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    // Navigate to search results with filters
    console.log("Searching:", { searchTerm, location, priceRange });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Premium</span>{" "}
            <span className="text-gradient-secondary">Commercial</span>{" "}
            <br />
            <span className="text-foreground">Real Estate</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover exceptional office spaces, retail locations, and industrial properties 
            that drive business success.
          </p>

          {/* Search Bar */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-luxury border border-border/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Property Type/Search */}
              <div className="relative">
  <label className="block text-sm font-medium text-muted-foreground mb-2">
    Property Type
  </label>
  <div className="relative">
    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
    <select
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="pl-12 pr-4 h-12 w-full bg-background border border-border rounded-xl text-foreground 
             focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
>
  <option value="">Select Type</option>
  <option value="Rent">Rent</option>
  <option value="Purchase">Purchase</option>
  <option value="Sale">Sale</option>
</select>
    {/* Optional: Add a dropdown arrow */}
    <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
      ▼
    </div>
  </div>
</div>

              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="City, State, Pincode"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-12 h-12 bg-background border-border"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="relative">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Price Range
                </label>
                <div className="relative">
                  {/* <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" /> */}
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground flex items-center justify-center">
    ₹
  </span>
                  <Input
                    placeholder="Any Budget"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="pl-12 h-12 bg-background border-border"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleSearch}
                className="h-12 md:h-14"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2 group-hover:scale-110 transition-luxury">
                500+
              </div>
              <div className="text-muted-foreground font-medium">
                Active Listings
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2 group-hover:scale-110 transition-luxury">
                $2.5B+
              </div>
              <div className="text-muted-foreground font-medium">
                Properties Sold
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2 group-hover:scale-110 transition-luxury">
                15+
              </div>
              <div className="text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2 group-hover:scale-110 transition-luxury">
                98%
              </div>
              <div className="text-muted-foreground font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-secondary rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;