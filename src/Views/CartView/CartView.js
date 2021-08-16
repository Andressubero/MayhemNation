import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import "./CartView.css"
import { Link } from 'react-router-dom';





const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 300,
    width: 300,
  },
});

export  function CartView({ onDelete, totalPrice, cart}) {
  const classes = useStyles();
    

  return ( 
    <div className="cart-view-container"> 

      <div className="input-container-cart"> 
            <div><Input defaultValue={`Total Price: ${totalPrice}$`}/> </div>
           
            <div><Link className="link" to="/Form"><Button size="small" variant="contained"  color="secondary">Finish</Button></Link></div>

        
      </div>

        <div className="cart-container">
            {cart.map(item => {
                return (
                    <div key={`itemInCart-${item.id}`} className="cardItem">

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.name}
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

        
    

        </div>
       ) 
}