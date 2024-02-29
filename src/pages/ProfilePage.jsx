import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import TweetCard from "../components/TweetCard";
import OwnerTile from "../components/OwnerTile";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const [stats, setStats] = useState(null);
  const [deepStats, setDeepStats] = useState(null);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  useEffect(() => {
    const getUserStats = async () => {
      try {
        const response = await axios.get(`/dashboard/stats/${username}`);
        console.log(username);
        setStats(response.data.data);
        setDeepStats(response.data.data.userStatsAggregation[0]);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };

    const getUserProfile = async () => {
      try {
        const response = await axios.get(`/users/${username}`);
        console.log(username);
        setUser(response.data.data);
      } catch (error) {
        console.error("error while fetching user: ", error);
      }
    };

    getUserStats();
    getUserProfile();
  }, [username]);

  const allTweets = deepStats?.allTweets;
  const allVideos = deepStats?.allVideos;

  return (
    <div className="text-accentwhite flex flex-col mt-[30%] h-screen w-screen items-center md:mt-[5%]">
      <div className="flex items-center justify-center gap-8 border-accentpink my-8 px-2 absolute z-50 bg-accentblack">
        <OwnerTile
          owner={user}
          avatarClass={
            "rounded-full border-[5px] border-accentpink h-[80px] w-[80px] object-contain"
          }
          infoDivClass={"flex flex-col items-start"}
          fullNameClass={"font-semibold text-[20px]"}
          usernameClass={"font-light text-[15px]"}
          showButton={true}
          buttonClass={
            "p-2 w-100 rounded-md text-center text-[15px] font-semibold"
          }
        />
      </div>
      <div className="flex flex-col gap-2 md:w-screen">
        <div className="flex flex-wrap py-4 px-[10%] gap-12 items-start mt-[30%] md:mt-[10%] md:h-[80%]">
          {allVideos && allVideos.length > 0 ? (
            allVideos.map((video) => (
              <VideoCard key={video._id} video={video} owner={user} />
            ))
          ) : (
            <p>No Videos Available</p>
          )}
        </div>
        <div className="flex flex-wrap py-4 px-[10%] gap-12 items-start">
          {allTweets && allTweets.length > 0 ? (
            allTweets.map((tweet) => (
              <TweetCard key={tweet._id} tweet={tweet} owner={user} />
            ))
          ) : (
            <p>No tweets available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
