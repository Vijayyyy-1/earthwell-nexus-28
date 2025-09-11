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
  MapPin,
  Phone
} from "lucide-react";

const Index = () => {
  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our premium selection of commercial real estate opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button variant="luxury" size="lg">
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Earthwell */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-secondary">Earthwell Realty</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in commercial real estate success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Commercial Expertise
              </h3>
              <p className="text-muted-foreground">
                Exclusively focused on commercial properties with deep market knowledge
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                <TrendingUp className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Investment Analysis
              </h3>
              <p className="text-muted-foreground">
                Advanced ROI calculators and market analysis to maximize your returns
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Dedicated Support
              </h3>
              <p className="text-muted-foreground">
                Personalized service from experienced commercial real estate professionals
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-luxury">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                15+ years of successful commercial transactions and satisfied clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Find Your Perfect Commercial Property?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let our experts help you discover the ideal investment opportunity for your business goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/properties">
                <Button variant="luxury" size="lg" className="w-full h-16">
                  <Building2 className="w-5 h-5 mr-3" />
                  Browse Properties
                </Button>
              </Link>

              <Link to="/calculator">
                <Button variant="secondary" size="lg" className="w-full h-16">
                  <Calculator className="w-5 h-5 mr-3" />
                  Calculate ROI
                </Button>
              </Link>

              <Button variant="hero" size="lg" className="w-full h-16">
                <Phone className="w-5 h-5 mr-3" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
