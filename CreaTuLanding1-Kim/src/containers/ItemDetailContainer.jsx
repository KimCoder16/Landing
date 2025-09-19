// src/containers/ItemDetailContainer.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useContext(CartContext); // 👈 usar addItem del contexto
  const navigate = useNavigate();

  if (!product)
    return (
      <p style={{ padding: 20, textAlign: "center" }}>
        Producto no encontrado
      </p>
    );

  const addToCart = (quantity = 1) => {
    addItem(product, quantity); // 👈 ahora sí agrega con la función del contexto
  };

  const goToCart = () => navigate("/cart");

  return (
    <ItemDetail
      product={product}
      onAdd={addToCart}
      onGoToCart={goToCart}
    />
  );
}
