import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  const cartCount = 4; // Simulamos tener 4 productos en el carrito

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
    </div>
  );
};
