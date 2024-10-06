import axios from "axios";
// const URL = "http://localhost:7000"
const URL = "https://fooddelivery-xe7w.onrender.com"
// export const API_URL = "http://localhost:7000"
export const API_URL = "https://fooddelivery-xe7w.onrender.com"
export const authenticateLogin = async(data,token) =>{
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.post(`${URL}/admin/login`,data,config);
        return response;
    } catch (error) {
        console.log("Error while calling Login api",error);
    }
}

export const getVendors = async(token) =>{
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.get(`${URL}/vendor/getVendors`,config);
        return response.data;
    }
    catch (error) {
        console.log("Error while calling getVendors api",error);
    }
}

export const getUsers = async(token) =>{
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.get(`${URL}/user/users`,config);
        return response.data;
    }catch (error) {
        console.log("Error while calling getUsers api",error);
    }
}

export const deleteFirmById = async(firmId,token) => {
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.delete(`${URL}/firm/${firmId}`,config)
        return response.data;
    } catch (error) {
        console.log("Error while calling deleteFirmById api",error);
    }
}

export const deleteUserById = async(userId,token) => {
    try {
        const config= {headers: {Authorization: `Bearer ${token}`}};
        const response = await axios.delete(`${URL}/user/delete/${userId}`,config)
        return response.data;
    } catch (error) {
        console.log("Error while calling deleteUserById api",error);
    }
}
