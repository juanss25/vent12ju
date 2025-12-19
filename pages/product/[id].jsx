import { useCart } from "../../context/CartContext";
import { useState } from "react";


export async function getServerSideProps({ params }) {
  const res = await fetch(`https://vent12juv1.vercel.app/api/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
   const [inCart, setInCart] = useState(false);

   const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
     setInCart(true);
    setTimeout(() => setAdded(false), 2000); // se oculta en 2 segundos
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <div className="relative">
        {added && (
            <div className="absolute top-0 left-0 right-0 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
              ✅ Producto agregado al carrito
            </div>
          )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full rounded-lg"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-1">{product.brand}</p>

        <p className="text-2xl font-bold text-green-700 mt-4">
          S/ {product.price}
        </p>

        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p><strong>Talla:</strong> {product.size}</p>
          <p><strong>Estado:</strong> {product.condition}</p>
        </div>

        <p className="mt-6">{product.description}</p>
        
         <button
          onClick={handleAddToCart}
          disabled={inCart} // opcional: deshabilita el botón si ya está en el carrito
          className={`mt-8 px-6 py-3 rounded transition-colors duration-300 
            ${inCart 
              ? "bg-gray-400 text-white cursor-not-allowed" 
              : "bg-green-700 text-white hover:bg-green-800"}`}
        >
          {inCart ? "In your cart" : "Agregar al carrito"}
        </button>
        {/* Toast */}
        
      </div>
    </main>
  );
}

