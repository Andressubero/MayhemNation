import React, { createContext, useState, useEffect } from 'react';
import {db} from "../Firebase/Firebase";
import firebase from "firebase/app";



export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
	
	const [items, setItems] = useState([]);
	const [userOrder, setOrder] = useState([])
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

	const getUser = () => {

		
		db.collection('users').onSnapshot((querySnapshot)=> {
		querySnapshot.forEach((doc) => {
			setOrder({...doc.data(), id: doc.id})
		})
	
	})

}

		const [curr , setCurr] = useState('');

		const getDate = () => {
		const a = firebase.firestore
		.Timestamp.now().toDate().toString();
	setCurr(a);
 
	}

    useEffect(() => {

		getProducts()
		getUser()
		getDate()

	}, [])

	

	const submitUser = async (user)  => {
		await db.collection("users").doc().set(user)
	}

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
		const newItems = items.map(dbItem=> {
			if(dbItem.id === id) {
				return {...dbItem, stock: dbItem.stock + 1}
			} else return dbItem
		})
		setItems(newItems)

	}

	const deleteOne = (id) => {
		const newCart = cart.map( itemInCart => {
            if (itemInCart.id === id ) {
                return {...itemInCart, quantity: itemInCart.quantity - 1}
             } else return itemInCart
         })
         setCart(newCart)	
		 const newItems = items.map(dbItem=> {
			 if(dbItem.id === id) {
				 return {...dbItem, stock: dbItem.stock + 1}
			 } else return dbItem
		 })
		 setItems(newItems)
	}

	const totalItemsCount = cart.reduce( (acc, item)=> {

		return acc = acc + item.quantity 

	} ,0)

	const totalPrice = cart.reduce( (acc, item)=> {

		return acc +=  item.quantity * item.price

	} ,0)
    

	return (
		<ItemsContext.Provider value={{items, setItems, addToCart, clearCart, cart, deleteFromCart, setCart, curr, totalItemsCount, totalPrice, deleteOne, submitUser, userOrder  }}>
			{props.children}
		</ItemsContext.Provider>
	);
};

