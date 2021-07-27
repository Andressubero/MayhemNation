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

	
	const addToCart = (item, num) => {
		let isItemInCart = cart.find( product => product.id === item.id)
		if (isItemInCart) {
			const newCart = cart.map( itemInCart => {
				if (itemInCart.id === item.id ) {
					return {...itemInCart, quantity: itemInCart.quantity + num}
				 } else return itemInCart
			 })
			 setCart(newCart)	
			} else {
				
			 	setCart((prev) => [...prev, {...item, quantity: num}])
			}
			 

	}
	const clearCart = () => {
		setCart([])
	}

	const deleteFromCart = (id) => {
		setCart(cart.filter((item) => item.id !== id))
	}
    

	return (
		<ItemsContext.Provider value={{items, setItems, addToCart, clearCart, cart, deleteFromCart}}>
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