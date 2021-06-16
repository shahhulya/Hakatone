import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { storeContext } from "../../context/StoreContext";
import classese from "./card.module.css";
import Truncate from "react-truncate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  description: {
    height: 100,
    marginTop: 20,
  },
  desc: {
    color: "#000",
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();

  const { title, description, images } = data;

  const { fetchProducts } = useContext(storeContext);

  return (
    <div className={classese.cards}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={images[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <Truncate lines={2} ellipsis={"..."}>
                {description}
              </Truncate>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
