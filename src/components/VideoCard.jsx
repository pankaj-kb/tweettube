import { useNavigate } from "react-router-dom";
import OwnerTile from "./OwnerTile";

/* eslint-disable react/prop-types */
function VideoCard({ video, owner }) {
  const videoSeconds = video.time;
  const minutes = Math.floor(videoSeconds / 60);
  const remSeconds = videoSeconds % 60;
  const videoTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    remSeconds < 10 ? "0" : ""
  }${Math.floor(remSeconds)}`;

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/video/${video._id}`);
  };

  // const owner = video.owner
  // console.log("from line 21 VideoCard: ", owner);

  const truncateTitle = (title, maxWords) => {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return title;
  };

  const truncatedTitle = truncateTitle(video.title, 3);

  return (
    <div
      className="overflow-hidden flex flex-col w-screen md:w-[18%] md:h-[230px]
     bg-accentblack text-accentwhite transition-transform 
     transform-gpu hover:scale-105 cursor-pointer rounded-xl border-b-2 border-accentpink border-opacity-60"
    >
      <div className="flex flex-col object-contain" onClick={handleOnClick}>
        <img
          src={video?.thumbnail}
          alt="video thumbnail"
          className="object-contain w-full h-[150px]"
        />
        <span
          className="bg-accentgray font-medium h-[20px] w-[15%] 
        text-center rounded-md text-[12px] mt-[-30px] ml-auto"
        >
          {videoTime}
        </span>
      </div>
      <div className="bg-accentgray flex flex-col pt-[2%] p-2">
        <h1 className="text-center font-medium text-[18px]">
          {truncatedTitle}
        </h1>
        <div className="flex justify-start items-center gap-2.5">
          <OwnerTile
            owner={owner}
            mainDivClass={"flex gap-4 items-center cursor-pointer"}
            avatarClass={"h-[50px] w-[50px] rounded-full object-contain"}
            infoDivClass={"flex flex-col"}
            fullNameClass={"text-[18px] font-semibold"}
            usernameClass={"text-[13px] font-light"}
            showButton={false}
            buttonClass={
              "p-2 ml-6 w-[110px] rounded-md font-semibold text-center"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
