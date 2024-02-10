import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { query } = useParams();

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(``);
    };
  }, []);

  return (
    <div>
      {/* <div className="flex flex-wrap pt-4 pl-12 gap-12 items-start">
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
      </div> */}
    </div>
  );
}

export default SearchPage;
