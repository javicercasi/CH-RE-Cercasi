import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {total > 0 && <span className="cart-count">{total}</span>}
    </div>
  );
};
