import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoPage() {
  const { videoId } = useParams();
  const [video, setVideo] = useState([])

  useEffect(() => {
    const fetchVideo = async () => {
        const response = await axios.get(`/video/${videoId}`)
        // console.log(response)
        const responseData = response.data.data;
        console.log(responseData)
        setVideo(responseData)
    }
    fetchVideo()
  }, [videoId]);

  return (
    <div className="text-accentwhite">
      <VideoPlayer video={video}/>
    </div>
  );
}

export default VideoPage;
