import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import "./checkout.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const funcionFormulario = async (evento) => {
    evento.preventDefault();
    setLoading(true);

    let total = getTotalAmount();
    let ordersCollectionRef = collection(db, "orders");

    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    try {
      let res = await addDoc(ordersCollectionRef, order);
      setOrderID(res.id);
      resetCart();

      let productsCollectionRef = collection(db, "products");
      cart.forEach(async (item) => {
        let itemRef = doc(productsCollectionRef, item.id);
        await updateDoc(itemRef, { stock: item.stock - item.quantity });
      });

      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Error al procesar la compra", error);
    } finally {
      setLoading(false);
    }
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Container className="checkout-container">
      <Paper elevation={3} className="checkout-paper">
        {orderID ? (
          <>
            <Typography variant="h5" color="primary">
              ¡Gracias por tu compra! 🎉
            </Typography>
            <Typography variant="body1">
              Tu ID de orden es: <strong>{orderID}</strong>
            </Typography>
            <Typography variant="body2" className="checkout-message">
              Serás redirigido a la página principal en unos segundos...
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Finalizar Compra
            </Typography>
            <form onSubmit={funcionFormulario}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={userInfo.nombre}
                onChange={funcionInputs}
                required
                className="checkout-input"
              />
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={userInfo.email}
                onChange={funcionInputs}
                required
                className="checkout-input"
              />
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={userInfo.telefono}
                onChange={funcionInputs}
                required
                className="checkout-input"
              />

              <Box className="checkout-actions">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() =>
                    setUserInfo({ nombre: "", email: "", telefono: "" })
                  }
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Comprar"
                  )}
                </Button>
              </Box>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
