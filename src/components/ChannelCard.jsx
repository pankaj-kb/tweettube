/* eslint-disable react/prop-types */
function ChannelCard({ channel }) {
  return (
    <div
      className="overflow-hidden flex flex-col w-[300px] h-full
       bg-accentblack text-accentwhite transition-transform 
       transform-gpu hover:scale-105 cursor-pointer"
    >
     <div className="aspect-w-1 aspect-h-1">
        <img
          src={channel.avatar}
          alt="channel avatar"
          className="object-cover rounded-full"
        />
    </div>
      <div className="bg-accentgray flex flex-col pt-[2%] p-2">
        <h1 className="text-center font-medium text-[18px]">
          {channel.username}
        </h1>
        <button>Unsubscribe</button>
      </div>
    </div>
  );
}

export default ChannelCard;
