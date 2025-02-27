import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <Card className="product-card">
      <CardMedia component="img" image={item.imageUrl} alt={item.title} />
      <CardContent>
        <Typography variant="h6" component="h3">
          {item.title}
        </Typography>
        <Typography variant="h5" component="h4" color="secondary">
          ${item.price}
        </Typography>
        <Link to={`/wine/${item.id}`}>
          <Button variant="contained" color="secondary">
            Ver detalle
          </Button>
        </Link>
        <Button variant="outlined" color="secondary">
          Añadir al carrito
        </Button>
      </CardContent>
    </Card>
  );
};
