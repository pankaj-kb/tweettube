import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import OwnerTile from "../components/OwnerTile";
import { FaShareAlt } from "react-icons/fa";
import LikeView from "../components/LikeView";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

function TweetPage() {
  const { tweetId } = useParams();
  //   console.log("from line 7 ", tweetId);
  const [tweet, setTweet] = useState({});
  const [owner, setOwner] = useState({});
  const [relativeTime, setRelativeTime] = useState("Decades to come");
  // const urlRef = useRef()

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const response = await axios.get(`/tweet/${tweetId}`);
        //   console.log(response.data)
        const responseData = response.data.data;
        setTweet(responseData);
        setOwner(responseData.owner);
        const date = parseISO(responseData.createdAt);
        setRelativeTime(formatDistanceToNow(date, { addSuffix: true }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweet();
  }, [tweetId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div
      className="text-accentwhite flex 
    flex-col items-center justify-center
    p-8 overflow-hidden rounded-lg w-screen h-screen"
    >
      <div
        className="flex gap-2 items-center cursor-pointer p-2 border-2
      rounded-xl border-accentpink shadow-accentpink shadow-md w-screen/2"
      >
        <OwnerTile
          owner={owner}
          avatarClass={"h-[20px] rounded-full object-contain"}
          infoDivClass={"flex flex-col"}
          fullNameClass={"text-[18px] font-semibold"}
          usernameClass={"text-[13px] font-light"}
          showButton={true}
          buttonClass={"p-2 w-[px] rounded-md font-semibold text-center ml-20"}
        />
      </div>
      <div className="flex flex-col items-start md:justify-center md:items-center">
        <h1 className="py-4 px-12 max-w-screen text-start font-medium leading-md text-[22px] md:w-[30%]">
          {tweet.content}
        </h1>
        <span className="font-light text-[12px] px-12">{relativeTime}</span>
      </div>
      <div className="flex gap-20 items-center py-4">
        <LikeView
          postId={tweetId}
          postType={"tweet"}
          likeClass={"text-[22px] hover:cursor-pointer"}
        />
        <FaShareAlt
          // value={window.location.href}
          // ref={urlRef}
          onClick={handleCopyLink}
          className="text-[22px] focus:text-accentpink
         hover:text-accentpink hover:cursor-pointer"
        />
      </div>
      <div>
        <div className="text-accentwhite flex flex-col gap-2 items-center">
          <CommentForm
            postId={tweet._id}
            postType={"t"}
            inputClassName={
              "bg-accentgray font-medium text-[18px] w-[400px] h-[100s%] text-start focus:outline-none border-2 border-accentblack focus:border-accentpink hover:border-accentpink rounded-md"
            }
            buttonClasses={
              "bg-accentgray focus:bg-accentpink hover:bg-accentpink text-center rounded-md font-semibold h-[100%] p-1"
            }
          />
        </div>
        <div className="flex flex-col p-2">
          {/* Todo: Implment auto refresh of comments after submitting a comment */}
          <CommentsList postId={tweet._id} postType={"t"} />
        </div>
      </div>
    </div>
  );
}

export default TweetPage;
