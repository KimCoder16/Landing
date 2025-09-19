import { useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));
    const { cart, setCart } = useContext(CartContext);

    if (!product) return <p>Producto no encontrado</p>;

    const addToCart = () => {
        setCart([...cart, product]);
    };

    return (
        <article style={style}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={addToCart} style={style.button}>Agregar al carrito</button>
        </article>
    );
}

const style = {
    padding: "40px",
    textAlign: "center",
    fontSize: "18px",
    button: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

