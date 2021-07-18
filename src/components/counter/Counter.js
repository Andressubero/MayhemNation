import React from 'react'
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import "./Counter.css"
import { withWidth } from '@material-ui/core';

export const Counter = ({stock}) => {

    const [count, setCount] = useState(1)
    const onAdd = () => {
        if(count< stock) {
            setCount(count + 1)}
        
    }
    const onDelete = () => {
        if (count > 1) {setCount(count - 1)}
    }
    
    return (
        <div style={{width:"100%"}}>

            <div className="btn-container">
            <div className="btn">
            <Button variant="contained" color="primary"  onClick={onAdd}>Add</Button>
            </div>
            <div className="btn"><h2>{count}</h2></div>
            <div className="btn">
            <Button variant="contained" color="primary"  onClick={onDelete}> Delete</Button>
            </div>
            </div>           
           <div>
           
           <Button variant="contained"  color="secondary" >Add to Cart</Button>
           </div>
            


        
            
        </div>
    )
}
