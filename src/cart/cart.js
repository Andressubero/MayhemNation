import React from 'react'
import "./cart.css"
import products from '../products/products'

const Cart = () => {

    const [ amount, setamount] = React.useState(0)
    const [items, setitems] = React.useState([])
   
    React.useEffect(() => {
        setTimeout(() => {

            setitems(products)
            
        }, 2000);
    })


    const add = (stock) => {
        if (amount < 10) {
            setamount(amount + 1)
        } 
        
    }
    const quit = () => {
        if(amount > 0) 
        setamount(amount - 1)
        
    }
    

    return (
        <div>
            <div className="button-container"> 
                <button onClick={add}> Add </button>
                <p>{amount}</p>
                <button onClick={quit}>Delete</button>
            </div>
           <div className="items-container">{items.map( function (item) {
                return (
                    <div key= {item.id}>
                        <ul>
                            <li>Name: {item.name}</li>
                            <li>Price: {item.price}</li>
                        </ul>

                    </div>
                )

            } )}</div> 
            
        </div>
    )
}

export default Cart

