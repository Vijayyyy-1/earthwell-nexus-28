import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/properties";
import { Link } from "react-router-dom";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Calculator,
  Phone,
  Briefcase
} from "lucide-react";

// Helper array for "Why Choose Us" section for cleaner mapping
const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Commercial Expertise",
    description: "Deep market knowledge exclusively focused on commercial properties.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Investment Analysis",
    description: "Advanced ROI tools and market analysis to maximize your returns.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Dedicated Support",
    description: "Personalized service from our team of seasoned CRE professionals.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Proven Results",
    description: "15+ years of successful transactions and a portfolio of satisfied clients.",
  },
];


const Index = () => {
  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties - Minor enhancements for consistency */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Exclusive Listings
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Explore our premium selection of commercial real estate opportunities.
              </p>
            </div>
            <Link to="/properties">
              <Button variant="luxury" size="lg" className="flex-shrink-0">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Earthwell - **PREMIUM ENHANCEMENT** */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Choose <br /> <span className="text-gradient-secondary">Earthwell Realty</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in achieving commercial real estate success.
              </p>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-6 bg-card/40 rounded-xl border border-border/20 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - **PREMIUM ENHANCEMENT** */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#111] to-[#222] p-12">
            {/* Optional: Subtle background image */}
            {/* <img src="/path/to/subtle-office-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" /> */}
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Column: Text */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Find Your Next Investment?
                </h2>
                <p className="text-lg text-gray-400 mb-10">
                  Let our experts help you discover the ideal opportunity for your business goals. Take the next step today.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="/contact">
                    <Button variant="luxury" size="lg">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="link" className="text-white">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Action Cards */}
              <div className="space-y-6">
                <Link to="/properties" className="block group">
                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-md">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Browse Properties</h4>
                      <p className="text-gray-400 text-sm">View our curated list of exclusive commercial listings.</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 ml-auto transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </Link>
                <Link to="/calculator" className="block group">
                  <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-md">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Calculate ROI</h4>
                      <p className="text-gray-400 text-sm">Use our investment tools to project potential returns.</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 ml-auto transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;