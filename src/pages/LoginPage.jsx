import { useEffect, useState } from "react";
import axios from "../axiosConfig.js";
import { login } from "../features/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

const LoginPage = () => {
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
      <div className="flex-1 flex bg-[#E8317E] items-center justify-center">
        <div className="flex h-[70%] justify-center items-center bg-[#0D1113] rounded-[10px] text-[#E8317E]">
          <h1 className="text-[80px] font-extrabold w-[40%]">
            You seek great content
          </h1>
        </div>
        {/* <img src="/login-img.png" alt="login-img" 
        className="h w-auto" /> */}
      </div>
      <div className="flex-1 flex h-full justify-center items-center">
        <h1>Kindly Login</h1>
        <form onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start gap-[20px]">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button className="bg-black text-white"
          type="submit" name="password">
            Login
          </Button>
          <h4>forgot password</h4>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
