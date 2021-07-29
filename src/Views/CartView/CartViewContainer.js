import React from 'react'
import {CartView} from './CartView'
import { useContext, useEffect, useState} from 'react'
import { ItemsContext } from '../../Context/Context'

export const CartViewContainer = () => { 
    
    const {cart} = useContext(ItemsContext)

   
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
