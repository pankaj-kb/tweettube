/* eslint-disable react/prop-types */
function VideoCard({ video }) {
  return (
    <div className="bg-accentg overflow-hidden flex flex-col w-[18%] bg-accentblack text-accentwhite transition-transform transform-gpu hover:scale-105 cursor-pointer">
      <div className="flex flex-col">
        <img
          src="https://img.youtube.com/vi/Y65jMDPx3JM/maxresdefault.jpg"
          alt="thumbnail"
          className="rounded-[5%] w-full object-cover"
        />
        <span className="bg-accentgray font-medium h-[100%] 
        text-center rounded-md text-[12px] mt-[-30px] ml-auto">
          56:08
        </span>
      </div>
      <div className="bg-accentgray rounded-md flex flex-col mt-[1%] p-2">
        <h1 className="text-center font-medium text-[18px]">
          VFX artist reacts
        </h1>
        <div className="flex justify-start items-center gap-2.5">
          <img
            src="https://yt3.googleusercontent.com/okRlBwXJN68DuPhHs_AaMlOHVwfnHWEL7is5lV3RTyYlJSDvOy58-q-OyCm5bSOU71csOHyaKQ=s900-c-k-c0x00ffffff-no-rj"
            alt="profile-pic"
            className="w-[10%] rounded-full object-cover"
          />
          <h2 className="font-light text-center">Corridor Digital</h2>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
