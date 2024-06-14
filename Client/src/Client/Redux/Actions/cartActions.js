import axios from "axios";
import * as actionTypes from "../Constants/cartConstant.js";

// const URL = "http://localhost:7000";
const URL = "https://fooddelivery-xe7w.onrender.com";

export const addToCart = (productId, quantity, restaurantId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${productId}`);
        dispatch({
            type: actionTypes.Add_To_Cart_Success,
            payload: { ...data, quantity },
            restaurantId: restaurantId 
        });
    } catch (error) {
        dispatch({
            type: actionTypes.Add_To_Cart_Failure,
            payload: error.message
        });
    }
};

export const removeFromCart = (productId) => (dispatch) => {
    dispatch({
        type: actionTypes.Remove_From_Cart_Success,
        payload: productId
    });
};

export const updateCart = (productId, quantity) => (dispatch) => {
    dispatch({
        type: actionTypes.Update_Cart_Success,
        payload: { productId, quantity }
    });
}