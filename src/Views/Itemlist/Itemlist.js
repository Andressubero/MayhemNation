import React from 'react'
import ShowItem from '../Item/Item'
import "./Itemlist.css"
import  {Link} from "react-router-dom"
import  { useContext } from 'react';
import { ItemsContext } from '../Context/Context';



function ItemList() {

    
    const [items, setitems] = useContext(ItemsContext)


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
