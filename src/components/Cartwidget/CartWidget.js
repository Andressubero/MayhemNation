import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useContext} from "react"
import { ItemsContext } from '../../Context/Context';
import Input from '@material-ui/core/Input';
import "./CartWidget.css"

export const CartWidget = () => {
    const {totalItemsCount} = useContext(ItemsContext)  
    return (
        <div className="cart-icon-container">
        <ShoppingCartIcon fontSize="large"/>
        {totalItemsCount}  
        </div>
    )
}
