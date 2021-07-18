import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useState } from 'react'
import {db} from '../../Firebase/Firebase'
import { ItemsContext } from '../Context/Context';
import  { useContext } from 'react';

export const ItemDetailContainer = ({match}) => {

    const [items, setitems] = useContext(ItemsContext)
    const [prod, setProd] = useState(0)

    const findProduct = () => {
       let  product = items.find((product) => product.id == match.params.id)
        setProd(product)
    }
    
    useEffect( () => {
        findProduct() 
    }, [])

    return (
        <div>
            <ItemDetail data={prod} />
        </div>
    )
}
