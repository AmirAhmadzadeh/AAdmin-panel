<<<<<<< HEAD



import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/admin"
});

=======
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/admin"
});
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6


export default axiosInstance; 