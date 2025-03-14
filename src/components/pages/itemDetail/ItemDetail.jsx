import { useEffect, useState } from "react";
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
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    const getProduct = getDoc(refDoc);

    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => console.log(error));
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
            <Counter item={item} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
