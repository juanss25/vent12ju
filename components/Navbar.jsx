import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const logoWidth = 110; // Reducido el tamaño del logo
    const logoHeight = 10; // Reducido el tamaño del logo
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
       <header className="bg-gray-800 text-white sticky top-0 z-10 shadow-sm">
            {/* Parte superior */}
            <div className="w-full px-50 py-2 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo3h.png" // La ruta es relativa a la carpeta 'public'
                        alt="Logo de ThredUp" // Texto alternativo accesible
                        width={logoWidth} 
                        height={logoHeight} 
                        className="cursor-pointer" // Puedes añadir más clases de Tailwind si es necesario
                    />
                </Link>

        {/* Categorías */}
<nav className="hidden md:flex gap-19 text-lg">
                    <Link 
                        href="/" 
                        className="relative px-4 py-2 text-white hover:text-red-600 transition-colors duration-300
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                                   after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                        Inicio
                    </Link>
                    <Link 
                        href="/category/mujer" 
                        className="relative px-4 py-2 text-white hover:text-red-600 transition-colors duration-300
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                                   after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                        Mujer
                    </Link>
                    <Link 
                        href="/category/nina" 
                        className="relative px-4 py-2 text-white hover:text-red-600 transition-colors duration-300
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                                   after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                        Niña
                    </Link>
                    <Link 
                        href="/category/accesorios" 
                        className="relative px-4 py-2 text-white hover:text-red-600 transition-colors duration-300
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                                   after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                        Accesorios
                    </Link>
                    <Link 
                        href="/category/zapatos" 
                        className="relative px-4 py-2 text-white hover:text-red-600 transition-colors duration-300
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                                   after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                        Zapatos
                    </Link>
                </nav>
        {/* Íconos */}
        <div className="flex items-center gap-6">
          {/* Favoritos */}
          <Link href="/favorites" className="relative">
            <Heart className="w-6 h-6 text-white-600 hover:text-green-700" />
          </Link>

          {/* Carrito */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-white-600 hover:text-green-700" />

            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
