import { createContext, useContext, useState, ReactNode } from "react";
import { Property } from "@/data/properties";

interface PropertyContextType {
  favorites: Property[];
  addToFavorites: (property: Property) => void;
  removeFromFavorites: (id: string) => void;
  clearFavorites: () => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Property[]>([]);

  const addToFavorites = (property: Property) => {
    if (!favorites.find((p) => p.id === property.id)) {
      setFavorites((prev) => [...prev, property]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavorites = () => setFavorites([]);

  return (
    <PropertyContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context)
    throw new Error("useProperty must be used within PropertyProvider");
  return context;
};
