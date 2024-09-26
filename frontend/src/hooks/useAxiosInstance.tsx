import { useContext, useEffect } from "react";
import axiosInstance from "../api/axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const useAxiosInstance = () => {
    const { accessToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = axiosInstance.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
        
                if (error.response && error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    if (!accessToken) {
                        navigate('/login');
                        return Promise.reject(error);
                    }
        
                    try {
                        const { data } = await axiosInstance.post('/refresh-token', {}, { withCredentials: true });
                        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                        return axiosInstance(originalRequest);
                    } catch (refreshError) {
                        return Promise.reject(refreshError);
                    }
                }
        
                return Promise.reject(error);
            }
        );

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
        
    }, [accessToken, navigate]);
    
    
    return axiosInstance;
}

export default useAxiosInstance;
