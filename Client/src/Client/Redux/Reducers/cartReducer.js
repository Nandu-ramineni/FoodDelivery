import * as actionTypes from "../Constants/cartConstant.js";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    currentRestaurant: null,
    error: null
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.Add_To_Cart_Success:
            const item = action.payload;
            const restaurantId = action.restaurantId;
            const existItem = state.cartItems.find(x => x._id === item._id);

            let updatedCartItems;
            if (existItem) {
                updatedCartItems = state.cartItems.map(x =>
                    x._id === existItem._id ? item : x
                );
            } else {
                updatedCartItems = [...state.cartItems, item];
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return {
                ...state,
                cartItems: updatedCartItems,
                currentRestaurant: restaurantId
            };

        case actionTypes.Add_To_Cart_Failure:
            return {
                ...state,
                error: action.payload
            };

        case actionTypes.Remove_From_Cart_Success:
            const filteredCartItems = state.cartItems.filter(x => x._id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));

            return {
                ...state,
                cartItems: filteredCartItems
            };

        case actionTypes.Update_Cart_Success:
            const updatedCart = state.cartItems.map(x =>
                x._id === action.payload.productId
                    ? { ...x, quantity: action.payload.quantity }
                    : x
            );

            localStorage.setItem('cartItems', JSON.stringify(updatedCart));

            return {
                ...state,
                cartItems: updatedCart
            };

        default:
            return state;
    }
};
