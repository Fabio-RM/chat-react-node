import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { accessToken } = useContext(AuthContext);
    
    if (!accessToken) {
        <Navigate to="/login" replace/>;
    }

    return children;
};

export default ProtectedRoute;