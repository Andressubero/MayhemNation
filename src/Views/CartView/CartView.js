import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState} from 'react'
import { ItemsContext } from '../../Context/Context'


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 300,
    width: 300,
  },
});

export  function CartView() {
  const classes = useStyles();
  const {cart, clearCart, deleteFromCart, addToCart, setCart, totalPrice} = useContext(ItemsContext)
  const onDelete = (item) => {
      if (item.quantity === 1) {
          deleteFromCart(item.id)
      } else {
        const newCart = cart.map( itemInCart => {
            if (itemInCart.id === item.id ) {
                return {...itemInCart, quantity: itemInCart.quantity - 1}
             } else return itemInCart
         })
         setCart(newCart)	
          
      }
  }
  

  return ( 

    <div>

    <div> <input value={`Total Price: ${totalPrice}$`}/> </div>

    

        <div className="cart-container">
            {cart.map(item => {
                return (
                    <div key={`itemInCart-${item.id}`}>

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <ul>
                <li>Description:{item.description}</li>
                <li>Quantity: {item.quantity} </li>
                <li>Brand: {item.brand} </li>
                <li>Price: {item.price * item.quantity} </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={()=> {addToCart(item, 1)}} color="primary">
            Add
        </Button>
        <Button onClick={()=> {onDelete(item)}}size="small" color="primary">
            Remove
        </Button>
      </CardActions>
    </Card>


                    </div>  
               
                    
                    
                )

            })}
            
        </div>

        
    

        </div>) 
}