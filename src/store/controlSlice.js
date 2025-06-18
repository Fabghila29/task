import {createSlice} from '@reduxjs/toolkit'

// STATE

const initialState = {

	// here i initialised all the control variables.
	user: {username: "first name", logged: false, lastName:"last name", email: ""},
	copy: [

			{id: "1", text: "Bag1", price: 200, bought: false, color: "Green"},
			{id: "2", text: "Bag2", price: 20, bought: false, color: "Red"},
			{id: "3", text: "Bag3", price: 100, bought: false, color: "Blu"},
			
	],
	list: [

			{id: "1", text: "Bag1", price: 200, bought: false, color: "Green"},
			{id: "2", text: "Bag2", price: 20, bought: false, color: "Red"},
			{id: "3", text: "Bag3", price: 100, bought: false, color: "Blu"},
			
	],
	cart: [],
	order:"standard",
	header: "Breaking Bags",
	modal: {
		modal1: false,
		modal2: false,
	},
	notification: "",

};

const controlSlice = createSlice({

	name:"control",
	initialState,
	reducers: {

		setUser(state, action) {
			state.user = {
				...state.user,
				...action.payload,
				logged: true, // mark user as logged in
			};
		}
		,
		resetUser(state){
			state.user = {
			username: "first name",
			logged: false,
			lastName: "last name",
			email: "",
			};
		},

		toggleModal(state, action) {

			const modalKey = action.payload;
			if(modalKey in state.modal){
				state.modal[modalKey] = !state.modal[modalKey]
			}

		},

		addCart(state, action){

			const {productId, color} = action.payload;
			const productIndex = state.list.findIndex(p => p.id === productId);
			
			if (productIndex !== -1) {

				const product = state.list[productIndex];
				product.bought = !product.bought;
				product.color = color;
				state.cart.push(product);
				console.log("Product pushed to cart");
				state.notification = `${product.text} added to cart`;  
				state.modal.modal2 = true;              
			}
		},

		removeCart(state, action){

			const productId = action.payload;
			const productIndex = state.cart.findIndex(p => p.id === productId);
			
			if (productIndex !== -1) {

				const product = state.cart[productIndex];
				product.bought = !product.bought;
				state.list.push(product);
				state.cart.splice(productIndex, 1);
				console.log("Product removed from cart"); 
				state.notification = `${product.text} removed from cart`; 
				state.modal.modal2 = true;             
			}
		},

		toggleShipping(state, action){
		
			const order = action.payload;
			state.order = order;
			const list = state.cart.map(item => `\n- ${item.text} (${item.color}) - ${item.price}`);
			const total = state.cart.reduce((sum, item) => sum + item.price, 0);
			const cleanList = list.join('');
			alert(
				`Your Order: ${cleanList}`  +
				"\n Number of Items: " + state.cart.length +
				`\n Updated shipment: ${order}` +
				`\n Your current total: ${total}`
			);
		},

	

        

        // login/out
        // help
        // add to the list
        // add to the cart
        // feed total
        // change the shipping


        
    }

});

export const { setUser, toggleModal, resetUser, addCart, removeCart, toggleShipping} = controlSlice.actions;

export default controlSlice.reducer;

