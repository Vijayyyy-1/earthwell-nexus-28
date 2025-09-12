import { useCompare } from "@/context/CompareContext";
import PropertyCard from "@/components/PropertyCard";

const Favorites = () => {
  const { compareList } = useCompare();

  if (compareList.length === 0) {
    return (
      <div className="container mx-auto py-24 text-center text-muted-foreground">
        <h2 className="text-3xl font-bold mb-4">Your Favorites</h2>
        <p>You haven't liked any properties yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Your Favorite Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {compareList.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
