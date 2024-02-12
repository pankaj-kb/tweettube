/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import OwnerTile from "./OwnerTile";
import { useNavigate } from "react-router-dom";

function TweetCard({ tweet, owner }) {
  // console.log(owner)
  // console.log("tweet: ",tweet)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/tweet/${tweet._id}`);
  };

  return (
    <div
      className="bg-accentgray flex flex-col
      w-[300px] h-auto border-[2px]
     border-accentpink rounded-xl p-8 cursor-pointer gap-[20px] 
     border-opacity-50 overflow-hidden transition-transform 
     transform-gpu hover:scale-110"
    >
      <div
        className="flex items-center content-center 
      gap-[20px] cursor-pointer border-b-2 border-accentpink pb-3"
      >
        <OwnerTile
          owner={owner}
          mainDivClass={"flex gap-2 items-center cursor-pointer"}
          avatarClass={"h-[50px] w-[50px] rounded-full object-contain"}
          infoDivClass={"flex flex-col"}
          fullNameClass={"text-[15px] font-semibold"}
          usernameClass={"text-[10px] font-light"}
          showButton={false}
          buttonClass={"p-1 w-[90%] rounded-md font-semibold text-center"}
        />
      </div>
      <div
        onClick={handleClick}
        className="flex flex-col items-start content-start"
      >
        <h3 className="text-start font-medium text-[15px]">
          {tweet?.content}....
        </h3>
      </div>
    </div>
  );
}

export default TweetCard;
