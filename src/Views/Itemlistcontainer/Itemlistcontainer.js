import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../../Context/Context';
import  { useContext, useState, useEffect } from 'react';
import {  useHistory} from "react-router-dom";
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"



const Itemlistcontainer = (props) => {

    const history = useHistory()
    const [products, setProducts] = useState([])
   
    const {items} = useContext(ItemsContext)

    let { catId } =  useParams()

    const OnClick = (category) => {
        history.push(`/Shop/${category}`)
        console.log(catId)
    }
    console.log(catId)
    
    useEffect ( ()=> {
        console.log(catId)
 

    }, [catId])

 

    return (
       <div>

           <div className="menu-filter">
               <h2 onClick={()=> OnClick("all")}>
                   All
               </h2>
             <h2 onClick={()=> OnClick("cf")}>
                   CrossFit
               </h2>
               <h2 onClick={()=> OnClick("bb")}>
                   Barbells
               </h2>
               <h2 onClick={()=> OnClick("racks")}> 
                   Racks
               </h2>
               <h2 onClick={()=> OnClick("plates")}>
                   Plates
               </h2>

           </div>
           
          <div><ItemList items={items}/></div> 

       
       
       </div>
    )
}

export default Itemlistcontainer