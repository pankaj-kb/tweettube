import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  // const loginStatus = useSelector((state) => state.auth.status);
  // console.log(loginStatus);

  // const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // if (!loginStatus) {
    //   navigate("/login");
    // }

    const getAllVideos = async () => {
      const response = await axios.get(
        "/video/?page=1&limit=10&sortBy=desccreatedAt&sortType=desc"
      );
      const fetchVideos = response.data.data.videos;
      // console.log(fetchVideos)
      // console.log(typeof fetchVideos)
      setVideos(fetchVideos);
      console.log(videos);
      // console.log(videos)
    };

    getAllVideos();
  }, []);

  return (
    <div className="flex flex-wrap p-8 gap-12 items-center justify-center">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default HomePage;
