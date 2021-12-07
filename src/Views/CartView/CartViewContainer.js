import React from 'react'
import { CartView } from './CartView'
import { useContext} from 'react'
import { ItemsContext } from '../../Context/Context'
import {Link} from "react-router-dom"




export const CartViewContainer = () => {
    const {cart, clearCart, deleteFromCart,  totalPrice, deleteOne, totalItemsCount} = useContext(ItemsContext)
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
          <CartView onDelete={onDelete}  totalPrice={totalPrice} cart={cart} clearCart={clearCart}/>                   
        </div>
    )
}
