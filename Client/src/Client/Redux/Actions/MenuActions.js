import axios from "axios";
import * as actionTypes from '../Constants/menuConstant';

const URL = "http://localhost:7000";

export const getMenuProducts = (firmId) => async(dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/product/${firmId}/products`);
        dispatch({type: actionTypes.Get_Menu_Success, payload: data});
    } catch (error) {
        dispatch({type: actionTypes.Get_Menu_Failure, payload: error.message});
    }
}