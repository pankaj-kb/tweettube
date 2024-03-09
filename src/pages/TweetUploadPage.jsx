import { useState } from "react";
import {
  buttonClasses,
  disabledButtonClasses,
} from "../components/classesImporter";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TweetUploadPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tweetContent: "",
  });

  const [contentExist, setContentExist] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/tweet/post/`, formData);
      console.log(response);
      setFormData({ tweetContent: "" });
    } catch (error) {
      console.error(error);
    } finally {
      contentExist ? navigate(`/tweets`) : "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    value.trim() === "" ? setContentExist(false) : setContentExist(true);
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-4">
      <textarea
        type="text"
        name="tweetContent"
        placeholder="Start typing ....."
        value={formData.tweetContent}
        onChange={handleChange}
        className="bg-accentgray text-accentwhite font-medium h-[400px] w-[80%] 
    rounded-md text-[20px] border-2 p-2
    border-accentpink focus:outline-none focus:shadow-2
    focus:shadow-accentpink text-start resize-none"
      />

      <button
        className="text-accentwhite font-medium text-[20px] bg-accentgray p-2 
        rounded-md hover:bg-accentpink disabled:cursor-not-allowed"
        type="submit"
        disabled={!contentExist}
        onClick={handleSubmit}
      >
        Upload Tweet
      </button>
    </div>
  );
}

export default TweetUploadPage;
