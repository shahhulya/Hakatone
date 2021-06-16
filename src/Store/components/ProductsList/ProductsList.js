import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import { storeContext } from "../../context/StoreContext";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProductsList() {
  const classes = useStyles();
  const { products, fetchProducts } = useContext(storeContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Card data={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
