import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin == "true" ?  children : <Navigate to="/login" replace />
};


export const PublicRoute = ({children}) => {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin == "true" ?  <Navigate to="/" replace /> : children 
};
