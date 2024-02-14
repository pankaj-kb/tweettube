import axios from "axios";
import TweetCard from "../components/TweetCard";
import { useEffect, useState } from "react";

function TweetsPage() {

  const [tweets, setTweets] = useState([]) 

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get("/tweet/?page=1&limit=10&sortBy=createdAt&sortType=desc");
      const fetchedTweets = response.data.data.tweets;
      setTweets(fetchedTweets)
    };
    getTweets()
  }, []);

  return (
    <div className="text-accentwhite flex flex-wrap p-8 gap-12 items-start justify-start">
    {tweets.map((tweet) => (
      <TweetCard key={tweet._id} tweet={tweet} owner={tweet.owner}/>
    ))}
    </div>
  );
}

export default TweetsPage;
