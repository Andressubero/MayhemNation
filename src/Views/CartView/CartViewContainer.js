import React from 'react'
import { Form } from '../../components/Form/Form'
import { CartView } from './CartView'
import { useContext, useState } from 'react'
import { ItemsContext } from '../../Context/Context'
import {Link} from "react-router-dom"
import { FinalMessage } from '../../components/FinalMessage/Finalmessage'



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
            <div className={finishShop?  "hide": ""}>
                
            <div className={hide? "hide" : ""}><CartView onDelete={onDelete} onHide={onHide} totalPrice={totalPrice} cart={cart} clearCart={clearCart}/></div>
            <div  className={hide? "" : "hide"}><Form totalPrice={totalPrice} finish={finish} clearCart={clearCart} submitUser={submitUser} onHide={onHide}/></div>
            
            </div>
            <div className={finishShop?  "": "hide"}>

                <FinalMessage clearCart={clearCart} cart={cart} totalPrice={totalPrice}/>

               
            </div>
            
        </div>
    )
}
