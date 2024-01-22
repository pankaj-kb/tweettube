import { useState } from "react";
import axios from "../axiosConfig.js"

const RegisterComponent = () => {

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
        fullName: '',
        email: '',
        username: '',
        password: '',
        avatar: null,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-black text-blue-800 h-screen w-screen">
      <form onSubmit={handleSubmit}>
        <label>
          fullName
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
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

        <label>
          Select a file:
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
          />
        </label>

        <button disabled={!selectedFile} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
