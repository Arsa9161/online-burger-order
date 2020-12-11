import axios from "axios";

const instance = axios.create({
    baseURL: 'https://online-burger-order-ad12d-default-rtdb.europe-west1.firebasedatabase.app/'
}) 
export default instance;