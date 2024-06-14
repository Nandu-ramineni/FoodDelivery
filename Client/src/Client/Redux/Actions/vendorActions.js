import axios from "axios";
import * as actionTypes from '../Constants/vendorConstant';
// const URL = "http://localhost:7000";
const URL = "https://fooddelivery-xe7w.onrender.com";

export const getVendors = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/vendor/getVendors`);
        dispatch({ type: actionTypes.Get_Vendors_Success, payload: data });
    } catch (e) {
        dispatch({ type: actionTypes.Get_Vendors_Failure, payload: e.message });
    }
};
