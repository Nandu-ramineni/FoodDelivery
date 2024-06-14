import * as actionTypes from '../Constants/vendorConstant';

export const getVendorsReducer = (state = { vendors: [] }, action) => {
    switch (action.type) {
        case actionTypes.Get_Vendors_Success:
            return { vendors: action.payload };
        case actionTypes.Get_Vendors_Failure:
            return { error: action.payload };
        default:
            return state;
    }
};
