/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikeView({ postId, postType, likeClass }) {
  const [liked, setLiked] = useState(false);
  const [toggleType, setToggleType] = useState("t");

  useEffect(() => {
    if (postType === "tweet") setToggleType("t");
    else if (postType === "video") setToggleType("v");
    else setToggleType("c");
    const checkLike = async () => {
      try {
        const response = await axios.get(`/like/all`);
        const responseData = response.data.data;
        if (responseData === null) {
          setLiked(false);
        } else {
          const checkLike = responseData
            .map((likedPosts) => likedPosts?.[postType])
            .some((likedPosts) => likedPosts === postId);
          setLiked(checkLike)
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLike();
  }, [liked, postId, postType]);

  const handleLike = async () => {
    try {
      const toggleLike = await axios.post(
        `/like/toggle/${toggleType}/${postId}`
      );

      if (!toggleLike) {
        console.log("can't toggle Like the Post");
      }

      console.log(toggleLike);

      setLiked((prevLiked) => !prevLiked);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {liked ? (
        <FaHeart onClick={handleLike} className={`text-accentpink ${likeClass}`} />
      ) : (
        <FaRegHeart onClick={handleLike} className={`${likeClass}`} />
      )}
    </>
  );
}

export default LikeView;
