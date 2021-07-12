import React, { createContext, useState, useEffect } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
	const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('https://mocki.io/v1/3f8922bd-5f51-4647-845b-f06e823540d1')
    .then(response => response.json())
    .then(data => setItems(data) )
    }, [])
    

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{props.children}
		</ItemsContext.Provider>
	);
};