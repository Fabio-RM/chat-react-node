import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
});

axiosInstance.interceptors.response.use(
    (response) => { return response },
    (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const backendError = error.response.data as { message: string };
                return Promise.reject(backendError.message);
            } else {
                return Promise.reject('Network error');
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;