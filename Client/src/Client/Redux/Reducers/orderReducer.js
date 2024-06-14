// Reducers/orderReducer.js
import * as actionTypes from '../Constants/orderConstant';

const initialState = {
    orders: [],
    error: null
};

export const getOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return { ...state, orders: action.payload, error: null };
        case actionTypes.GET_ORDERS_FAIL:
            return { ...state, error: action.payload, orders: [] };
        default:
            return state;
    }
};

export const getInvoiceReducer = (state = { invoice: null, error: null }, action) => {
    switch (action.type) {
        case actionTypes.GET_INVOICE_SUCCESS:
            return { ...state, invoice: action.payload, error: null };
        case actionTypes.GET_INVOICE_FAIL:
            return { ...state, error: action.payload, invoice: null };
        default:
            return state;
    }
};
