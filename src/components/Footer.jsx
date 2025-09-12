import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import earthwellLogo from "@/assets/earthwell_logo.jpg";

const FooterTitle = ({ children }) => (
  <div className="mb-6">
    <h3
      className="text-lg font-semibold text-white tracking-wide"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {children}
    </h3>
    <div className="h-[2px] w-10 bg-[#c5a47e] mt-2"></div>
  </div>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="relative inline-block text-gray-400 transition-all duration-300 
                 hover:text-[#c5a47e] hover:font-medium
                 after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 
                 after:bg-[#c5a47e] after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-16">
      {/* MAP BANNER */}
      <div className="w-full h-64 md:h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23362.469722851376!2d73.907126!3d18.568633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147addaaaab%3A0x21b56fdc67680c34!2sEarthwell%20Realty%20Private%20Limited!5e1!3m2!1sen!2sin!4v1757656941793!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale invert-[90%] contrast-[0.9]"
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2
            className="text-white text-2xl md:text-4xl font-bold text-center max-w-3xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Headquartered in Pune, Serving the Nation
          </h2>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="bg-[#242424]">
        <div className="luxury-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <img
                src={earthwellLogo}
                alt="Earthwell Realty"
                className="w-14 h-14 object-contain rounded-full border border-[#c5a47e] p-1"
              />
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Earthwell Realty
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Your trusted partner in luxury real estate. We provide bespoke
              services, curate exceptional properties, and build lasting
              relationships based on trust and integrity.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 
                             hover:bg-[#c5a47e] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterTitle>Quick Links</FooterTitle>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/properties">Properties</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Our Services</FooterLink>
              <FooterLink to="/team">Meet The Team</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterTitle>Contact</FooterTitle>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 mt-1 text-[#c5a47e] group-hover:animate-pulse" />
                <span>
                  Office No. 302, 3rd Floor, Town Square Shopping Center, Airport
                  Road, Viman Nagar, Pune – 411014, India
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-[#c5a47e] group-hover:animate-pulse" />
                <span>+91 9823022097</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-[#c5a47e] group-hover:animate-pulse" />
                <span>info@earthwellrealty.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterTitle>Newsletter</FooterTitle>
            <p className="text-sm mb-4 text-gray-400">
              Subscribe for exclusive property listings and market insights.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 text-white px-4 py-2.5 border border-gray-700 
                           focus:border-[#c5a47e] rounded-md sm:rounded-r-none outline-none"
              />
              <button
                type="submit"
                className="bg-[#c5a47e] text-black font-medium px-5 py-2.5 hover:bg-white 
                           transition-colors rounded-md sm:rounded-l-none mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1a1a1a] py-5 border-t border-gray-800">
        <div className="luxury-container flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-2 sm:mb-0">
            &copy; {currentYear} Earthwell Realty. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              to="/privacy-policy"
              className="hover:text-[#c5a47e] transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-[#c5a47e] transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="ml-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 
                         hover:bg-[#c5a47e] text-gray-400 hover:text-black transition-all transform hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
