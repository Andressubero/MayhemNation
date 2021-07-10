import React from 'react'

function Itemdetail({match}) {

    const [item, setitem] = React.useState(0)
    
    React.useEffect(() => {

        fetch(`https://mocki.io/v1/3f8922bd-5f51-4647-845b-f06e823540d1/${match}`, {mode: 'no-cors'})
        .then(response => {
            return response.text()
          })
          .then(data => { return JSON.parse(data)
          })
          .then(info=> setitem(info))
        })
          

    
    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.brand}</h2>
            <h2>{item.price}</h2>

            
        </div>
    )
}

export default Itemdetail
