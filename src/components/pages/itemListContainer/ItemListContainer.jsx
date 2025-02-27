import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { Grid2 as Grid } from "@mui/material";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isTest = true;
      if (isTest) {
        resolve(
          name
            ? products.filter((elemento) => elemento.category === name)
            : products
        );
      } else {
        reject({ message: "Error interno", status: 500 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section>
      <Grid container spacing={8} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={12}>
            <ProductCard key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
