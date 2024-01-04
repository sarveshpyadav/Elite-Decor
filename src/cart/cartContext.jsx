import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    const existingItem = cart.find(
      (item) => item.product.name === product.name
    );
    if (existingItem) {
      const totalQuantity = existingItem.quantity + quantity;

      if (totalQuantity > 3) {
        return;
      }
      const updatedCart = cart.map((item) =>
        item.product.name === product.name
          ? { ...item, quantity: totalQuantity }
          : item
      );
      setCart(updatedCart);
    } else {
      if (quantity > 3) {
        return;
      }
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.product.name !== productName));
  };

  const updateQuantity = (productName, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.product.name === productName
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
  };
  useEffect(() => {
    let cartNumber = 0
    if(cartNumber === 0){
    document.querySelector('.red-dot').style.display = "none";
    }
    if(cart.length >= 1){
      document.querySelector('.red-dot').style.display = "block";
      }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
