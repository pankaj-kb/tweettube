import { useEffect, useRef, useState } from "react";
import axios from "../axiosConfig.js";
import { login } from "../features/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import Logo from "../components/Logo.jsx";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.status);
  const [buttonText, setButtonText] = useState("Login");

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

    setButtonText("trying...");

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
      className="bg-accentblack 
                  text-accentwhite lg:flex h-screen 
                  justify-center items-center"
    >
      <Logo
        className={
          "lg:absolute top-[5%] text-[50px] hover:cursor-pointer text-accentpink font-semibold"
        }
        spanClassName={
          "hover:text-accentwhite border-b-[2px] border-b-accentblack hover:border-accentpink"
        }
      />
      <div
        className="lg:flex justify-center items-center border-[10px] border-opacity-55
       border-accentpink h-[70%] w-[50%] rounded-[20px]"
      >
        <div className="lg:flex-1">
          <h1 className="text-[50px] font-extrabold ml-[30%] text-accentpink whitespace-normal">
            <span className="block">You</span>
            <span className="block">seek</span>
            <span className="block">great</span>
            <span className="block">content</span>
          </h1>
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
              className="lg:h-[50px] bg-accentgray rounded-[10px] border-[2px] border-accentgray
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-accentpink focus:border-[2px] hover:cursor-pointer focus:border-opacity-50 hover:border-accentpink"
            />
            <Input
              type="text"
              name="username"
              value={formData.username.toLowerCase()}
              onChange={handleChange}
              placeholder="username"
              className="lg:h-[50px] bg-accentgray rounded-[10px] border-[2px] border-accentgray 
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-accentpink focus:border-[2px] hover:cursor-pointer focus:border-opacity-50 hover:border-accentpink"
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="lg:h-[50px] bg-accentgray rounded-[10px] border-[2px] border-accentgray 
            w-[100%] text-center text-[20px] focus:outline-none 
            focus:border-accentpink focus:border-[2px] hover:cursor-pointer focus:border-opacity-50 hover:border-accentpink"
            />
            <Button
              type="submit"
              name="password"
              className="bg-accentpink opacity-90 hover:opacity-100 text-accentwhite mt-[20px] text-center rounded-[10px] h-[40px] w-[50%] text-[20px] hover:text-accentblack focus:border-none"
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
