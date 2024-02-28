import { useState } from "react";
import axios from "../axiosConfig.js";
import { login } from "../features/authSlice.js";
import { useDispatch } from "react-redux";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import Logo from "../components/Logo.jsx";
import { inputClasses, buttonClasses } from "../components/classesImporter.jsx";
import { useNavigate, NavLink } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Login");
  const navigate = useNavigate();

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
      console.log("response from LoginPage: ", response);
      if (response.data.statusCode === 200) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        dispatch(login(response.data.data.user));
        navigate("/");
      } else {
        console.error("Unexpected response:", response.data);
        setButtonText("failed");
      }
    } catch (error) {
      console.error("Login Failed: ", error);
      setButtonText("failed");
    }
  };

  return (
    <div
      className="bg-accentblack 
                  text-accentwhite h-screen w-screen flex flex-col justify-center items-center border-[5px] border-opacity-60
       border-accentpink rounded-sm md:border-none">
      <Logo className={ "absolute top-2 left-5 text-[40px] hover:cursor-pointer text-accentpink font-semibold"}
        spanClassName={"hover:text-accentwhite border-b-[2px] border-b-accentblack hover:border-accentpink"}
      />
      <div
        className="flex md:flex-col md:gap-12"
      >
        <div className="hidden md:flex md:flex-col">
          <h1 className="text-[50px] font-extrabold text-accentpink whitespace-normal">
           great content awaits
          </h1>
        </div>
        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <Input
              type="email"
              name="email"
              value={formData.email.toLowerCase()}
              onChange={handleChange}
              placeholder="email"
              className={inputClasses}
            />
            <Input
              type="text"
              name="username"
              value={formData.username.toLowerCase()}
              onChange={handleChange}
              placeholder="username"
              className={inputClasses}
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className={inputClasses}
            />
            <Button type="submit" name="password" className={buttonClasses}>
              {buttonText}
            </Button>
            <div className="flex flex-col gap-2 md:flex-row md:gap-[20px]">
              <h6 className="font-medium text-[18px] hover:cursor-pointer text-accentwhite hover:text-accentpink">
                forgot password ?
              </h6>
              <NavLink to="/register">
                <h6 className="font-medium text-[18px] hover:cursor-pointer text-accentwhite hover:text-accentpink">
                  new user ? register..
                </h6>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
