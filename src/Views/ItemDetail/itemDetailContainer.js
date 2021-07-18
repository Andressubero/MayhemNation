import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemsContext } from '../Context/Context';
import  { useContext } from 'react';

export const ItemDetailContainer = ({match}) => {

    const [prods, setProds] = useContext(ItemsContext)
    
  let idTofind = match.params.id

  const productToShow = prods.find((item) => item.id = idTofind )

  console.log(productToShow)

    return (
        <div>
             
            
        </div>
    )
}
