import React from "react"
import ItemList from '../Itemlist/Itemlist';
import { ItemsContext } from '../Context/Context';
import  { useContext } from 'react';
import { CounterContainer } from "../../components/counter/CounterContainer";


const Itemlistcontainer = () => {

    const [items, setitems] = useContext(ItemsContext)


    return (
       <div><ItemList items={items}/>

       <CounterContainer/>
       
       </div>
    )
}

export default Itemlistcontainer