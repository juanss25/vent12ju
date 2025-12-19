import Link from "next/link";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";


export default function ProductCard({ product }) {
    const { toggleFavorite, isFavorite } = useFavorites();

  return (
    
    <Link href={`/product/${product.id}`}>
      <div className="relative w-[400px] border rounded-2x1 overflow-hidden shadow-none hover:scale-105 transition-transform ">
        <button
          onClick={(e) => {
            e.preventDefault();   // evita que se dispare el Link
            e.stopPropagation();  // evita que el click se propague al contenedor
            toggleFavorite(product);
          }}
          className="absolute top-3 right-3 z-10"
        >
            <Heart
                className={`w-6 h-6 transition ${
                isFavorite(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
            />
        </button>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-[300px] h-64  object-cover mx-auto"
        />
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="mt-2 font-bold text-green-700">S/ {product.price}</p>
          <p className="text-xs text-gray-500">Talla: {product.size}</p>

        </div>
      </div>
    </Link>
    
  );
}