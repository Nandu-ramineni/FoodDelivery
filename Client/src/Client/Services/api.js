import axios from "axios";

// const URI = "http://localhost:7000";
const URI = "https://fooddelivery-xe7w.onrender.com";
// export const URL = "http://localhost:7000"; 
export const URL = "https://fooddelivery-xe7w.onrender.com"; 

export const authenticateSignUp = async(data,token) => {
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        return await axios.post(`${URI}/user/signup`,data,config);
    } catch (error) {
        console.log("Error while calling Signup api",error);
    }
}

export const authenticateLogin = async(data,token) =>{
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.post(`${URI}/user/login`,data,config);
        return response;
    } catch (error) {
        console.log("Error while calling Login api",error);
    }
}

export const createOrder = async (orderData, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(`${URI}/order/create`, orderData, config);
    return response.data;
};

export const downloadInvoice = async(orderId) => {
    try {
        const response = await axios.get(`${URL}/order/${orderId}/invoice`,{responseType: 'blob'});
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `invoice-${orderId}.pdf`);
        document.body.appendChild(link);
        link.click();
        return response.data;
    }catch (error) {
        console.log("Error while calling downloadInvoice api",error);
    }
}

export const getUserProfile = async(userId) => {
    try {
        const response = await axios.get(`${URI}/user/profile/${userId}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getUserProfile api",error);
    }
}


export const initiatePayment = async (orderId, amount) => {
    try {
        const response = await axios.post(`${URI}/payments`, {
            orderId,
            amount
        });
        return response.data;
    } catch (error) {
        console.error('Error initiating payment:', error);
        throw error;
    }
};

export const validatePayment = async (paymentDetails) => {
    try {
        const response = await axios.post(`${URL}/payments/validate`, paymentDetails);
        return response.data;
    } catch (error) {
        console.error('Error validating payment:', error);
        throw error;
    }
};

export const sendPaymentDetails = async (orderId, paymentId, paymentStatus) => {
    try {
        const response = await axios.put(`${URL}/order/updateStatus/${orderId}`, {
            paymentId,
            paymentStatus
        });
        return response.data;
    } catch (error) {
        console.error('Error sending payment details:', error);
        throw error;
    }
};





// export const getRestaurants = async() =>{
//     try {
//         const response = await axios.get(`${URI}/vendor/getVendors`);
//         return response.data;
//     } catch (error) {
//         console.error("Error while calling getRestaurants API ", error);
//     }
// }