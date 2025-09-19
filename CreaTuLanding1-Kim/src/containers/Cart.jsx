// src/containers/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2 style={style}>Tu carrito está vacío</h2>;
    }

    return (
        <section style={style}>
            <h2>Carrito de compras</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
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
