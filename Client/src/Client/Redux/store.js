
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getVendorsReducer } from "./Reducers/vendorReducer";
import { getMenuReducer } from './Reducers/menuReducers';
import { cartReducer } from './Reducers/cartReducer';
import { getInvoiceReducer, getOrdersReducer, } from './Reducers/orderReducer';


const reducer = combineReducers({
    getVendors: getVendorsReducer,
    getMenu: getMenuReducer,
    getCart: cartReducer,
    getOrders: getOrdersReducer,
    getInvoice: getInvoiceReducer,
})
const middleware= [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;