import React from 'react'
import Button from '@material-ui/core/Button';

export const FinalMessage = ({totalPrice, cart, clearCart}) => {
    return (
        <div>

            
            <h1>Congratulations, you finished your purchase, we will contact you shortly.</h1>
            <h2>Purchase information:</h2>
            <h3>Products:</h3>
            <ul>
                {cart.map(item=>  {
                    return (
                        <li>{item.name}</li>
                    )
                })}
            </ul>
            Full payment: {totalPrice} $

            <Button  variant="contained" onClick={()=>{clearCart()}}  color="secondary">Exit</Button>

            
           
             </div>
    )
}
