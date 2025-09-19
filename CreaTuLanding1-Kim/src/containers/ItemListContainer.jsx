// src/containers/ItemListContainer.jsx
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

export default function ItemListContainer({ greeting }) {
  const { categoriaId } = useParams();

  // Si hay categoriaId, filtramos (normalizamos a minúsculas)
  const filteredProducts = categoriaId
    ? products.filter(
        (prod) => prod.category.toLowerCase() === categoriaId.toLowerCase()
      )
    : products;

  return (
    <section style={style.section}>
      <h2>{greeting}</h2>
      <div style={style.grid}>
        {filteredProducts.map((prod) => (
          <div key={prod.id} style={style.card}>
            <img src={prod.image} alt={prod.name} style={style.image} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
            <Link to={`/producto/${prod.id}`} style={style.button}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const style = {
  section: {
    padding: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "blue",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

