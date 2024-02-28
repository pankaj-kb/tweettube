/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef } from "react";

function VideoPlayer({ video }) {

  const videoRef = useRef()

  useEffect(() => {
    sendVideoView()
    videoRef.current.play();
  },[])

  const sendVideoView = async () => {
    try {
      const response = await axios.post(`view/${video._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return <video src={video.videoFile} ref={videoRef} controls className="w-[450px] h-[400px] md:w-screen"></video>;
}
export default VideoPlayer;
