import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/users',
    withCredentials: true,
});

export default axiosInstance;