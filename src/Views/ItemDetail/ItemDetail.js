import React from 'react'

function Itemdetail({match}) {

    const [item, setitem] = React.useState(0)
    
    React.useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)
  .then(response => response.json())
  .then(data => setitem(data))      
    
    }, [])
    
    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.userId}</h2>

            
        </div>
    )
}

export default Itemdetail
