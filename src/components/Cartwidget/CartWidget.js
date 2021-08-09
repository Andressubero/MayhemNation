import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useContext, useState, useEffect} from "react"
import { ItemsContext } from '../../Context/Context';
import "./CartWidget.css"


export const CartWidget = () => {

    const [isHide, setIsHide] = useState(true)
    
    const {totalItemsCount} = useContext(ItemsContext)  

    useEffect(() => {
        if (totalItemsCount !== 0) {
            setIsHide(false)
            } else {
            setIsHide(true)

                    }

    }, [totalItemsCount])
    
   
    return (
        <div className={`cart-icon-container ${isHide? "cartHide" : ""}`}>
        <ShoppingCartIcon  fontSize="large"/>
        {totalItemsCount}  
        </div>
    )
}
