import React, { createContext, useState, useEffect } from 'react';
import {db} from "../Firebase/Firebase";



export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
	
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([])

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

	const isInCart = (id) => {
		 cart.some(item => item.id === id)
	}

	const addToCart = (item, num) => {

		if (isInCart(item.id)) {
			const newCart = cart.map( itemInCart => {
				if (itemInCart.id === item.id ) {
					return {...itemInCart, quantity: itemInCart.quantity + num}
				 } else return itemInCart
			 })
			 setCart(newCart)	
			} else {
				
			 	setCart((prev) => [...prev, {...item, quantity: num}])
			}
			 console.log(cart)

	}
    

	return (
		<ItemsContext.Provider value={{items, setItems,addToCart, cart}}>
			{props.children}
		</ItemsContext.Provider>
	);
};


// let productInCart = cart.find(item => item.id === id)
// if (productInCart) {
// 	const newCart = cart.map( itemInCart => {
// 		if (itemInCart.id === id ) {
// 			itemInCart.count = itemInCart.count + count
// 		} else return itemInCart
// 	})
// 	setCart(newCart)
// } else {
// 	let {name, price} = items.find( item => item.id === id)
// 	setCart((prev) => [...prev, {name, price, count: count}])
// }