import React from 'react'
import products from '../products/products'
import "./Item.css"


function ShowItem(props) {
    
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
            <div>Name:{props.title}</div>
            <div>Price: {props.userId}</div>
            <button> See More</button>
            <button onClick={() => {addToCart(props.id)}}> Add</button>
            <button onClick={() => {deleteFromCart(props.id)}} >Delete</button>
        </div>
    )
}

export default ShowItem
