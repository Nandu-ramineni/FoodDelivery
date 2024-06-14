
import axios from 'axios';
import * as actionTypes from '../Constants/orderConstant';

// const URL = "http://localhost:7000";
const URL = "https://fooddelivery-xe7w.onrender.com";

export const getOrders = (userId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/order/getOrdersByUser/${userId}`);
        dispatch({ type: actionTypes.GET_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_ORDERS_FAIL, payload: error.message });
    }
};

