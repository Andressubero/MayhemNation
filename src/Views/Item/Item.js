import React from 'react'
import "./Item.css"
import {Link} from "react-router-dom"
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
      Width: 300,
    },
    media: {
      height: 300,
      width: 300,
    },
  });
  export default function ShowItem({product}) {
      const classes = useStyles();
    
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.img}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Price: {product.price}$
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Link to={`/detail/${product.id}`}><Button size="small" color="primary">
              See More
            </Button></Link>
          </CardActions>
        </Card>
      );
    }
  
  
  


// function ShowItem({product}) {
    
//     const cart = []

//    const addToCart = (num) => {
//     let productToAdd = cart.find((item) => item.id === num)
//      if (productToAdd) { 

//      if (productToAdd.cantidad === productToAdd.stock){

//            console.log("no hay stock")

//        } else {
//            productToAdd.cantidad += 1
//               }       
//          }
//          else {
//        let {name, price, id, stock} = products.find((item) => item.id === num)
//         cart.push({name: name, price: price, stock: stock, id: id, cantidad: 1})
//     }
//      console.log(cart)  }

//      const deleteFromCart = (num) => {
//          let productToDelete = cart.find((item)=> item.id === num)
//         productToDelete.cantidad -= 1
//         if (productToDelete.cantidad === 0) {
//            let indice = cart.indexOf(productToDelete)
//             cart.splice(indice,1)
            
//          }
//         console.log(cart)
        
//     }

//     return (
//         <div className="showproduct">
//             <img width="330px" src={product.img} alt={`${product.name}-${product.brand}`}></img>
//             <div>Name:{product.name}</div>
//             <div>Price: {product.price}</div>
//             <Link to={`/detail/${product.id}`}><button> See More</button></Link>
//             <button onClick={() => {addToCart(product.id)}}> Add</button>
//             <button onClick={() => {deleteFromCart(product.id)}} >Delete</button>
//         </div>
//     )
// }

// export default ShowItem
