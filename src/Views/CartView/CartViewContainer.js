import React from 'react'
import { CartView } from './CartView'
import { useContext, useState } from 'react'
import { ItemsContext } from '../../Context/Context'
import {Link} from "react-router-dom"




export const CartViewContainer = () => {

    const {cart, clearCart, deleteFromCart,  totalPrice, deleteOne, totalItemsCount, submitUser} = useContext(ItemsContext)
    const onDelete = (item) => {
        if (item.quantity === 1) {
            deleteFromCart(item.id)
        } else {
         deleteOne(item.id)
             
        }
      }
    const [finishShop, setFinish] = useState(false)
    const finish = () => {
        setFinish(true)
    }
    const [hide, setHide] = useState(false)
    const onHide = () => {
        setHide(value=> !value)
    }
    

    if (totalItemsCount === 0) return (
  
        <div>
          <h2>You have nothing in Cart, please go back to shop to see our products</h2>
          <h3><Link to="/Shop" >Shop</Link></h3>
        </div> )

    return (
        <div>
           
                
          <CartView onDelete={onDelete} onHide={onHide} totalPrice={totalPrice} cart={cart} clearCart={clearCart}/>       
         
            
        </div>
    )
}
