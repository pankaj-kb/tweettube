import { useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
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

    try {
      const response = await axios.post(`${BASE_URL}/users/login`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("login Failed: ", error.response.data);
    }
  };
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h1>Hey explorer!</h1>
        <h2>Login please</h2>
        <form action="submit">
          <label htmlFor="email">
            email
            <input
              type="email"
              name="email"
              value={formData.email}
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
          <button
            className="bg-black text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
          <h4>forgot password</h4>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
