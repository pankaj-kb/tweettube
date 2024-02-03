import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ChannelCard({ channel, onClick, clickToggle }) {
  const navigate = useNavigate();

  const handleProfileCLick = () => {
    navigate(`/profile/${channel.username}`);
  };
  return (
    <div
      className="overflow-hidden flex flex-col w-[30%] h-auto bg-accentblack
    text-accentwhite transition-transform transform-gpu gap-[20px] items-center"
    >
      <img
        src={channel.avatar}
        alt="channel avatar"
        className="object-cover rounded-full w-[40%] cursor-pointer"
        onClick={handleProfileCLick}
      />
      <div className="flex flex-col gap-[10px] items-center">
        <h1
          className="text-center font-semibold text-[18px] cursor-pointer"
          onClick={handleProfileCLick}
        >
          {channel.fullName}
        </h1>
        <h1
          className="text-center font-semibold text-[14px] cursor-pointer"
          onClick={handleProfileCLick}
        >
          @{channel.username}
        </h1>
        <button
          onClick={onClick}
          className={`text-accentwhite text-center font-semibold rounded-lg w-[150%] h-auto ${
            clickToggle ? "bg-accentpink" : "bg-accentgray"
          } `}
        >
          {!clickToggle ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    </div>
  );
}

export default ChannelCard;
