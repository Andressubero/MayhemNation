import React from 'react'
import ShowItem from '../Item/Item'
import "./Itemlist.css"
import  {Link} from "react-router-dom"


function ItemList() {

    
    const [items, setitems] = React.useState([])

    React.useEffect(() => {

        fetch('https://mocki.io/v1/3f8922bd-5f51-4647-845b-f06e823540d1')
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
