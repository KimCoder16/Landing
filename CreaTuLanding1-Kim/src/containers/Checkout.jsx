// src/containers/Checkout.jsx
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simular generación de orden
    const fakeId = Math.floor(Math.random() * 100000);
    setOrderId(fakeId);

    // limpiar carrito
    clearCart();
  };

  if (orderId) {
    return (
      <section style={styles.section}>
        <h2>✅ Compra confirmada</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" style={styles.homeBtn}>Volver al inicio</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section style={styles.section}>
        <h2>No tienes productos en el carrito</h2>
        <Link to="/" style={styles.homeBtn}>Volver a la tienda</Link>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.submitBtn}>Confirmar compra</button>
      </form>

      {/* Volver al carrito */}
      <button onClick={() => navigate("/cart")} style={styles.backBtn}>
        ← Volver al carrito
      </button>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
    fontSize: "18px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "300px",
    margin: "20px auto",
  },
  submitBtn: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  backBtn: {
    marginTop: "15px",
    padding: "8px 16px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  homeBtn: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};
