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

			const newItems = items.map( itemDB => {
				if(itemDB.id === item.id) {
					return {...itemDB, stock: itemDB.stock - num}
				} else return itemDB 
							
			})
			setItems(newItems)
			
			

	}
	const clearCart = () => {
		setCart([])
	
	}

	const deleteFromCart = (id) => {
		setCart(cart.filter((item) => item.id !== id))
	}

	const deleteOne = (id) => {
		const newCart = cart.map( itemInCart => {
            if (itemInCart.id === id ) {
                return {...itemInCart, quantity: itemInCart.quantity - 1}
             } else return itemInCart
         })
         setCart(newCart)	
	}

	const totalItemsCount = cart.reduce( (acc, item)=> {

		return acc = acc + item.quantity 

	} ,0)

	const totalPrice = cart.reduce( (acc, item)=> {

		return acc +=  item.quantity * item.price

	} ,0)
    

	return (
		<ItemsContext.Provider value={{items, setItems, addToCart, clearCart, cart, deleteFromCart, setCart, totalItemsCount, totalPrice, deleteOne  }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

