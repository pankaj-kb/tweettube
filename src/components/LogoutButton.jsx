/* eslint-disable react/prop-types */
import axios from "../axiosConfig.js";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogoutButton({ type, children, className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/users/logout`, {});
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (response.data.statusCode === 200) {
        dispatch(logout());
        navigate("/login");
      }
      // console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className={className} onClick={handleLogout} type={type}>
      {children}
    </div>
  );
}

export default LogoutButton;
