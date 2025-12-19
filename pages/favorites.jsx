import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <>
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold mb-6">
          Prendas guardadas
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">
            Aún no has guardado prendas ❤️
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
