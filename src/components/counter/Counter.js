import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import "./Counter.css"
import { useState } from 'react';


export const Counter = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const increment = () => {
        if(count< stock) {
            setCount(count + 1)}
        
    }
    const decrement = () => {
        if (count > 1) {setCount(count - 1)}
    }

    const [disabled, setDisabled] = useState(false)

    useEffect ( ()=> {
        if (count  === stock ) {
            setDisabled(true)} else {
                setDisabled(false)
            }
    }, [count])

    

    
    return (
        <div style={{width:"100%"}}>

            <div className="btn-container">
            <div className="btn">
            <Button variant="contained" color="primary" disabled={disabled}  onClick={increment}>Add</Button>
            </div>
            <div className="btn"><h2>{count}</h2></div>
            <div className="btn">
            <Button variant="contained" color="primary"  onClick={decrement}> Delete</Button>
            </div>
            </div>   

           <div>
          <Button variant="contained"   color="secondary" onClick={()=> onAdd(count)}>Add to Cart</Button>
           </div>        
            
        </div>
    )
}
