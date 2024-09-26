import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosInstance from "../hooks/useAxiosInstance";


interface AuthData {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    accessToken: string | null;
}


const AuthContext = createContext<AuthData>({
    login: async () => Promise.resolve(),
    logout: () => {},
    accessToken: null,
});


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const axiosInstance = useAxiosInstance();
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        const checkAccessToken = async () => {
            try {
                const response = await axiosInstance.post('/refresh-token', {}, { withCredentials: true });
                setAccessToken(response.data.accessToken);
            } catch (error) {
                console.error('Failed to refresh access token', error);
            }
        };
        
        checkAccessToken();
    }, [axiosInstance]);


    const login = async(email: string, password: string) => {
        try {
            const response = await axiosInstance.post('/login', { email, password }, { withCredentials: true });
            setAccessToken(response.data.accessToken);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }


    const logout = async () => {
        try {
            await axiosInstance.post('/logout', {}, { withCredentials: true });
            setAccessToken(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        } 
    }


    return (
        <AuthContext.Provider value={{ accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;