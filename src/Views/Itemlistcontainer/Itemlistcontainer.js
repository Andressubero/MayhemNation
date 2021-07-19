import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../Context/Context';
import  { useContext } from 'react';
import  { useEffect } from 'react';
import "./ItemListContainer.css"


const Itemlistcontainer = () => {

    const [items, setItems] = useContext(ItemsContext)


    return (
       <div>

           <div className="menu-filter">
               <h2>
                   All
               </h2>
               <h2>
                   CrossFit
               </h2>
               <h2>
                   Barbells
               </h2>
               <h2>
                   Racks
               </h2>
               <h2>
                   Plates
               </h2>

           </div>
           
          <div><ItemList items={items}/></div> 

       
       
       </div>
    )
}

export default Itemlistcontainer