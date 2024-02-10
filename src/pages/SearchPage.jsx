import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import TweetCard from "../components/TweetCard";
import OwnerTile from "../components/OwnerTile";
import NoContentPage from "./NoContentPage";

function SearchPage() {
  const { query } = useParams();
  // console.log(query);
  const [allVideos, setAllVideos] = useState("");
  const [allTweets, setAllTweets] = useState("");
  const [allUsers, setAllUsers] = useState("");

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(`/search/?${query}&page=1&limit=10`);
      const fetchedResults = response.data.data;
      console.log(fetchedResults);
      setAllVideos(fetchedResults.videoResults);
      setAllTweets(fetchedResults.tweetResults);
      setAllUsers(fetchedResults.userResults);
    };

    search();
  }, [query]);

  return (
    <>
      {(allVideos.length > 0 || allTweets.length > 0 || allUsers.length > 0)  ? (
        <div className="text-accentwhite flex flex-col items-start gap-12 py-12 px-20 overflow-hidden">
          <div className="flex flex-wrap gap-12 items-start">
            {allVideos && allVideos.length > 0
              ? allVideos.map((video) => (
                  <VideoCard
                    key={video._id}
                    video={video}
                    owner={video.owner}
                  />
                ))
              : ""}
          </div>
          <div className="flex flex-wrap gap-12 items-start">
            {allTweets && allTweets.length > 0
              ? allTweets.map((tweet) => (
                  <TweetCard
                    key={tweet._id}
                    tweet={tweet}
                    owner={tweet.owner}
                  />
                ))
              : ""}
          </div>
          <div className="flex flex-wrap gap-12 items-start">
            {allUsers && allUsers.length > 0
              ? allUsers.map((user) => (
                  <div
                    key={user._id}
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <OwnerTile
                      key={user}
                      owner={user}
                      avatarClass={
                        "object-cover w-[180px] rounded-full cursor-pointer"
                      }
                      infoDivClass={"flex flex-col"}
                      fullNameClass={
                        "text-center font-semibold text-[25px] cursor-pointer"
                      }
                      usernameClass={
                        "text-center font-medium text-[15px] cursor-pointer"
                      }
                      showButton={true}
                      buttonClass={
                        "text-center font-semibold rounded-lg h-auto text-[22px] p-2"
                      }
                    />
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        <NoContentPage text={"No results found...."}/>
      )}
    </>
  );
}

export default SearchPage;
