import { Navigate } from "react-router-dom";

const protectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn ? children :
        <Navigate to="/emd-login" replace />;
};

export default protectedRoute;