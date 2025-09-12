// components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos"; // <--- import AOS here
import "aos/dist/aos.css"; // <--- also import the styles if not globally

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional: makes it scroll smoothly
    });
    AOS.refresh();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
