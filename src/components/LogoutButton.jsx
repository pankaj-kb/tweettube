import axios from "../axiosConfig.js";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`/users/logout`, {});
      console.log(response.data);
      if (response.statusCode === 200) {
        dispatch(logout);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button className="bg-black" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
