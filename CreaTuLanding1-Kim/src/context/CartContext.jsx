// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, qty: quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(item.qty - 1, 1) }
          : item
      )
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQty,
        decreaseQty,
        cartTotal,
        cartQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
