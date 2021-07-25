import React from 'react'
import ShowItem from '../Item/Item'
import "./Itemlist.css"

function ItemList({items}) {

    return (
        <div className="product-container">
            {items.map( function(product) {
                return (
                    <div className="item-container" key={product.id} >
                        
                         <ShowItem product={product} />
                        
                       
                    </div>
                )
            }
             )}



            
        </div>
    )
}

export default ItemList
