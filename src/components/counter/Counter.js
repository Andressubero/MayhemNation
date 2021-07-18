import React from 'react'
import Button from '@material-ui/core/Button';
import { useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(1)
    const onAdd = () => {
        setCount(count + 1)
    }
    const onDelete = () => {
        if (count > 1) {setCount(count - 1)}
    }
    
    return (
        <div>

<Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
<Button variant="contained" color="primary" onClick={onDelete}> Delete</Button>
<p> {count} </p>
<Button variant="contained" color="secondary">Add to Cart</Button>


        
            
        </div>
    )
}
