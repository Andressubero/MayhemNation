import React from 'react'
import {Counter} from './Counter'
import "./Counter.css";

export const CounterContainer = ({stock}) => {
    return (
        <div className="counter-container">
            <Counter stock={stock} />
            
        </div>
    )
}
