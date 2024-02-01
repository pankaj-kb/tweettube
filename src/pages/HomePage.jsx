import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get(
          `/video/?page=1&limit=10&sortBy=desccreatedAt&sortType=desc`
        );
        const fetchVideos = response.data.data.videos;
        setVideos(fetchVideos);
      } catch (error) {
        console.error(error);
      }
    };

    getAllVideos();
  }, []);

  console.log(videos);

  return (
    <div className="flex flex-wrap p-8 gap-12 items-center justify-center">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default HomePage;
