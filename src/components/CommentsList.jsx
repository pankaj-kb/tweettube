/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OwnerTile from "./OwnerTile";
import axios from "axios";
import LikeView from "./LikeView";

function CommentsList({ postId, postType }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `/comment/${postType}/${postId}/?page=1&limit=10&sortBy=desccreatedAt&sortType=desc`
        );
        console.log(response.data.data.comments);
        setComments(response.data.data.comments);
      } catch (error) {
        console.error("error white fetching comments: ", error);
      }
    };
    getComments();
  }, [postId, postType]);

  return (
    <>
      {comments.map((comment) => (
        <div key={comment._id} className="flex items-center gap-2 px-2 py-3">
          <OwnerTile
            owner={comment.owner}
            avatarClass={"object-contain h-[40px] w-[40px]"}
            usernameClass={"hidden"}
            fullNameClass={"font-bold"}
            showButton={false}
          />
          <h1 className="px-2 font-medium">{comment.commentText}</h1>
          <LikeView
            postId={comment._id}
            postType={"c"}
            likeClass={"text-[15px] hover:cursor-pointer"}
          />
        </div>
      ))}
    </>
  );
}

export default CommentsList;
