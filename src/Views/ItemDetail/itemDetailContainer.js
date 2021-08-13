import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemsContext } from '../../Context/Context';
import  { useContext } from 'react';
import "./ItemDetailContainer.css"


export const ItemDetailContainer = ({match}) => {

    const {items} = useContext(ItemsContext)
    const [isLoading, setLoading] = useState(true)
 
    const [prod, setProd] = useState(0)

    
    
    useEffect( () => {
        const findProduct = () => {
            let  product = items.find((product) => product.id === match.params.id)
             setProd(product)
         }
         findProduct()
        setLoading(false)
    },[items, match])

    if (isLoading || !prod) return <h1>Loading</h1>

    return (
        <div className="card-container">
        <ItemDetail data={prod} />
    </div>
    )
}