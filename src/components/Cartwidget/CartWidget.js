import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useContext} from "react"
import { ItemsContext } from '../../Context/Context';

export const CartWidget = () => {
    const {cart} = useContext(ItemsContext)
    if (cart.lenght === 0)  return <div></div>    
    return (
        <div>
        <ShoppingCartIcon fontSize="large"/>
            
        </div>
    )
}
