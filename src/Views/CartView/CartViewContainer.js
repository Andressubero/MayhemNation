import React from 'react'
import { useContext, useState, useEffect} from 'react'
import { ItemsContext } from '../../Context/Context'
import {CartView} from './CartView'

export const CartViewContainer = () => {
    const {cart, clearCart, deleteFromCart, addToCart} = useContext(ItemsContext)

    return (
        <div className="cart-container">
            {cart.map(item => {
                return (
                    <div key={`itemInCart-${item.id}`}><CartView data={item} /></div>                
                    
                )

            })}
            
        </div>
    )
}
