import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties } from "@/data/properties";
import {
  Search as SearchIcon,
  MapPin,
  Building2,
  SlidersHorizontal,
  Grid3X3,
  List,
  Filter,
} from "lucide-react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = mockProperties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        propertyType === "all" || property.type === propertyType;

      const matchesLocation =
        !location ||
        property.location.city.toLowerCase().includes(location.toLowerCase()) ||
        property.location.state.toLowerCase().includes(location.toLowerCase());

      let matchesPrice = true;
      if (priceRange !== "all") {
        switch (priceRange) {
          case "under-5m":
            matchesPrice = property.price < 5000000;
            break;
          case "5m-10m":
            matchesPrice =
              property.price >= 5000000 && property.price < 10000000;
            break;
          case "10m-20m":
            matchesPrice =
              property.price >= 10000000 && property.price < 20000000;
            break;
          case "over-20m":
            matchesPrice = property.price >= 20000000;
            break;
        }
      }

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    });

    // Sort properties
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "sqft-large":
        filtered.sort((a, b) => b.sqft - a.sqft);
        break;
      case "sqft-small":
        filtered.sort((a, b) => a.sqft - b.sqft);
        break;
      case "newest":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.listingDate).getTime() -
            new Date(a.listingDate).getTime()
        );
        break;
    }

    return filtered;
  }, [searchTerm, propertyType, priceRange, location, sortBy]);

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "office", label: "Office" },
    { value: "retail", label: "Retail" },
    { value: "industrial", label: "Industrial" },
    { value: "warehouse", label: "Warehouse" },
  ];

  const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "under-5m", label: "Under $5M" },
    { value: "5m-10m", label: "$5M - $10M" },
    { value: "10m-20m", label: "$10M - $20M" },
    { value: "over-20m", label: "Over $20M" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest Listed" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "sqft-large", label: "Largest First" },
    { value: "sqft-small", label: "Smallest First" },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <div className="bg-card border-b border-border/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-[#1a1a1a] mb-6 tracking-tight">
              Search Premium Properties
            </h1>
            <p className="text-xl text-[#6d6d6d] max-w-2xl mx-auto font-serif">
              Discover exclusive real estate opportunities across premier
              locations
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto">
            {/* Main Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search properties, locations, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-background border-border shadow-sm"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto w-full h-12"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-card rounded-lg p-6 mb-6 border border-border/20 shadow-card">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Property Type
                    </label>
                    <Select
                      value={propertyType}
                      onValueChange={setPropertyType}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Price Range
                    </label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {priceRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="City or State"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Sort By
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <p className="text-muted-foreground">
                  {filteredAndSortedProperties.length} properties found
                </p>
                {(searchTerm ||
                  propertyType !== "all" ||
                  priceRange !== "all" ||
                  location) && (
                  <div className="flex items-center space-x-2">
                    {propertyType !== "all" && (
                      <Badge variant="secondary" className="capitalize">
                        {propertyType}
                      </Badge>
                    )}
                    {priceRange !== "all" && (
                      <Badge variant="secondary">
                        {priceRanges.find((r) => r.value === priceRange)?.label}
                      </Badge>
                    )}
                    {location && <Badge variant="secondary">{location}</Badge>}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("");
                        setPropertyType("all");
                        setPriceRange("all");
                        setLocation("");
                      }}
                    >
                      Clear all
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredAndSortedProperties.length > 0 ? (
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {filteredAndSortedProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                featured={index === 0 && viewMode === "grid"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No properties found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or clearing filters
            </p>
            <Button
              variant="default"
              onClick={() => {
                setSearchTerm("");
                setPropertyType("all");
                setPriceRange("all");
                setLocation("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
