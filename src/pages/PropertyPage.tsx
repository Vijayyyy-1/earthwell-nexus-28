import { useParams } from "react-router-dom";
import { mockProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import {
  MapPin,
  Phone,
  BedDouble,
  Bath,
  Ruler,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Property not found</h2>
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
    description.length > 250
      ? `${description.substring(0, 250)}...`
      : description;

  return (
    <div className="min-h-screen bg-background">
      {/* --- Sticky Nav --- */}
      <div className="sticky top-0 bg-card z-20 shadow-md flex justify-center flex-wrap gap-x-4 py-3 border-b border-border/40">
        <Button variant="ghost" onClick={() => scrollToSection("gallery")}>
          Gallery
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("overview")}>
          Overview
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("details")}>
          Details
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("location")}>
          Location
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* --- Header & Image Gallery --- */}
        <section id="gallery">
          <div className="mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight mb-1">
              {property.title}
            </h1>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">
                {property.location.city}, {property.location.state}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[550px]">
            <div className="col-span-3 lg:col-span-2 row-span-2 rounded-lg overflow-hidden">
              <img
                src={property.images?.[0] || "/placeholder.svg"}
                alt="Main property view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block rounded-lg overflow-hidden">
              <img
                src={property.images?.[1] || "/placeholder.svg"}
                alt="Property view 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block rounded-lg overflow-hidden relative">
              <img
                src={property.images?.[2] || "/placeholder.svg"}
                alt="Property view 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button variant="secondary">
                  📷 View all {property.images?.length} photos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Overview Section --- */}
        <section id="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Property Overview</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p className="text-2xl font-bold text-primary">
                      ₹{property.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <BedDouble className="w-6 h-6 mb-2 text-primary" />
                    <p className="text-lg font-semibold">
                      {property.beds ?? "N/A"} Beds
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="w-6 h-6 mb-2 text-primary" />
                    <p className="text-lg font-semibold">
                      {property.baths ?? "N/A"} Baths
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Ruler className="w-6 h-6 mb-2 text-primary" />
                    <p className="text-lg font-semibold">
                      {property.sqft.toLocaleString("en-IN")} sq ft
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Description Card */}
              <Card>
                <CardHeader>
                  <CardTitle>About this Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {showFullDescription ? description : truncatedDescription}
                  </p>
                  {description.length > 250 && (
                    <Button
                      variant="link"
                      className="p-0 mt-2"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      {showFullDescription ? "Read less" : "Read more"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Agent Card */}
            <div className="space-y-4">
              {agents.map((agent, idx) => (
                <Card key={idx} className="text-center">
                  <CardHeader>
                    <img
                      src={agent.image ?? "/agent-placeholder.jpg"}
                      alt={agent.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20"
                    />
                    <CardTitle>{agent.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Listing Agent
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">
                      <Phone className="w-4 h-4 mr-2" /> Call Agent
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      Request Info
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- Details Section --- */}
        <section id="details">
          <Card>
            <CardHeader>
              <CardTitle>Features & Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Property Information
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex justify-between">
                      <span>Property ID</span>{" "}
                      <strong className="text-foreground">{property.id}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Type</span>{" "}
                      <strong className="text-foreground">
                        {property.type}
                      </strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Status</span>{" "}
                      <strong className="text-foreground">
                        {property.availability}
                      </strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Year Built</span>{" "}
                      <strong className="text-foreground">
                        {property.yearBuilt}
                      </strong>
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Financials
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex justify-between">
                      <span>Cap Rate</span>{" "}
                      <strong className="text-foreground">
                        {property.financials.capRate}%
                      </strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Gross Income</span>{" "}
                      <strong className="text-foreground">
                        ₹
                        {property.financials.grossIncome.toLocaleString(
                          "en-IN"
                        )}
                      </strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Expenses</span>{" "}
                      <strong className="text-foreground">
                        ₹{property.financials.expenses.toLocaleString("en-IN")}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities?.map((amenity, idx) => (
                    <Badge key={idx} variant="secondary" className="py-1 px-3">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">
                  Additional Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-muted-foreground">
                  {property.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* --- Location Section --- */}
        <section id="location">
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <GoogleMapComponent
                lat={property.location.coordinates[1]}
                lng={property.location.coordinates[0]}
                title={property.title}
              />
            </CardContent>
          </Card>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Let's Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                Interested in this property? Fill out the form below.
              </p>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4 max-w-lg mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.d@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="I'd like more information about the financials..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PropertyPage;
