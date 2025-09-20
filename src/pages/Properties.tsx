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
import { mockProperties, Property } from "@/data/properties";
import CompareButton from "@/components/CompareButton";
import {
  Search,
  MapPin,
  Building2,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
} from "lucide-react";
// import DemoChatbot from "@/components/DemoChatbot";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // 👇 NEW state for Tabs
  const [activeTab, setActiveTab] = useState<
    "commercial" | "residential" | "preleased"
  >("commercial");

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = mockProperties.filter((property) => {
      // 👇 filter by category tab
      const matchesTab = property.category === activeTab;

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
          case "under-5cr":
            matchesPrice = property.price < 5000000;
            break;
          case "5cr-10cr":
            matchesPrice =
              property.price >= 5000000 && property.price < 10000000;
            break;
          case "10cr-20cr":
            matchesPrice =
              property.price >= 10000000 && property.price < 20000000;
            break;
          case "over-20cr":
            matchesPrice = property.price >= 20000000;
            break;
        }
      }

      return (
        matchesTab &&
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesPrice
      );
    });

    // Sorting logic
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
  }, [searchTerm, propertyType, priceRange, location, sortBy, activeTab]);

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "office", label: "Office" },
    { value: "retail", label: "Retail" },
    { value: "industrial", label: "Industrial" },
    { value: "warehouse", label: "Warehouse" },
  ];

  const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "under-5cr", label: "Under 5cr" },
    { value: "5cr-10cr", label: "₹5cr - ₹10cr" },
    { value: "10cr-20cr", label: "₹10cr - ₹20cr" },
    { value: "over-20cr", label: "Over ₹20cr" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest Listed" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "sqft-large", label: "Largest First" },
    { value: "sqft-small", label: "Smallest First" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#ffffff] to-[#f8f7f4] border-b border-[#e5e3de]">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-[#1a1a1a] mb-6 tracking-tight">
              Premium Properties
            </h1>
            <p className="text-xl text-[#6d6d6d] max-w-2xl mx-auto font-serif">
              Discover exclusive real estate opportunities across premier
              locations
            </p>
          </div>

          {/* 👇 Tabs for Commercial / Residential / Pre-Leased */}
          <div className="flex justify-center space-x-2 mb-10">
            {["commercial", "residential", "preleased"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={`capitalize rounded-full px-8 h-11 font-normal border-[#d4d2ca] transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1a1a1a] text-white hover:bg-[#2d2d2d]"
                    : "bg-transparent text-[#6d6d6d] hover:bg-white hover:text-[#1a1a1a] hover:border-[#c0bdb4]"
                }`}
                onClick={() =>
                  setActiveTab(
                    tab as "commercial" | "residential" | "preleased"
                  )
                }
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto">
            {/* Main Search Bar */}
            {/* <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9c988f]" />
                <Input
                  placeholder="Search properties, locations, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 bg-white border-[#e5e3de] rounded-full focus-visible:ring-[#c0bdb4] text-[#1a1a1a] placeholder:text-[#9c988f]"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto w-full h-14 rounded-full border-[#e5e3de] bg-white text-[#6d6d6d] hover:bg-white hover:text-[#1a1a1a] hover:border-[#c0bdb4] font-normal px-6"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div> */}

            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-white rounded-2xl p-8 mb-8 border border-[#e5e3de] shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-[#1a1a1a]">
                    Filters
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="h-9 w-9 p-0 rounded-full bg-[#f8f7f4] hover:bg-[#f0efea]"
                  >
                    <X className="h-4 w-4 text-[#6d6d6d]" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* <div>
                    <label className="block text-sm font-normal text-[#6d6d6d] mb-3">
                      Property Type
                    </label>
                    <Select
                      value={propertyType}
                      onValueChange={setPropertyType}
                    >
                      <SelectTrigger className="h-12 bg-[#f8f7f4] border-[#e5e3de] rounded-lg">
                        <SelectValue className="text-[#1a1a1a]" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#e5e3de] rounded-lg">
                        {propertyTypes.map((type) => (
                          <SelectItem 
                            key={type.value} 
                            value={type.value}
                            className="text-[#1a1a1a] focus:bg-[#f8f7f4]"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div>
                    <label className="block text-sm font-normal text-[#6d6d6d] mb-3">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9c988f]" />
                      <Input
                        placeholder="City or State"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10 h-12 bg-[#f8f7f4] border-[#e5e3de] rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-normal text-[#6d6d6d] mb-3">
                      Price Range
                    </label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger className="h-12 bg-[#f8f7f4] border-[#e5e3de] rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#e5e3de] rounded-lg">
                        {priceRanges.map((range) => (
                          <SelectItem
                            key={range.value}
                            value={range.value}
                            className="text-[#1a1a1a] focus:bg-[#f8f7f4]"
                          >
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-normal text-[#6d6d6d] mb-3">
                      Sort By
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="h-12 bg-[#f8f7f4] border-[#e3e3e3] rounded-lg">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#e5e3de] rounded-lg">
                        {sortOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-[#1a1a1a] focus:bg-[#f8f7f4]"
                          >
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
            {/* <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[#6d6d6d] text-sm">
                  {filteredAndSortedProperties.length} properties found
                </p>
                {(searchTerm ||
                  propertyType !== "all" ||
                  priceRange !== "all" ||
                  location) && (
                  <div className="flex flex-wrap items-center gap-2">
                    {propertyType !== "all" && (
                      <Badge
                        variant="secondary"
                        className="capitalize bg-[#f0efea] text-[#6d6d6d] hover:bg-[#e5e3de] rounded-full px-3 py-1 font-normal border-[#e5e3de]"
                      >
                        {propertyType}
                      </Badge>
                    )}
                    {priceRange !== "all" && (
                      <Badge
                        variant="secondary"
                        className="bg-[#f0efea] text-[#6d6d6d] hover:bg-[#e5e3de] rounded-full px-3 py-1 font-normal border-[#e5e3de]"
                      >
                        {priceRanges.find((r) => r.value === priceRange)?.label}
                      </Badge>
                    )}
                    {location && (
                      <Badge
                        variant="secondary"
                        className="bg-[#f0efea] text-[#6d6d6d] hover:bg-[#e5e3de] rounded-full px-3 py-1 font-normal border-[#e5e3de]"
                      >
                        {location}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#9c988f] hover:text-[#1a1a1a] h-8 px-3"
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

              <div className="flex items-center space-x-1 bg-white p-1 rounded-full border border-[#e5e3de]">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full h-9 w-9 p-0 ${
                    viewMode === "grid"
                      ? "bg-[#1a1a1a] text-white hover:bg-[#2d2d2d]"
                      : "text-[#6d6d6d] hover:text-[#1a1a1a] hover:bg-[#f8f7f4]"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full h-9 w-9 p-0 ${
                    viewMode === "list"
                      ? "bg-[#1a1a1a] text-white hover:bg-[#2d2d2d]"
                      : "text-[#6d6d6d] hover:text-[#1a1a1a] hover:bg-[#f8f7f4]"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div> */}
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
                : "grid-cols-1 max-w-5xl mx-auto"
            }`}
          >
            {filteredAndSortedProperties.map((property, index) => (
              <div
                key={property.id}
                className="rounded-2xl border border-[#e5e3de] bg-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
              >
                <PropertyCard
                  property={property}
                  featured={index === 0 && viewMode === "grid"}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Building2 className="w-16 h-16 text-[#d4d2ca] mx-auto mb-6" />
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-3">
              No properties found
            </h3>
            <p className="text-[#6d6d6d] mb-8 max-w-md mx-auto">
              Try adjusting your search criteria or clearing filters to find
              your perfect property
            </p>
            <Button
              variant="default"
              className="bg-[#1a1a1a] text-white hover:bg-[#2d2d2d] h-11 px-8 rounded-full"
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

      <div className="fixed bottom-20 right-24 z-50">
        <CompareButton />
      </div>
      {/* <DemoChatbot /> */}
    </div>
  );
};

export default Properties;
