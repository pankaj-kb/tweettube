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
      className="font-['clash-display'] bg-[#0D1113] 
                  text-[#FBF9F9] lg:flex h-screen 
                  justify-center items-center"
    >
      <div className="lg:flex justify-center items-center border-[10px] border-opacity-85
       border-[#E8317E] h-[70%] w-[50%] rounded-[20px]"
      >
        <div className="lg:flex-1">
          <h1 className="text-[50px] font-extrabold w-[50%] ml-[30%] text-[#E8317E]">You seek great content</h1>
        </div>
        <div className="lg:flex-1 mr-[40px]">
          <form
            onSubmit={handleSubmit}
            className="lg:flex flex-col gap-[20px] items-center"
          >
            <Input
              type="email"
              name="email"
              value={formData.email.toLowerCase()}
              onChange={handleChange}
              placeholder="email"
              className="lg:h-[50px] bg-[#20242C] rounded-[10px] border-[2px] border-[#20242c]
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-[#E8317E] focus:border-[2px] hover:cursor-pointer focus:border-opacity-50"
            />
            <Input
              type="text"
              name="username"
              value={formData.username.toLowerCase()}
              onChange={handleChange}
              placeholder="username"
              className="lg:h-[50px] bg-[#20242C] rounded-[10px] border-[2px] border-[#20242c] 
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-[#E8317E] focus:border-[2px] hover:cursor-pointer focus:border-opacity-50"
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="lg:h-[50px] bg-[#20242C] rounded-[10px] border-[2px] border-[#20242c] 
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-[#E8317E] focus:border-[2px] hover:cursor-pointer focus:border-opacity-50"
            />
            <Button
              type="submit"
              name="password"
              className="bg-[#E8317E] opacity-90 hover:opacity-100 text-white mt-[20px] text-center rounded-[10px] h-[40px] w-[50%] text-[20px] hover:text-[#0E0F10] focus:border-none"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
