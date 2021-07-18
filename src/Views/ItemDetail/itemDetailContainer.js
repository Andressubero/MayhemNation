import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useState } from 'react'
import {db} from '../../Firebase/Firebase'

export const ItemDetailContainer = ({match}) => {

  const findProduct = () => {

      

    const docs = []

        db.collection('products').onSnapshot((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
        let product = docs.find((item) => item.id = match.params.id)
        console.log(product)
    })
}

    useEffect( () => {
        findProduct()
        
    }, [])

    return (
        <div>
             
            
        </div>
    )
}
