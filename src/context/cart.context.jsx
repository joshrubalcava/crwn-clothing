// import { createContext, /* useState, useEffect, */ useReducer } from 'react';
//
// import { createAction } from '../utils/reducer/reducer.utils';

// const addCartItem = (cartItems, productToAdd) => {
//   // find if cartItems contains productToAdd
//   const existingCartItem = cartItems.find((
//     cartItem) => cartItem.id === productToAdd.id
//   );
//
//   // If found, increment quantity
//   if (existingCartItem) {
//     return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     );
//   }
//
//   // return new array with modified cartItems / new cart item
//   return [...cartItems, { ...productToAdd, quantity: 1, }];
// }
//
// const removeItemInCart = (cartItems, cartItemToRemove) => {
//   // find cart item to remove
//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
//
//   // check if quantity is equal to 1. if it is, remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }
//
//   return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//   );
// }
//
// const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   removeCartItem: () => {},
//   clearItemFromCart: () => {},
//   total: 0,
// });
//
// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS : 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN : 'SET_IS_CART_OPEN',
// }
//
// const INITIAL_STATE = {
//   isCartOpen : false,
//   cartItems : [],
//   cartCount : 0,
//   cartTotal : 0,
// }
//
// const cartReducer = (state, action) => {
//   const { type, payload } = action;
//
//   switch(type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       }
//
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen : payload,
//       }
//
//     default:
//       throw new Error(`unhandled type of ${type} in cartReducer`);
//   }
// }
//
// export const CartProvider = ({ children }) => {
//
//   const [ { isCartOpen,cartItems, cartCount, cartTotal }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
//
//   const updateCartItemsReducer = (newCartItems) => {
//     // generate newCartCount
//     const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//
//     // generate newCartTotal
//     const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
//
//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems : newCartItems,
//         cartCount : newCartCount,
//         cartTotal : newCartTotal,
//       })
//     );
//   };
//
//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   }
//
//   const removeCartItem = (cartItemToRemove) => {
//     const newCartItems = removeItemInCart(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   }
//
//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   }
//
//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   }
//
//   const value = { isCartOpen, setIsCartOpen, addItemToCart, removeCartItem, clearItemFromCart, cartItems, cartCount, cartTotal };
//
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }

// USE WHEN CREATING CONTEXT
// const [ isCartOpen, setIsCartOpen ] = useState(false);
// const [ cartItems, setCartItems ] = useState([]);
// const [ cartCount, setCartCount ] = useState(0);
// const [ cartTotal, setCartTotal ] = useState(0);



// USE WHEN CREATING CONTEXT
// useEffect(() => {
//   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//   setCartCount(newCartCount);
// }, [cartItems]);
//
// useEffect(() => {
//   const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
//   setCartTotal(newCartTotal);
// }, [cartItems]);