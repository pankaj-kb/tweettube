/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OwnerTile from "./OwnerTile";
import axios from "axios";

function CommentsList({ postId, postType }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `/comment/${postType}/${postId}/?page=1&limit=10&sortBy=desccreatedAt&sortType=desc`
        );
        console.log(response.data.data.comments);
      } catch (error) {
        console.error("error white fetching comments: ", error);
      }
    };
    getComments();
  }, [postId, postType]);

  return (
    <>
      {/* <h1 className="text-accentwhite">Hello</h1> */}
    </>
  )
}

export default CommentsList;
