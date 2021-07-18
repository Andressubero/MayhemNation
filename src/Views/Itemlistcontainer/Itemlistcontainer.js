import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../Context/Context';
import  { useContext } from 'react';



const Itemlistcontainer = () => {

    const [items, setitems] = useContext(ItemsContext)


    return (
       <div><ItemList items={items}/>

       
       
       </div>
    )
}

export default Itemlistcontainer