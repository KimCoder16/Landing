// src/App.jsx
import "./firebaseConfig"; // 👈 se importa primero para inicializar Firebase y hacer el console.log

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./pages/Cart"; // ⬅️ desde /pages
import { CartProvider } from "./context/CartContext";
import Checkout from "./containers/Checkout";

export default function App() {
  return (
    <CartProvider>
      
        <NavBar />
        <Routes>
          {/* Catálogo completo */}
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a InstalaSoft. Encuentra las mejores herramientas de software aquí." />
            }
          />

          {/* Catálogo filtrado */}
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

          {/* Detalle de producto */}
          <Route path="/producto/:id" element={<ItemDetailContainer />} />

          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Página no encontrada */}
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                404 - Página no encontrada
              </h2>
            }
          />
        </Routes>
      
    </CartProvider>
  );
}


