import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 300,
    width: 300,
  },
});

export  function CartView({data, onDelete, onAdd, clearCart}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <ul>
                <li>Description:{data.description}</li>
                <li>Quantity: {data.quantity} </li>
                <li>Brand: {data.brand} </li>
                <li>Price: {data.price * data.quantity} </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  color="primary">
            Add
        </Button>
        <Button size="small" color="primary">
            Remove
        </Button>
      </CardActions>
    </Card>
  );
}



