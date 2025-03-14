import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./productCard.css";
import Counter from "../counter/Counter";

export const ProductCard = ({ item }) => {
  return (
    <Card className="product-card">
      <CardMedia component="img" image={item.imageUrl} alt={item.title} />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
        <Counter item={item} />
      </CardContent>
    </Card>
  );
};
