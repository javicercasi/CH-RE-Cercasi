import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <Link to="/" className="cart-link">
        Volver a la tienda
      </Link>
    </div>
  );
};

export default Cart;
