import React from 'react'
import ShowItem from '../Item/Item'
import "./Itemlist.css"
import  {Link} from "react-router-dom"




function ItemList({items}) {

    return (
        <div className="product-container">
            {items.map( function(product) {
                return (
                    <div key={product.id}>
                        
                         <ShowItem product={product} />
                        
                       
                    </div>
                )
            }
             )}



            
        </div>
    )
}

export default ItemList
