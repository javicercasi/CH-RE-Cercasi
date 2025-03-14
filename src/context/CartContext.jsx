import { createContext, useState } from "react";

// 1. Crear el contexto:
export const CartContext = createContext();

// 2. Crear el provider:
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    // Si existe.
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento; // Que los otros productos los deje como estaba.
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]); // Tira todos los objetos ya existentes, y agrega el nuevo.
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeByID = (id) => {
    let newCart = cart.filter((elemento) => elemento.id !== id);
    setCart(newCart);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, item) => acc + item.quantity, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        getTotalQuantity,
        getTotalAmount,
        addToCart,
        resetCart,
        removeByID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
