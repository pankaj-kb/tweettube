import { useRef, useState } from "react";
import axios from "../axiosConfig.js";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import Logo from "../components/Logo.jsx";
import {
  buttonClasses,
  inputClasses,
  fileInputClasses,
  disabledButtonClasses,
} from "../components/classesImporter.js";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // handling files here
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
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

    if (!selectedFile) {
      console.log("kindly upload avatar.");
    }

    const formDataWithFile = new FormData();
    formDataWithFile.append("fullName", formData.fullName);
    formDataWithFile.append("email", formData.email);
    formDataWithFile.append("username", formData.username);
    formDataWithFile.append("password", formData.password);
    formDataWithFile.append("avatar", selectedFile);

    try {
      const response = await axios.post("/users/register", formDataWithFile);
      console.log(response.data);
      setFormData({
        fullName: "",
        email: "",
        username: "",
        password: "",
        avatar: null,
      });
    } catch (error) {
      console.error(error.message);
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
          <h1 className="text-[50px] font-extrabold ml-[20%] text-accentpink whitespace-normal">
            <span className="block">Your</span>
            <span className="block">adventure</span>
            <span className="block">begins</span>
            <span className="block">here</span>
          </h1>
        </div>
        <div className="lg:flex-1">
          <form
            onSubmit={handleSubmit}
            className="lg:flex flex-col mr-[30px] gap-[20px] items-center mt-[15px]"
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
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
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
            <Button onClick={handleFileButtonClick} 
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
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
