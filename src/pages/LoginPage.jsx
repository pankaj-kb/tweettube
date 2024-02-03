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
        className="lg:flex justify-center items-center border-[5px] border-opacity-55
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
            <div className="flex gap-[20px]">
              <h6 className="font-medium text-[15px] hover:cursor-pointer text-accentwhite hover:text-accentpink">
                forgot password ?
              </h6>
              <NavLink to="/register">
                <h6 className="font-medium text-[15px] hover:cursor-pointer text-accentwhite hover:text-accentpink">
                  new user ? register
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
