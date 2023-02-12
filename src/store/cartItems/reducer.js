import { ADD_TO_CART, DELETE_FROM_CART } from "./actions"
const initialState = {
    cartItems: []
}

export const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_TO_CART): {
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        }
        case(DELETE_FROM_CART): {
            return {
                ...state,
                cartItems: state.cartItems.filter(({id})=> id !== action.payload)   
            }
        }
        default: {
            return state;
        }
    }
}