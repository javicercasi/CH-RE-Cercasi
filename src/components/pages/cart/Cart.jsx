import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import "./Cart.css"; // Importamos los estilos

const Cart = () => {
  const { cart, resetCart, removeByID, getTotalAmount } =
    useContext(CartContext);
  let total = getTotalAmount();

  return (
    <section className="section-cart">
      <Typography variant="h4" gutterBottom>
        🛒 Tu Carrito
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Tu carrito está vacío.</Typography>
      ) : (
        <>
          <Box className="cart-items">
            {cart.map((product) => (
              <Card key={product.id} className="cart-item">
                <CardMedia
                  className="cart-item-image"
                  component="img"
                  image={product.imageUrl}
                  alt={product.title}
                />
                <CardContent className="cart-item-content">
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body1" color="secondary">
                    ${product.price} x {product.quantity}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeByID(product.id)}
                >
                  <FaTrash />
                </Button>
              </Card>
            ))}
          </Box>

          <Typography variant="h5" className="cart-total">
            Total a pagar: <strong>${total}</strong>
          </Typography>

          <Box className="cart-actions">
            <Button variant="contained" color="error" onClick={resetCart}>
              Vaciar carrito
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaShoppingCart />}
              component={Link}
              to="/checkout"
            >
              Finalizar compra
            </Button>
          </Box>
        </>
      )}
    </section>
  );
};

export default Cart;
