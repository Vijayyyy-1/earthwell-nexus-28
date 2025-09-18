import { useParams } from "react-router-dom";
import { mockProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="text-center py-20 font-serif">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const agents = Array.isArray(property.agent)
    ? property.agent
    : property.agent
    ? [property.agent]
    : [];

  const description = property.description || "No description available.";
  const truncatedDescription =
    description.length > 300
      ? `${description.substring(0, 300)}...`
      : description;

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-slate-800">
      {/* --- Sticky Nav --- */}
      <div className="sticky top-0 bg-[#F8F7F4]/80 backdrop-blur-md z-20 shadow-sm flex justify-center flex-wrap gap-x-2 py-3 border-b border-black/10">
        <Button variant="ghost" onClick={() => scrollToSection("residence")}>
          The Residence
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("specifications")}>
          Specifications
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("location")}>
          Location
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("inquiry")}>
          Private Inquiry
        </Button>
      </div>

      {/* --- Cinematic Hero Section --- */}
      <section className="relative h-[70vh] w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={property.images?.[0] || "/placeholder.svg"}
          alt="Main property view"
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
            {property.title}
          </h1>
          <div className="flex items-center justify-center text-lg mt-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Button
            variant="outline"
            className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black"
            onClick={() => scrollToSection("residence")}
          >
            Explore the Residence
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24 space-y-24">
        {/* --- Overview & Advisor Section --- */}
        <section id="residence">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* At a Glance Card */}
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-4xl font-serif">
                    At a Glance
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                  <div className="flex items-center gap-4">
                    <BedDouble className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-lg font-semibold">
                        {property.beds ?? "N/A"} Bedrooms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bath className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-lg font-semibold">
                        {property.baths ?? "N/A"} Bathrooms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Ruler className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-lg font-semibold">
                        {property.sqft.toLocaleString("en-IN")} sq ft
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description Card */}
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-4xl font-serif">
                    The Residence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {showFullDescription ? description : truncatedDescription}
                  </p>
                  {description.length > 300 && (
                    <Button
                      variant="link"
                      className="p-0 mt-4 text-primary"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      {showFullDescription ? "Show less" : "Continue reading"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Sticky Advisor */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                {agents.map((agent, idx) => (
                  <Card key={idx} className="text-left bg-white shadow-lg">
                    <CardHeader>
                      <img
                        src={agent.image ?? "/agent-placeholder.jpg"}
                        alt={agent.name}
                        className="w-20 h-20 rounded-full mb-4"
                      />
                      <CardTitle className="text-2xl font-serif">
                        {agent.name}
                      </CardTitle>
                      <p className="text-sm text-primary">
                        Private Listing Advisor
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full">
                        Schedule a Private Viewing
                      </Button>
                      <Button variant="secondary" className="w-full">
                        Request Digital Brochure
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Details Section --- */}
        <section id="specifications">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-serif">
                Specifications & Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-8">
                <h3 className="text-2xl font-serif mb-4 border-b pb-2">
                  Interior Appointments
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-slate-600">
                  {property.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-serif mb-4 border-b pb-2">
                  Community Amenities
                </h3>
                <div className="flex flex-wrap gap-3">
                  {property.amenities?.map((amenity, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="py-2 px-4 text-md"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* --- Location Section --- */}
        <section id="location">
           <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-serif">An Unrivaled Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/7] rounded-lg overflow-hidden relative">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/171/231/small/abstract-city-map-with-pins-and-gps-tracking-vector-illustration.jpg"
                  alt="Map placeholder"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* --- Inquiry Section --- */}
        <section id="inquiry">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-serif">
                Private Inquiry
              </CardTitle>
              <p className="text-slate-600 max-w-2xl mx-auto pt-2">
                For further details or to arrange a private viewing, please
                leave your information. Our advisor will be in touch shortly.
              </p>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-6 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Full Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Preferred Contact</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full mt-4">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* --- Lightbox Modal (optional but recommended) --- */}
      {isLightboxOpen && (
         <div 
           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
           onClick={() => setIsLightboxOpen(false)}
         >
           <div className="relative w-full max-w-5xl h-[90vh]" onClick={(e) => e.stopPropagation()}>
             <img 
               src={property.images?.[0] || "/placeholder.svg"} 
               alt="Property full view"
               className="w-full h-full object-contain"
             />
             <Button 
               variant="secondary"
               size="icon"
               className="absolute top-2 right-2 rounded-full"
               onClick={() => setIsLightboxOpen(false)}
             >
               X
             </Button>
           </div>
         </div>
      )}
    </div>
  );
};

export default PropertyPage;