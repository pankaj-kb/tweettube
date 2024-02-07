/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import OwnerTile from "../components/OwnerTile.jsx";

function VideoData({ videoId }) {
  const [video, setVideo] = useState([]);
  const [owner, setOwner] = useState("");
  const [relativeTime, setRelativeTime] = useState("Decades to come");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`/video/${videoId}`);
        const responseData = response.data.data;
        setVideo(responseData);
        setOwner(responseData.owner);

        const date = parseISO(responseData.createdAt);
        setRelativeTime(formatDistanceToNow(date, { addSuffix: true }));
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [videoId]);

  return (
    <div
      className="text-accentwhite flex flex-col items-center
     p-8 overflow-hidden rounded-lg"
    >
      <div className="flex flex-col">
        <VideoPlayer video={video} />
        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-semibold text-start pt-2">
            {video.title}
          </h2>
          <div className="flex gap-4 text-[16px] font-light">
            <h2>{relativeTime}</h2>
            <h2>views: {video.views}</h2>
          </div>
          <div className="flex flex-col pt-2 items-start content-center gap-4">
            <div className="flex gap-4 items-center cursor-pointer py-2">
              <OwnerTile
                avatar={owner?.avatar}
                ownerName={owner?.fullName}
                ownerUsername={owner?.username}
                ownerId={owner?._id}
                avatarClass={"h-[50px] rounded-full object-contain"}
                infoDivClass={"flex flex-col"}
                fullNameClass={"text-[18px] font-semibold"}
                usernameClass={"text-[13px] font-light"}
                showButton={true}
                buttonClass={
                  "p-2 ml-6 w-[110px] rounded-md font-semibold text-center"
                }
              />
            </div>
            <div>
              <h4 className="text-[18px] font-light">{video.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoData;
