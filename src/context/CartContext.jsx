import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // <-- ESKAERAK GORDETZEKO STATE BERRIA

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const placeOrder = () => {
    const newOrder = {
      id: new Date().getTime(), // Eskaerari ID uniko bat eman
      date: new Date(),
      items: cart,
      total: cart.reduce((total, item) => total + item.prezioa * item.quantity, 0),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]); // Saskia hustu
  };

  const value = {
    cart,
    orders, // <-- Eskaerak eskuragarri jarri
    addToCart,
    placeOrder, // <-- Funtzio berria
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
