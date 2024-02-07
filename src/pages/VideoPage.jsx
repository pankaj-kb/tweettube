import { useParams } from "react-router-dom";
import VideoData from "../components/VIdeoData";
import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

function VideoPage() {
  const { videoId } = useParams();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <VideoData videoId={videoId} />
    </Suspense>
  );
}

export default VideoPage;
