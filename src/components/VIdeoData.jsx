/* eslint-disable react/prop-types */
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import OwnerTile from "../components/OwnerTile.jsx";
import { FaShareAlt } from "react-icons/fa";
import LikeView from "../components/LikeView";
import CommentForm from "./CommentForm.jsx";

function VideoData({ videoId }) {
  const [video, setVideo] = useState({});
  const [owner, setOwner] = useState({});
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

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
                owner={owner}
                avatarClass={"h-[50px] rounded-full object-contain"}
                infoDivClass={"flex flex-col"}
                fullNameClass={"text-[18px] font-semibold"}
                usernameClass={"text-[13px] font-light"}
                showButton={true}
                buttonClass={
                  "p-2 ml-6 w-[110px] rounded-md font-semibold text-center"
                }
              />
              <div className="flex gap-6 items-center px-2">
                <LikeView
                  postId={video._id}
                  postType={"video"}
                  likeClass={"text-[22px] hover:cursor-pointer"}
                />
                <FaShareAlt
                  onClick={handleCopyLink}
                  className="text-[22px] focus:text-accentpink
         hover:text-accentpink hover:cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h4 className="text-[18px] font-light">{video.description}</h4>
            </div>
            <div className="text-accentwhite flex gap-4 items-center">
              <CommentForm
                postId={video._id}
                postType={"v"}
                inputClassName={
                  "p-1 bg-accentgray font-medium text-[18px] w-[700px] h-[130%] text-start focus:outline-none border-2 border-accentblack focus:border-accentpink hover:border-accentpink rounded-md"
                }
                buttonClasses={
                  "bg-accentgray focus:bg-accentpink hover:bg-accentpink text-center rounded-md font-semibold h-[100%] p-1"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoData;
