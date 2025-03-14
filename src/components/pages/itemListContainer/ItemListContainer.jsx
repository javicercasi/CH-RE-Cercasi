import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { Grid2 as Grid } from "@mui/material";
import "./itemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }

    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section className="box">
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
