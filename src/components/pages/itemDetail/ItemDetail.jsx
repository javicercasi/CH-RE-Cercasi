import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import {
  Grid2 as Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import "./itemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = products.find((elemento) => elemento.id === id);
    setItem(product);
  }, [id]);

  return (
    <Grid container justifyContent="center">
      <Grid>
        <Card className="item-card">
          <CardMedia
            component="img"
            height="500"
            image={item.imageUrl}
            alt={item.title}
          />
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="h6" color="secondary">
              ${item.price}
            </Typography>
            <Button variant="contained" color="secondary">
              Añadir al carrito
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
