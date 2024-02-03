import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import TweetCard from "../components/TweetCard";
import { useParams } from "react-router-dom";

function UserProfilePage() {
  const [stats, setStats] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [deepStats, setDeepStats] = useState(null);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const subscriberId = userData._id;
  console.log(subscriberId)

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const response = await axios.get(`/dashboard/stats/${username}`);
        setStats(response.data.data);
        setDeepStats(response.data.data.userStatsAggregation[0]);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };

    const getUserProfile = async () => {
      try {
        const response = await axios.get(`/users/${username}`);
        // console.log("from UserProfile: ", response.data.data);
        setUser(response.data.data);
      } catch (error) {
        console.error("error while fetching user: ", error);
      }
    };

    getUserStats();
    getUserProfile();
  }, [username]);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get(`/subscription/c/${subscriberId}`);
        if (response.data.data) {
          const mapChannels = response.data.data.flatMap(
            (channel) => channel.subscriptionList
          );
          setSubscribed(
            mapChannels.some((channel) => channel._id === user._id)
          );
        } else {
          setSubscribed(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkSubscription();
  }, [subscriberId, user]);

  const handleSubscribe = async () => {
    try {
      const toggleSub = await axios.post(`/subscription/c/${user._id}`);
      if (!toggleSub) {
        console.log("Cant toggle subscription.");
      }
      console.log(toggleSub);
      setSubscribed((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const allTweets = deepStats?.allTweets;
  const allVideos = deepStats?.allVideos;

  return (
    <div className="text-accentwhite flex flex-col p-8 gap-12">
      <div className="flex pl-[20%]">
        <div className="flex items-center gap-10 border-accentpink pr-8 border-r-2">
          <img
            src={user?.avatar}
            alt="user-avatar"
            className="rounded-full h-[200px] border-[5px] border-accentpink"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-semibold text-[30px]">{user?.fullName}</h1>
            <h1 className="font-light text-[18px]">@{user?.username}</h1>
            <h1 className="font-medium text-[20px]">{user?.email}</h1>
            <button
              className={`p-2 w-[140px] rounded-md text-center text-[20px] font-semibold ${subscribed ? "bg-accentgray" : "bg-accentpink"}`}
              onClick={handleSubscribe}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-8 border-accentpink border-r-2 items-start">
          <h1 className="font-semibold text-[25px]">
            Likes: {stats?.totalLikes}
          </h1>
          <h1 className="font-semibold text-[25px]">
            Comments: {deepStats?.totalComments}
          </h1>
          <h1 className="font-semibold text-[25px]">
            Video Views: {deepStats?.videoViews}
          </h1>
        </div>
        <div className="flex flex-col p-8 border-accentpink border-r-2 items-start">
          <h1 className="font-semibold text-[25px]">
            Subscribers: {deepStats?.totalSubscribers}
          </h1>
          <h1 className="font-semibold text-[25px]">
            Subscribed to: {deepStats?.channelsSubscribedTo}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap pt-4 pl-12 gap-12 items-start">
        {allVideos && allVideos.length > 0 ? (
          allVideos.map((video) => (
            <VideoCard key={video._id} video={video} owner={user} />
          ))
        ) : (
          <p>No Videos Available</p>
        )}
      </div>
      <div className="flex flex-wrap pt-4 pl-12 gap-12 items-start">
        {allTweets && allTweets.length > 0 ? (
          allTweets.map((tweet) => (
            <TweetCard key={tweet._id} tweet={tweet} owner={user} />
          ))
        ) : (
          <p>No tweets available</p>
        )}
      </div>
    </div>
  );
}

export default UserProfilePage;
