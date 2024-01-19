import axios from "axios";
import { BASE_URL } from "../api/api";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/logout`, {});
      console.log("After response in Logout.");
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button className="bg-black" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
