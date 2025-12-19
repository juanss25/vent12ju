import ProductGrid from "../components/ProductGrid";
import { useState } from "react";
import BrandFilter from "../components/BrandFilter";
import { motion } from "framer-motion"; // Importamos framer-motion

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();


  return { props: { products } };
}

export default function Home({ products }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const filteredProducts = selectedBrand
    ? products.filter(
        (p) => p.brand.toLowerCase() === selectedBrand
      )
    : products;

  return (
    <main className="relative">
  {/* Contenedor para el Hero */}
  <div 
    className="relative bg-cover  flex flex-col items-end justify-center text-center px-6 h-[385px]" 
    style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/fondo1.jpg')",
      backgroundPosition: "center 20%"
    }}
  >
    <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-200 tracking-tight">
            QUALITY THAT LASTS A LIFETIME
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 mb-8">
            Discover a collection where superior craftsmanship meets modern aesthetics. 
            Carefully vetted fashion for the discerning eye.
          </p>
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop the Collection
          </motion.button>
        </motion.div>
      </div>

  {/* Resto del contenido */}
  <div className="max-w-7xl mx-auto px-6 py-2 mt-[-80px]">
    <BrandFilter
      selectedBrand={selectedBrand}
      onSelect={setSelectedBrand}
    />
    
    <div className="mt-10"> {/* Espacio entre el filtro y los productos */}
      <ProductGrid products={filteredProducts} />
    </div>
  </div>
</main>
  );
}
