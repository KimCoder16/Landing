// src/components/ItemCount.jsx
import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => Math.min(c + 1, stock));
  const decrement = () => setCount(c => Math.max(c - 1, 1));

  return (
    <div style={styles.container}>
      <div style={styles.counterRow}>
        <button onClick={decrement} style={styles.btn}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={increment} style={styles.btn}>+</button>
      </div>

      <button
        onClick={() => onAdd(count)}
        style={styles.addButton}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  container: { marginTop: 12, display: "flex", flexDirection: "column", alignItems: "center" },
  counterRow: { display: "flex", alignItems: "center", gap: 10 },
  btn: {
    padding: "6px 12px",
    border: "1px solid #ccc",
    background: "#f5f5f5",
    cursor: "pointer",
    borderRadius: 6
  },
  count: { minWidth: 24, textAlign: "center", fontSize: 18 },
  addButton: {
    marginTop: 10,
    padding: "8px 14px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  }
};
