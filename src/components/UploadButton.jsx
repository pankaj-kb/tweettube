import { useState } from "react";
import { FaPlusCircle, FaVideo } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import Tooltip from "./ToolTip";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

function UploadButton() {

  const navigate = useNavigate()

  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const UploadPage = (type) => {
    console.log(type);
    navigate(`/upload/${type}`)
  };
  return (
    <>
      <Tooltip text={"upload"}>
        <BsUpload
          className="text-accentpink text-[50px] cursor-pointer"
          onClick={handleExpand}
        />
      </Tooltip>

      {expand ? (
        <div className="flex justify-center items-center z-50 gap-8 absolute bottom-[100px]">
          <Tooltip text={"video"}>
            <FaVideo
              onClick={() => UploadPage("video")}
              className="text-accentwhite hover:text-accentpink focus:text-accentpink text-[30px] cursor-pointer"
            />
          </Tooltip>
          <Tooltip text={"tweet"}>
            <PiBirdFill
              onClick={() => UploadPage("tweet")}
              className="text-accentwhite hover:text-accentpink focus:text-accentpink text-[30px] cursor-pointer"
            />
          </Tooltip>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default UploadButton;
