import axios from "axios";
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import NoContentPage from "./NoContentPage";
function WatchHistoryPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getWatchHistory = async () => {
      try {
        const response = await axios.get(
          `/view/watch-history/?page=1&limit=15&sortBy=createdAt&sortType=desc`
        );
        console.log("Received videos:", response.data.data.videos);
        setVideos(response.data.data.videos);
      } catch (error) {
        console.error("Error fetching watch history:", error);
      }
    };
    getWatchHistory();
  }, []);

  return (
    <>
      {videos.length > 0 ? (
        <div className="flex flex-wrap gap-6 items-center justify-center h-screen w-screen mt-[50%] md:mt-0">
          {videos.map((video) => (
            <VideoCard
              key={video.video._id}
              video={video.video}
              owner={video.video.owner}
            />
          ))}
        </div>
      ) : (
        <NoContentPage />
      )}
    </>
  );
}

export default WatchHistoryPage;
