import React, { createContext, useState, useEffect } from 'react';
import {db} from "../../Firebase/Firebase";


export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
	const [items, setItems] = useState([]);

	const getProducts = () => {

		const docs = []

		db.collection('products').onSnapshot((querySnapshot)=> {
			querySnapshot.forEach((doc) => {
				docs.push({...doc.data(), id: doc.id})
			})
			setItems(docs)
		})

	}

    useEffect(() => {

		getProducts()

	}, [])
    

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{props.children}
		</ItemsContext.Provider>
	);
};