import React from 'react'
import {Counter} from './Counter'
import "./Counter.css";




export const CounterContainer = ({data, onAdd}) => {


    
   
    return (
        <div className="counter-container">
            <Counter stock={data.stock} onAdd={onAdd} />
            
        </div>
    )
}
