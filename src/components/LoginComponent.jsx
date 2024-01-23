import { useEffect, useState } from "react";
import axios from "../axiosConfig.js";
import { login } from "../features/authSlice";
import { useSelector, useDispatch } from "react-redux";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("/users/current-user");
        console.log(response);
        if (response.data.statusCode === 200) {
          dispatch(login(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
    if (loginStatus) console.log("already logged in");
  }, [dispatch, loginStatus]);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/users/login`, formData);
      console.log(response.data);
      if (response.data.statusCode === 200) {
        dispatch(login(response.data));
      }
    } catch (error) {
      console.error("login Failed: ", error.response.data);
    }
  };

  return (
    <div
      className="font-['clash-display'] bg-[#0D1113] text-[#FBF9F9]
    lg:flex h-screen"
    >
      <div className="flex-1 bg-[#E8317E]"></div>
      <div className="flex-1 flex h-full justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-[20px]"
        >
          <label>
            email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className="bg-black text-white" type="submit">
            Login
          </button>
          <h4>forgot password</h4>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
