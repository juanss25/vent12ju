import "@/styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { FavoritesProvider } from "../context/FavoritesContext";

export default function App({ Component, pageProps }) {
 return (
    <CartProvider>
      <Navbar />
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
      <Footer />
    </CartProvider>
    
  );
}
