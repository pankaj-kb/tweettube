/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

function VideoPlayer({ video }) {
  return (
    <ReactPlayer
      controls={true}
      url={video.videoFile}
      light={video.thumbnail}
      width="1080px"
      height="600px"
    />
  );
}

export default VideoPlayer;
