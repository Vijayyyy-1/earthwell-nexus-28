import { useProperty } from "@/context/PropertyContext";
import PropertyCard from "@/components/PropertyCard";

const Favorites = () => {
  const { favorites } = useProperty();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto py-24 text-center text-muted-foreground">
        <h2 className="text-3xl font-bold mb-4">Your Favorites</h2>
        <p>You haven't liked any properties yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Your Favorite Properties
      </h2>

      {/* Flexbox container that centers cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {favorites.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
