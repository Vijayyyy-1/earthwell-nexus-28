import { useState, useEffect } from "react";
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

// A reusable, styled title with a new golden gradient underline
const FooterTitle = ({ children }) => (
  <div className="mb-6">
    <h3
      className="text-lg font-semibold text-black tracking-wider" // Wider letter spacing
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {children}
    </h3>
    {/* Golden gradient divider */}
    <div className="h-[2px] w-12 bg-gradient-to-r from-[#c5a47e] via-[#e6d1b1] to-[#c5a47e] mt-2"></div>
  </div>
);

// A reusable, styled link with a subtle upward hover animation
const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="relative inline-block text-gray-600 transition-all duration-300 
                 hover:text-[#c5a47e] hover:font-medium hover:-translate-y-0.5
                 after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 
                 after:bg-[#c5a47e] after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Effect to show/hide the scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="bg-[#f8f5f2] text-gray-800 mt-16 font-sans">
        {/* MAP BANNER with hover zoom effect */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1197775215105!2d73.90455077423861!3d18.56863796770607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147addaaaab%3A0x21b56fdc67680c34!2sEarthwell%20Realty%20Private%20Limited!5e0!3m2!1sen!2sin!4v1758193107201!5m2!1sen!2sin"
            width="100%"
            height="500px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-72 md:h-96 lg:h-[400px] grayscale contrast-125 opacity-75"
          ></iframe>
          {/* Enhanced gradient overlay for text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5f2] via-[#f8f5f2]/90 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h2
              className="text-black text-2xl md:text-4xl font-bold text-center max-w-3xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Headquartered in Pune, Serving the Nation
            </h2>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="bg-[#f8f5f2]">
          <div className="luxury-container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <img
                  src={earthwellLogo}
                  alt="Earthwell Realty"
                  className="w-14 h-14 object-contain rounded-full border-2 border-[#c5a47e] p-1"
                />
                <h2
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Earthwell Realty
                </h2>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-gray-600">
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
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 
                               transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#c5a47e]/50
                               hover:bg-[#c5a47e] hover:text-white hover:border-[#c5a47e]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
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

            {/* Contact Section */}
            <div>
              <FooterTitle>Contact</FooterTitle>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-[#c5a47e] flex-shrink-0" />
                  <span>
                    Office No. 302, 3rd Floor, Town Square Shopping Center,
                    Airport Rd, Viman Nagar, Pune – 411014
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#c5a47e]" />
                  <span>+91 9823022097</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#c5a47e]" />
                  <span>info@earthwellrealty.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Section with new button style */}
            <div>
              <FooterTitle>Newsletter</FooterTitle>
              <p className="text-sm mb-4 text-gray-600">
                Subscribe for exclusive property listings and market insights.
              </p>
              <form>
                <div className="flex flex-col sm:flex-row shadow-sm rounded-md gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white text-black px-4 py-2.5 border border-gray-300 
                               focus:border-[#c5a47e] focus:ring-1 focus:ring-[#c5a47e] rounded-md sm:rounded-r-none outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#df1414ff", // Tailwind's red-700
                      color: "white",
                    }}
                    className="bg-red-700  font-medium px-5 py-2.5 rounded-md sm:rounded-l-none mt-2 sm:mt-0
                               border border-transparent transition-all duration-300
                               hover:bg-white hover:text-red-700 hover:border-red-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#e9e5e1] py-5 border-t border-gray-300">
          <div className="luxury-container flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 sm:mb-0">
              © {currentYear} Earthwell Realty. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/privacy-policy"
                className="hover:text-[#c5a47e] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/terms"
                className="hover:text-[#c5a47e] transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        title="Back to Top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center 
                    rounded-full bg-white shadow-lg text-gray-800
                    transition-all duration-300 ease-in-out transform
                    hover:bg-[#c5a47e] hover:text-black hover:scale-110
                    ${
                      isScrollButtonVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default Footer;
