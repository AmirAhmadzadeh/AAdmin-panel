import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/admin"
});


export default axiosInstance;
