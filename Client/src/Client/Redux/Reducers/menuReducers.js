import * as actionTypes from '../Constants/menuConstant';

export const getMenuReducer = (state = { menu: [] }, action) => {
    switch (action.type) {
        case actionTypes.Get_Menu_Success:
            return { menu: action.payload };
        case actionTypes.Get_Menu_Failure:
            return { error: action.payload };
        default:
            return state;
    }
}