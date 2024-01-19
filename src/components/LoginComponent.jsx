import { useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
const LoginComponent = () => {
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
    console.log(formData);

    axios.defaults.baseURL = BASE_URL;
    axios.defaults.withCredentials = true;

    try {
      const response = await axios.post(`/users/login`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("login Failed: ", error.response.data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
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
  );
};

export default LoginComponent;
