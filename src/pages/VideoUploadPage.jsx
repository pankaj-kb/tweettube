import { useRef, useState } from "react";
import { buttonClasses, fileInputClasses, inputClasses } from "../components/classesImporter";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function VideoUploadPage() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: null,
    thumbnailFile: null,
  });

  const [videoFile, setVideoFile] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleFileChange = () => {};

  const handleFileButtonClick = () => {};

  return (
    <div className="text-accentwhite">
      <form
        onSubmit={handleSubmit}
        className="lg:flex flex-col mr-[30px] gap-[20px] items-center mt-[15px]"
      >
        <Input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
          className={inputClasses}
        />
        <Input
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
          className={inputClasses}
        />
        <Input
          type="file"
          accept=".mkv, .mp4, .3gp"
          name="video"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <Input
          type="file"
          name="thumbnail"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />

        <Button onClick={handleFileButtonClick} className={fileInputClasses}>
          {videoFile ? "avatar added" : "Upload Avatar"}
        </Button>
        <Button className={buttonClasses} type="submit">
          upload Video
        </Button>
      </form>
    </div>
  );
}

export default VideoUploadPage;
