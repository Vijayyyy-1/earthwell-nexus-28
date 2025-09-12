import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import Search from "./pages/Search";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Compare from "./pages/Compare";
import { CompareProvider } from "@/context/CompareContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run animation only once
      offset: 100, // how far before element is visible
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CompareProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground">
              <Header />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/search" element={<Search />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/compare" element={<Compare />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </CompareProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
