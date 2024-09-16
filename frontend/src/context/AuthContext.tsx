import { createContext, useState } from "react";

interface AuthData {
    email: string;
    password: string;
    token: string;
}

interface AuthContextType {
    auth: AuthData | null;
    setAuth: (authData: AuthData) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState<AuthData | null>(null);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;