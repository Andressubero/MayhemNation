import React from 'react'
import ShowItem from '../Item/Item'
import "./Itemlist.css"
import  {Link} from "react-router-dom"

function ItemList() {
    
    const [items, setitems] = React.useState([])

    React.useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => setitems(data) )
        
        
    }, [])


    return (
        <div className="product-container">
            {items.map( function(product) {
                return (
                    <div  key={`item-${product.id}`}>
                        <Link to={`/detail/${product.id}`}>
                         {ShowItem(product)}
                        </Link>
                       
                    </div>
                )
            }
             )}



            
        </div>
    )
}

export default ItemList
