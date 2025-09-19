// src/components/ItemListContainer.jsx
// src/containers/ItemListContainer.jsx
// src/containers/ItemListContainer.jsx
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams();

    // Si hay categoriaId, filtramos los productos
    const filteredProducts = categoriaId
        ? products.filter(prod => prod.category === categoriaId)
        : products;

    return (
        <section style={style}>
            <h2>{greeting}</h2>
            <ul>
                {filteredProducts.map((prod) => (
                    <li key={prod.id}>
                        {prod.name} - ${prod.price}
                    </li>
                ))}
            </ul>
        </section>
    );
}

const style = {
    padding: "40px",
    textAlign: "center",
    fontSize: "20px"
};

