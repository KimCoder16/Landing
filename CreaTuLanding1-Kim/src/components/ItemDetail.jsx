import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ product, onAdd, onGoToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    onAdd(qty);
    setAdded(true);
  };

  return (
    <article style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={{ marginBottom: 8 }}>{product.name}</h2>
      <p style={{ color: "#444" }}>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <div style={{ marginTop: 16 }}>
          <button onClick={onGoToCart} style={styles.goCartBtn}>Ir al carrito</button>
          <Link to="/" style={styles.continueLink}>Seguir comprando</Link>
        </div>
      )}
    </article>
  );
}

const styles = {
  card: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    background: "#fff"
  },
  image: {
    width: "250px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "15px",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  goCartBtn: {
    padding: "8px 14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },
  continueLink: {
    marginLeft: 12,
    color: "#333",
    textDecoration: "none",
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: 6
  }
};


