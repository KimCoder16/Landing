// src/containers/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={style.section}>Tu carrito está vacío</h2>;
  }

  // calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section style={style.section}>
      <h2>Carrito de compras</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      {/* Botón para ir a Checkout */}
      <Link to="/checkout" style={style.checkoutBtn}>
        Finalizar compra
      </Link>
    </section>
  );
}

const style = {
  section: {
    padding: "40px",
    textAlign: "center",
    fontSize: "20px",
  },
  checkoutBtn: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "green",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

