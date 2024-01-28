/* eslint-disable react/prop-types */
function VideoCard({ video }) {
  const videoSeconds = video.time;
  const minutes = Math.floor(videoSeconds / 60);
  const remSeconds = videoSeconds % 60;
  const videoTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    remSeconds < 10 ? "0" : ""
  }${Math.floor(remSeconds)}`;

  return (
    <div
      className="bg-accentg overflow-hidden flex flex-col w-[300px] h-full
     bg-accentblack text-accentwhite transition-transform 
     transform-gpu hover:scale-105 cursor-pointer rounded-xl"
    >
      <div className="flex flex-col object-contain">
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
        <h1 className="text-center font-medium text-[18px]">{video.title}</h1>
        <div className="flex justify-start items-center gap-2.5">
          <img
            src={video.owner.avatar}
            alt="channel avatar"
            className="w-[10%] rounded-full object-cover"
          />
          <h2 className="font-medium text-center">{video.owner.username}</h2>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
