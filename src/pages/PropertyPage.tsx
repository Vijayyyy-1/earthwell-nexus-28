import { useParams } from "react-router-dom";
import { mockProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleMapComponent from "@/components/GoogleMapComponent";

const PropertyPage = () => {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="flex h-screen items-center justify-center text-slate-600">
        <p>Property not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl shadow-xl">
        <motion.img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            {property.title}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 font-medium">
            ₹ {property.price.toLocaleString()}
          </p>
        </div>
        <div className="absolute top-6 left-6 bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium tracking-widest text-slate-900 shadow-md">
          Earthwell Realty
        </div>
      </section>

      {/* Details Section */}
      <div className="container mx-auto px-6 py-16 space-y-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif mb-6 text-slate-900">
            Property Overview
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {property.description}
          </p>
        </motion.section>

        {/* Amenities */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-serif mb-6 text-slate-900">Amenities</h2>
          <div className="flex flex-wrap gap-3">
            {property.amenities.map((amenity, i) => (
              <Badge
                key={i}
                className="px-4 py-2 text-base bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 text-amber-800 rounded-full shadow-sm"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Agent Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-serif mb-4 text-slate-900">
              Meet Your Agent
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our dedicated property consultant will guide you through every
              detail and ensure you experience a seamless buying journey.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white px-6 py-3 rounded-full hover:scale-105 transition">
                <Phone className="mr-2 w-4 h-4" /> Call Now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-slate-300 hover:bg-slate-50"
              >
                <Mail className="mr-2 w-4 h-4" /> Send Email
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg">
              <motion.img
                src={
                  property.agent?.img ||
                  "https://images.unsplash.com/photo-1603415526960-f7e0328f7d2b?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=200"
                }
                alt={property.agent?.name || "Agent"}
                className="w-full h-full object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              {property.agent?.name || "Your Agent"}
            </h3>
            <p className="text-slate-600 text-sm">
              {property.agent?.phone || "(+91) 98765 43210"}
            </p>
            <p className="text-slate-600 text-sm">
              {property.agent?.email || "agent@earthwell.com"}
            </p>
          </div>
        </motion.section>

        {/* Location Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-serif mb-6 text-slate-900">Location</h2>
          <Card>
            <GoogleMapComponent
              lat={property.location.coordinates[1]}
              lng={property.location.coordinates[0]}
              title={property.title}
            />
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default PropertyPage;
