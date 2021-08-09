import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import "./Counter.css"
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export const Counter = ({stock, onAdd}) => {
    const classes = useStyles();

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
        if (count  === stock  ) {
            setDisabled(true)} else {
                setDisabled(false)
            }
    }, [count, stock])

    

    
    return (
        <div style={{width:"100%"}}>

            <div className="btn-container">
            <div className="btn">
            <Button variant="contained" color="primary" disabled={disabled}  onClick={increment}>Add</Button>
            </div>
            <div className="btn"> <Input  value={count} /></div>
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
