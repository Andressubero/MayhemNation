import React from 'react'
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { ItemsContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const FinalMessage = () => {
    const {clearCart, userOrder} = useContext(ItemsContext)
    return (
        <div>
            <h1>Congratulations, you finished your purchase, we will contact you shortly.</h1>
            <h2>Purchase information:</h2>
            <h3>{userOrder.id}</h3>
            <Button  variant="contained" onClick={()=>{clearCart()}}  color="secondary"><Link to="/">Exit</Link></Button>           
             </div>
    )
}
