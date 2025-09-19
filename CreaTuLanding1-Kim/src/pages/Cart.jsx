// src/containers/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, cartTotal, increaseQty, decreaseQty } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={style}>Tu carrito está vacío</h2>;
  }

  return (
    <section style={style}>
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeItem}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
        />
      ))}

      <h3>Total: ${cartTotal}</h3>
      <div style={{ marginTop: 20 }}>
        <button onClick={clearCart} style={buttons.clear}>
          Vaciar carrito
        </button>
        <Link to="/checkout" style={buttons.checkout}>
          Ir al checkout
        </Link>
      </div>
    </section>
  );
}

const style = {
  padding: "40px",
  textAlign: "center",
  fontSize: "18px"
};

const buttons = {
  clear: {
    padding: "10px 20px",
    marginRight: "10px",
    background: "gray",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  checkout: {
    padding: "10px 20px",
    background: "green",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px"
  }
};
