import { useRef, useState } from "react";
import { buttonClasses, fileInputClasses } from "../components/classesImporter";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VideoUploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: "",
    thumbnailFile: "",
  });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const [uploadText, setUploadText] = useState("Upload Video");

  const navigate = useNavigate();

  const videoFileInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  const handleVideoUploadClick = (e) => {
    e.preventDefault();
    videoFileInputRef.current.click();
  };

  const handleThumbnailUploadClick = (e) => {
    e.preventDefault();
    thumbnailInputRef.current.click();
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    setSelectedThumbnail(file);
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
    setUploadText("uploading....");

    const formDataWithFile = new FormData();

    formDataWithFile.append("title", formData.title);
    formDataWithFile.append("description", formData.description);
    formDataWithFile.append("videoFile", selectedVideo);
    formDataWithFile.append("thumbnailFile", selectedThumbnail);

    try {
      const response = await axios.post(`/video/publish`, formDataWithFile);
      console.log(response);
      if (response.data.statusCode === 200) {
        navigate(`/`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start p-6 gap-6"
      >
        <Input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
          className="bg-accentgray text-accentwhite font-medium 
    rounded-md text-[20px] border-2 p-2
    border-accentpink focus:outline-none focus:shadow-2
    focus:shadow-accentpink text-start h-[50px] w-[500px]"
        />
        <textarea
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-accentgray text-accentwhite font-medium 
    rounded-md text-[20px] border-2 p-2
    border-accentpink focus:outline-none focus:shadow-2
    focus:shadow-accentpink text-start resize-none h-[300px] w-[500px]"
        />
        <input
          type="file"
          name="videoFile"
          accept=".mkv, .mp4, .3gp"
          onChange={handleVideoUpload}
          className="hidden"
          ref={videoFileInputRef}
          value={formData.videoFile}
        />
        <input
          type="file"
          name="thumbnailFile"
          accept=".jpg, .jpeg, .png"
          onChange={handleThumbnailUpload}
          className="hidden"
          ref={thumbnailInputRef}
          value={formData.thumbnailFile}
        />

        <Button onClick={handleVideoUploadClick} className={fileInputClasses}>
          {selectedVideo ? "video added" : "Upload video"}
        </Button>
        {selectedVideo ? (
          <video
            src={URL.createObjectURL(selectedVideo)}
            className="h-[20%]"
            controls
          ></video>
        ) : (
          ""
        )}
        <Button
          className={fileInputClasses}
          onClick={handleThumbnailUploadClick}
        >
          {selectedThumbnail ? "thumbnail added" : "Upload thumbnail"}
        </Button>
        {selectedThumbnail ? (
          <img
            src={URL.createObjectURL(selectedThumbnail)}
            className="h-[120px]"
          />
        ) : (
          ""
        )}

        <Button
          className="text-accentwhite font-medium text-[20px] bg-accentgray p-2 
        rounded-md hover:bg-accentpink disabled:cursor-not-allowed"
          type="submit"
        >
          {uploadText}
        </Button>
      </form>
    </>
  );
}

export default VideoUploadPage;
