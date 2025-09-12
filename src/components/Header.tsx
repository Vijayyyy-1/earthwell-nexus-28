import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/context/CompareContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScheduleVisitModal from "./ScheduleVisitModal";
import {
  Building2,
  Search,
  Calculator,
  Phone,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  FileText,
  TrendingUp,
  MapPin,
  Settings,
  Heart,
  Zap,
} from "lucide-react";
import earthwellLogo from "@/assets/earthwell_logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const location = useLocation();
  const { compareList } = useCompare(); // compareList will store liked/favorited properties

  const navigation = [
    { name: "Properties", href: "/properties", icon: Building2 },
    { name: "Search", href: "/search", icon: Search },
    { name: "ROI Calculator", href: "/calculator", icon: Calculator },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const services = [
    { name: "Compare", icon: Calculator },
    { name: "Advisory", icon: Briefcase },
    { name: "Lease Transaction", icon: FileText },
    { name: "Sales Transaction", icon: TrendingUp },
    { name: "Portfolio Advisory", icon: MapPin },
    { name: "Property Management", icon: Settings },
    { name: "Workplace Planning", icon: Zap },
    { name: "Land Development", icon: Building2 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b border-border shadow-subtle">
        <div className="luxury-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={earthwellLogo}
                  alt="Earthwell Realty - Premier Commercial Real Estate"
                  className="w-full h-full object-contain transition-luxury group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className="text-xl font-semibold text-primary"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Earthwell Realty
                </h1>
                <p className="text-xs text-muted-foreground tracking-widest font-bold">
                  a2z in Properties & Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-luxury font-base ${
                      isActive(item.href)
                        ? "text-primary bg-primary-light border border-primary/10"
                        : "text-black hover:text-primary hover:bg-primary-light/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Services Dropdown */}
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 px-5 py-2.5 text-black hover:text-primary hover:bg-primary-light/50 font-medium"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-60 bg-card border border-border shadow-luxury p-2"
                >
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.name === "Compare" ? "/compare" : "#"} // <-- redirect Compare to /compare
                      >
                        <DropdownMenuItem className="flex items-center space-x-3 px-4 py-3 hover:bg-primary-light cursor-pointer rounded-lg transition-luxury">
                          <ServiceIcon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{service.name}</span>
                        </DropdownMenuItem>
                      </Link>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/favorites" className="relative">
                <Heart className="w-6 h-6 text-primary hover:text-red-500 transition-colors" />
                {compareList.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {compareList.length}
                  </span>
                )}
              </Link>
              <Button
                onClick={() => setShowScheduleModal(true)}
                className="bg-primary hover:bg-primary-muted text-primary-foreground px-8 py-3 font-medium shadow-subtle hover:shadow-card transition-luxury"
              >
                Schedule Visit
              </Button>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-primary-light/50 transition-luxury"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-border mt-4 pt-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-luxury ${
                        isActive(item.href)
                          ? "text-primary bg-primary-light"
                          : "text-muted-foreground hover:text-primary hover:bg-primary-light/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setShowScheduleModal(true);
                    }}
                    className="w-full bg-primary hover:bg-primary-muted text-primary-foreground font-medium shadow-subtle hover:shadow-card transition-luxury"
                  >
                    Schedule Visit
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <ScheduleVisitModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </>
  );
};

export default Header;
