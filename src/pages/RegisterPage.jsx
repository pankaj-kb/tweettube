import { useState } from "react";
import axios from "../axiosConfig.js";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    avatar: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
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
    <div className="bg-black text-blue-800 h-screen w-screen">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
        <Button disabled={!selectedFile} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;