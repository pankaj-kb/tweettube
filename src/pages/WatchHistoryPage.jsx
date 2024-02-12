import axios from "axios";
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import NoContentPage from "./NoContentPage";
function WatchHistoryPage() {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    const getWatchHistory = async () => {
      const response = await axios.get(`/users/watch-history`);
      setVideos(response.data.data);
    };

    getWatchHistory();
  }, []);

  return (
    <>
      {videos.length > 0 ? (
        <div className="flex flex-wrap p-8 gap-12 items-center justify-start">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} owner={video.owner} />
          ))}
        </div>
      ) : (
        <NoContentPage />
      )}
    </>
  );
}

export default WatchHistoryPage;
