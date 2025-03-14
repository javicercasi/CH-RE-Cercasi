import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import "./counter.css";
import { toast } from "sonner";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("Stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
    setContador(1);
    toast.success("Producto agregado al carrito", { duration: 4000 });
  };

  return (
    <div className="counter">
      <Button onClick={restar} variant="outlined" color="secondary">
        <FaMinus />
      </Button>

      <h2>{contador}</h2>

      <Button onClick={sumar} variant="outlined" color="secondary">
        <FaPlus />
      </Button>

      <Button onClick={onAdd} variant="contained" color="success">
        <FaShoppingCart />
      </Button>
    </div>
  );
};

export default Counter;
