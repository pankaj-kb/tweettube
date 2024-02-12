/* eslint-disable react/prop-types */
import axios from "axios";
import ReactPlayer from "react-player";

function VideoPlayer({ video }) {

  const sendVideoView = async () => {
    try {
      const response = await axios.post(`view/${video._id}`)
      // console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ReactPlayer
    playing={true}
      controls={true}
      onStart={sendVideoView}
      url={video.videoFile}
      light={video.thumbnail}
      width="1080px"
      height="600px"
    />
  );
}

export default VideoPlayer;
