/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function TweetCard({ avatar, tweetText, ownerUsername, ownerName }) {
  return (
    <div
      className="bg-accentgray flex flex-col
    w-[300px] h-[50%] border-[2px]
     border-accentpink rounded-xl p-8 cursor-pointer gap-[20px] border-opacity-50 overflow-hidden transition-transform 
     transform-gpu hover:scale-110"
    >
      <div className="flex items-center content-center 
      gap-[20px] cursor-pointer border-b-2 border-accentpink pb-3">
        <img
          src={avatar}
          alt="user-avatar"
          className="w-[10%] object-contain rounded-full"
        />
        <div className="flex flex-col">
        <h6 className="font-bold">{ownerName}</h6>
        <span className="text-[85%]">@{ownerUsername}</span>
        </div>
      </div>
      <div className="flex flex-col items-start content-start">
        <h3 className="text-start font-medium text-[15px]">
          {tweetText}....
        </h3>
      </div>
      {/* later approach */}
      {/* <div className="flex flex-col items-center">
        <div className="flex gap-[50%] justify-center items-center">
          <button>Like</button>
          <h6 className="text-accentpink text-[15px]">10</h6>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-accentblack h-[40px] border-[1px] border-accentpink font-semibold"
          />
          <button className="bg-accentpink border-[2px] border-accentpink rounded-lg font-medium">Comment</button>
        </div>
      </div> */}
    </div>
  );
}

export default TweetCard;
