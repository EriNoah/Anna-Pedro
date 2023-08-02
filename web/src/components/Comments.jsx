import { useEffect, useState } from "react";
import commentService from "../services/comments";
import Comment from "./Comment";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService
      .list()
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex gap-4 m-10">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment text={comment.text} author={comment.author} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
