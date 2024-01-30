/* eslint-disable react/prop-types */
function ChannelCard({ channel, onClick, clickToggle }) {
  return (
    <div
      className="overflow-hidden flex flex-col w-[275px] h-[275px] bg-accentblack 
    text-accentwhite transition-transform transform-gpu cursor-pointer gap-[20px]"
    >
      <img
        src={channel.avatar}
        alt="channel avatar"
        className="object-cover rounded-full h-[90%] w-[90%]"
      />
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="text-center font-semibold text-[18px]">
          {channel.username}
        </h1>
        <button
          onClick={onClick}
          className={`text-accentwhite font-semibold rounded-lg w-[50%] h-[40px] ${
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
