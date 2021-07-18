import React from 'react'

function ItemDetail({data}) {

    
    return (
        <div>
            <h1>{data.name}</h1>
            <h2>{data.price}</h2>
            <h2>{data.brand}</h2>

            
        </div>
    )
}

export default ItemDetail
