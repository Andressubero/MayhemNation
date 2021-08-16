import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../../Context/Context';
import  { useContext,  useEffect, useState} from 'react';
import {  useHistory} from "react-router-dom";
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"



const Itemlistcontainer = (props) => {

    const history = useHistory()
    
   
    const {items} = useContext(ItemsContext)

    let { catId } =  useParams()
    
    const [products, setProducts] = useState([])

    const OnClick = (category) => {
        history.push(`/Shop/${category}`)
        
    }
  
    
    useEffect ( ()=> {
        if (!catId ) return setProducts(items)
        if (catId) {
            if (catId === "all" ) {
                setProducts(items)
            } else {
                const filteredItems = items.filter( item => item.cat === catId )
                setProducts(filteredItems)
            }
            
            

        }
        
 

    }, [catId, items])

 

    return (
       <div>

           <div className="menu-filter">
               <h2 onClick={()=> OnClick("all")}>
                   All
               </h2>
             <h2 onClick={()=> OnClick("cf")}>
                   CrossFit
               </h2>
               <h2 onClick={()=> OnClick("bar")}>
                   Barbells
               </h2>
               <h2 onClick={()=> OnClick("oly")}> 
                   Racks
               </h2>
               <h2 onClick={()=> OnClick("plate")}>
                   Plates
               </h2>

           </div>
           
          <div><ItemList items={products}/></div> 

       
       
       </div>
    )
}

export default Itemlistcontainer