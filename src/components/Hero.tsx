import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// ENHANCEMENT: Import Tabs and Select components from your UI library
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Building2, ArrowRight } from "lucide-react";

// ENHANCEMENT: Import your video file
import heroVideo from "@/assets/hero.mp4"; 
// ENHANCEMENT (Optional): Add a library for number animations
import CountUp from "react-countup";

const AnimatedStat = ({ end, prefix = "", suffix = "" }) => (
  <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2">
    <CountUp 
      start={0} 
      end={end} 
      duration={2.75} 
      separator=","
      prefix={prefix}
      suffix={suffix}
    />
  </div>
);


const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    // Navigate to search results with filters
    console.log("Searching:", { location, propertyType });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* ENHANCEMENT: Video Background with a stronger overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Find Your Next
            <br />
            <span className="text-gradient-secondary">Commercial Property</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover exceptional office spaces, retail locations, and industrial properties that drive business success.
          </p>

          {/* ENHANCEMENT: Tab-based Search Bar */}
          <Tabs defaultValue="purchase" className="w-full max-w-4xl mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-3 bg-card/20 backdrop-blur-sm border border-border/20">
              <TabsTrigger value="purchase">Purchase</TabsTrigger>
              <TabsTrigger value="rent" className="data-[state=inactive]:text-black">Rent</TabsTrigger>
              <TabsTrigger value="sale" className="data-[state=inactive]:text-black">Sale</TabsTrigger>
            </TabsList>
            <TabsContent value="purchase">
              <SearchForm onSearch={handleSearch} />
            </TabsContent>
            <TabsContent value="rent">
              <SearchForm onSearch={handleSearch} />
            </TabsContent>
            <TabsContent value="sale">
              <SearchForm onSearch={handleSearch} />
            </TabsContent>
          </Tabs>


          {/* ENHANCEMENT: Stats with Number Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div>
              <AnimatedStat end={500} suffix="+" />
              <div className="text-gray-300 font-medium">Active Listings</div>
            </div>
            <div>
              <AnimatedStat end={2.5} prefix="₹" suffix="B+" />
              <div className="text-gray-300 font-medium">Properties Sold</div>
            </div>
            <div>
              <AnimatedStat end={15} suffix="+" />
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div>
              <AnimatedStat end={98} suffix="%" />
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white/80 rotate-90" />
        </div>
      </div>
    </section>
  );
};

// ENHANCEMENT: Extracted search form into its own component for clarity
const SearchForm = ({ onSearch }) => {
  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-b-2xl p-6 shadow-luxury border border-border/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="City, State, or Pincode..."
              className="pl-12 h-14 bg-background border-border text-lg"
            />
          </div>
        </div>
        <div className="md:col-span-5">
           <Select>
              <SelectTrigger className="h-14 bg-background border-border text-lg text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5" />
                  <SelectValue placeholder="Select Property Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office">Office Space</SelectItem>
                <SelectItem value="retail">Retail Location</SelectItem>
                <SelectItem value="industrial">Industrial Property</SelectItem>
                <SelectItem value="warehouse">Warehouse</SelectItem>
                <SelectItem value="land">Commercial Land</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <div className="md:col-span-3">
          <Button variant="hero" size="xl" onClick={onSearch} className="w-full h-14 text-lg">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Hero;