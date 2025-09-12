import { createContext, useContext, useState, ReactNode } from "react";
import { Property } from "@/data/properties";

interface CompareContextType {
  compareList: Property[];
  addToCompare: (property: Property) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void; // ✅ add this
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Property[]>([]);

  const addToCompare = (property: Property) => {
    if (!compareList.find((p) => p.id === property.id)) {
      setCompareList((prev) => [...prev, property]);
    }
  };

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]); // ✅ clears all properties
  };

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within CompareProvider");
  }
  return context;
};
