/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";
function VideoPlayer({video}) {
  return (
    <div className="flex flex-col items-center">
    <ReactPlayer
      controls={true}
      url={video.videoFile}
      light={video.thumbnail}
      width="1000px"
      height="600px"
    />
    <div className="flex flex-col items-center">
        <h2>{video.title}</h2>
        <h2>{video.createdAt}</h2>
        <h2>views: {video.views}</h2>
        <h4>{video.description}</h4>
    </div>
    </div>
  );
}

export default VideoPlayer;
