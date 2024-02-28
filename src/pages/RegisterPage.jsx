import { useRef, useState } from "react";
import axios from "../axiosConfig.js";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import Logo from "../components/Logo.jsx";
import { NavLink } from "react-router-dom";
import {
  buttonClasses,
  inputClasses,
  fileInputClasses,
  disabledButtonClasses,
} from "../components/classesImporter.jsx";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
  });

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  // handling files here
  const fileInputRef = useRef(null);

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("fullName", formData.fullName);
    formDataWithFile.append("email", formData.email);
    formDataWithFile.append("username", formData.username);
    formDataWithFile.append("password", formData.password);
    formDataWithFile.append("avatar", selectedFile);

    if (selectedFile) {
      try {
        const response = await axios.post("/users/register", formDataWithFile);
        if (response.data.statusCode === 200) {
          navigate("/login");
        }
        setFormData({
          fullName: "",
          email: "",
          username: "",
          password: "",
          avatar: null,
        });
        setSelectedFile(null);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div
      className="bg-accentblack 
                  text-accentwhite h-screen w-screen flex flex-col justify-center items-center border-[5px] border-opacity-60
       border-accentpink rounded-sm md:border-none"
    >
      <Logo
        className={
          "absolute top-2 left-5 text-[40px] hover:cursor-pointer text-accentpink font-semibold"
        }
        spanClassName={
          "hover:text-accentwhite border-b-[2px] border-b-accentblack hover:border-accentpink"
        }
      />
      <div className="flex md:flex-col md:gap-12">
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
              type="text"
              name="fullName"
              placeholder="full name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
            />
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email.toLowerCase()}
              onChange={handleChange}
              className={inputClasses}
            />
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username.toLowerCase()}
              onChange={handleChange}
              className={inputClasses}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />

            <Button
              onClick={handleFileButtonClick}
              className={fileInputClasses}
            >
              {selectedFile ? "avatar added" : "Upload Avatar"}
            </Button>

            <Button
              disabled={!selectedFile}
              type="submit"
              className={!selectedFile ? disabledButtonClasses : buttonClasses}
            >
              Register
            </Button>
          </form>
          <div className="flex gap-[20px] mt-[20px] justify-center">
            <h6 className="font-medium text-[15px] hover:cursor-pointer text-accentwhite hover:text-accentpink">
              forgot password ?
            </h6>
            <NavLink to="/login">
              <h6
                // onClick={() => navigate("/login")}
                className="font-medium text-[15px] hover:cursor-pointer text-accentwhite hover:text-accentpink"
              >
                already a user ?
              </h6>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
