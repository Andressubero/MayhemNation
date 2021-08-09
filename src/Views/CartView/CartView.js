import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState} from 'react'
import { ItemsContext } from '../../Context/Context'
import Input from '@material-ui/core/Input';
import "./CartView.css"




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
  const {cart, clearCart, deleteFromCart, addToCart, setCart, totalPrice, deleteOne, totalItemsCount} = useContext(ItemsContext)

 const onDelete = (item) => {
   if (item.quantity === 1) {
       deleteFromCart(item.id)
   } else {
    deleteOne(item.id)
        
   }
 }
  
  if (totalItemsCount === 0) return (
  
  <div>
    <h2>You have nothing in Cart, please go back to shop to see our products</h2>
    <h3><Link to="/Shop" >Shop</Link></h3>
  </div> )

  return ( 

    <div>

  
        <div className="cart-container">
            {cart.map(item => {
                return (
                    <div key={`itemInCart-${item.id}`} className="cardItem">

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

       

       
        <Button onClick={()=> {onDelete(item)}} size="small" variant="contained" color="secondary">
            Remove
        </Button>
      </CardActions>
    </Card>


                    </div>  
               
                    
                    
                )

            })}
            
        </div>

        <div> 
            <Input defaultValue={`Total Price: ${totalPrice}$`}/> 
            <Button onClick={()=> {clearCart()}} size="small" variant="contained" color="secondary">Delete All</Button>
        
        </div>
    

        </div>) 
}