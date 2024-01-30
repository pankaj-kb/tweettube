/* eslint-disable react/prop-types */
function ChannelCard({ channel, onClick, clickToggle }) {
  return (
    <div
      className="overflow-hidden flex flex-col w-[30%] h-auto bg-accentblack
    text-accentwhite transition-transform transform-gpu cursor-pointer gap-[20px] items-center"
    >
      <img
        src={channel.avatar}
        alt="channel avatar"
        className="object-cover rounded-full w-[40%]"
      />
      <div className="flex flex-col gap-[10px] items-center">
        <h1 className="text-center font-semibold text-[18px]">
          {channel.username}
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
