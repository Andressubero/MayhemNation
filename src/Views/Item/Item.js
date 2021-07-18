import React from 'react'
import products from '../../products/products'
import "./Item.css"
import {Link} from "react-router-dom"


function ShowItem({product}) {
    
    const cart = []

   const addToCart = (num) => {
    let productToAdd = cart.find((item) => item.id === num)
     if (productToAdd) { 

     if (productToAdd.cantidad === productToAdd.stock){

           console.log("no hay stock")

       } else {
           productToAdd.cantidad += 1
              }       
         }
         else {
       let {name, price, id, stock} = products.find((item) => item.id === num)
        cart.push({name: name, price: price, stock: stock, id: id, cantidad: 1})
    }
     console.log(cart)  }

     const deleteFromCart = (num) => {
         let productToDelete = cart.find((item)=> item.id === num)
        productToDelete.cantidad -= 1
        if (productToDelete.cantidad === 0) {
           let indice = cart.indexOf(productToDelete)
            cart.splice(indice,1)
            
         }
        console.log(cart)
        
    }

    return (
        <div className="showproduct">
            <img width="330px" src={product.img} alt={`${product.name}-${product.brand}`}></img>
            <div>Name:{product.name}</div>
            <div>Price: {product.price}</div>
            <Link to={`/detail/${product.id}`}><button> See More</button></Link>
            <button onClick={() => {addToCart(product.id)}}> Add</button>
            <button onClick={() => {deleteFromCart(product.id)}} >Delete</button>
        </div>
    )
}

export default ShowItem
