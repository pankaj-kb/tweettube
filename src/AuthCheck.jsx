/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthCheck = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthCheck;
