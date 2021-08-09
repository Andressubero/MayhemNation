import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CounterContainer } from "../../components/counter/CounterContainer";
import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import { ItemsContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import  "./ItemDetailContainer.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
    width: 300,
  },
});

export default function ItemDetail({data}) {
    const classes = useStyles();
    const {addToCart, cart}  = useContext(ItemsContext)
    const [isDisabled, setDisabled] = useState(false)


    const onAdd = (qty) => { 
      addToCart(data, qty)
      setDisabled(true)
      }
    

      console.log(cart)
  
    return ( 
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
           <ul>
                <li>Brand: {data.brand}</li>
                <li>Stock: {data.stock}</li>
                <li>Description: {data.description}</li>
                <li>Price: {data.price}$</li>
            </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="counter-container">
          <div  className={`${isDisabled ? "disabled" : ""}`} ><CounterContainer data={data} onAdd={onAdd}/></div>
          <div className={`${isDisabled ? "" : "disabled"}`}><Link to="/CartView"><Button variant="contained" color="primary">Finalize </Button></Link></div>

          
        </CardActions>
      </Card>)    
    
  }


