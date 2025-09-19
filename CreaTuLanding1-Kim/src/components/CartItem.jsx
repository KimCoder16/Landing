// src/components/CartItem.jsx
export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div style={styles.item}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <div style={styles.info}>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
        <div style={styles.qtyRow}>
          <button onClick={() => onDecrease(item.id)} style={styles.qtyBtn}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => onIncrease(item.id)} style={styles.qtyBtn}>+</button>
        </div>
        <p>Subtotal: ${item.price * item.qty}</p>
      </div>
      <button onClick={() => onRemove(item.id)} style={styles.removeBtn}>❌</button>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "10px 0"
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginRight: "20px"
  },
  info: {
    flexGrow: 1,
    textAlign: "left"
  },
  qtyRow: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0"
  },
  qtyBtn: {
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#f5f5f5",
    cursor: "pointer"
  },
  removeBtn: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

