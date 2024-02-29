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
    <div className="text-accentwhite flex flex-wrap h-screen max-w-screen gap-2 justify-center 
    items-center mt-[30%] md:mt-0 md:items-center md:justify-start">
    {tweets.map((tweet) => (
      <TweetCard key={tweet._id} tweet={tweet} owner={tweet.owner}/>
    ))}
    </div>
  );
}

export default TweetsPage;
