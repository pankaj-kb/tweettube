/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

function CommentForm({ postId, inputClassName, buttonClasses }) {
  const [commentText, setCommentText] = useState("");

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const clearCommentText = () => {
    setCommentText("");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/comment/${postId}`, {
        comment: commentText,
      });
      console.log(response);
    } catch (error) {
      console.error("something went wrong while submitting comment: ", error);
    } finally {
      setCommentText("");
    }
  };
  return (
    <>
      <input
        type="text"
        value={commentText}
        onChange={handleChange}
        className={inputClassName}
      />
      <button
        onClick={handleSubmit}
        className={buttonClasses + " disabled:cursor-not-allowed"}
        disabled={commentText == "" ? true : false}
      >
        Comment
      </button>
      <button onClick={clearCommentText} className={buttonClasses}>
        Clear
      </button>
    </>
  );
}

export default CommentForm;
