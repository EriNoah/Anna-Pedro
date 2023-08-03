import "./comment.css";

function Comment({ text, author }) {
  return (
    <div className=" mb-10">
      <div class="quote">
        <span class="left">❝</span>
        <blockquote>{text}</blockquote>
        <small>{author}</small>
        <span class="right">❞</span>
      </div>
    </div>
  );
}

export default Comment;
