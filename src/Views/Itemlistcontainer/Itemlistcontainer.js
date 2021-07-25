import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../../Context/Context';
import  { useContext } from 'react';
import  { useEffect } from 'react';
import {  useHistory, useParams } from "react-router";
import "./ItemListContainer.css"



const Itemlistcontainer = ({match}) => {

    const history = useHistory()
    
   
    const {items} = useContext(ItemsContext)

    const {cat} = useParams()

    const OnClick = (cat) => {
        history.push(`/FitnessEquipment/${cat}`)
    }
    
    useEffect ( ()=> {
        console.log(cat)

    }, [cat])

 

    return (
       <div>

           <div className="menu-filter">
               <h2>
                   All
               </h2>
             <h2 onClick={()=> OnClick("cf")}>
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