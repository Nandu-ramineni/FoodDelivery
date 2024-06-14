import axios from "axios";
// const URL = "http://localhost:7000";
const URL = "https://fooddelivery-xe7w.onrender.com";
// export const API_URL = "http://localhost:7000"
export const API_URL = "https://fooddelivery-xe7w.onrender.com"
export const authenticateSignUp = async(data,token) => {
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        return await axios.post(`${URL}/vendor/signup`,data,config);
    } catch (error) {
        console.log("Error while calling Signup api",error);
    }
}

export const authenticateLogin = async(data,token) =>{
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.post(`${URL}/vendor/login`,data,config);
        return response;
    } catch (error) {
        console.log("Error while calling Login api",error);
    }
}
export const addYourFirm = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const config = { 
            headers: { 
                'token': token,
            } 
        };
        const response = await axios.post(`${URL}/firm/addFirm`, data, config);
        return response.data;
    } catch (error) {
        console.log("Error while calling addFirm api", error);
    }
}

export const addFirmProduct = async(data) => {
    try {
        const firmId = localStorage.getItem('vendorFirmId');
        const response = await axios.post(`${URL}/product/addProduct/${firmId}`,data);
        return response.data;
    } catch (error) {
        console.log("Error while calling addProduct api",error);
    }
}

export const getProducts = async() =>{
    try {
        const firmId = localStorage.getItem('vendorFirmId');
        const response = await axios.get(`${URL}/product/${firmId}/products`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getProducts api",error);
    }
}

export const deleteProductById = async(productId) => {
    try {
        const response = await axios.delete(`${URL}/product/${productId}`);
        return response;
    } catch (error) {
        console.log("Error while calling deleteProduct api",error);
    }
}

export const getOrders = async() => {
    const firmId = localStorage.getItem('vendorFirmId');
    try {
        const response = await axios.get(`${URL}/order/getOrdersByFirm/${firmId}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getOrders api",error);
    }
}

export const updateOrderStatus = async(orderId,status) => {
    try {
        const response = await axios.put(`${URL}/order/updateStatus/${orderId}`,{status});
        return response.data;
    } catch (error) {
        console.log("Error while calling updateOrder api",error);
    }
}

export const generateInvoice = async(orderId) => {
    try {
        const response = await axios.post(`${URL}/order/${orderId}/generate-invoice`);
        return response.data;
    }catch (error) {
        console.log("Error while calling generateInvoice api",error);
    }
}

export const downloadInvoice = async(orderId) => {
    try {
        const response = await axios.get(`${URL}/order/${orderId}/invoice`,{responseType: 'blob'});
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `invoice-${orderId}.pdf`);
        document.body.appendChild(link);
        link.click();
    }catch (error) {
        console.log("Error while calling downloadInvoice api",error);
    }
}