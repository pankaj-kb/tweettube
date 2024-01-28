import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const loginStatus = useSelector((state) => state.auth.status);
  // console.log(loginStatus);
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData);
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!loginStatus) {
      navigate("/login");
    }

    const getAllVideos = async () => {
      const searchVideos = await axios.get(
        "/video/?page=1&limit=10&sortBy=desccreatedAt&sortType=desc"
      );
      const fetchVideos = searchVideos.data.data.videos;
      console.log(fetchVideos)
      console.log(typeof fetchVideos)
      setVideos(fetchVideos);
      console.log(videos)
    };

    getAllVideos();
  }, [loginStatus, userData, navigate]);

  return (
    <div className="flex bg-accentblack min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 bg-accentblack p-4">
          <SearchBar
            placeholder="what's next ??"
            buttonText="Search"
            divClassName="lg:flex items-center justify-center text-accentwhite"
            inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[400px] text-center font-medium focus:outline-none text-[20px]"
            buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-medium hover:text-accentblack text-[20px] focus:outline-accentpink ml-[-35px]"
          />
        </div>
        <div className="flex flex-wrap p-8 gap-12 items-center justify-center">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
