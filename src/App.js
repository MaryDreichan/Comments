import React, { useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [highlightedCommentIndex, setHighlightedCommentIndex] = useState(-1);

  const checkSpam = (str) => {
    return str.replace(/viagra|xxx/gi, "***");
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      const sanitizedComment = checkSpam(newComment);
      setComments((prevComments) => [sanitizedComment, ...prevComments]);
      setNewComment("");
      setHighlightedCommentIndex(0);
    }
  };

  const handleHighlight = (index) => {
    setHighlightedCommentIndex(index);
  };

  return (
    <div className="App">
      <h1>Комментарии</h1>
      <div className="comment-form">
        <textarea
          rows="4"
          cols="50"
          placeholder="Оставьте ваш комментарий..."
          value={newComment}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Отправить</button>
      </div>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`comment ${index === highlightedCommentIndex ? "highlighted" : ""}`}
            onMouseEnter={() => handleHighlight(index)}
            onMouseLeave={() => handleHighlight(-1)}
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;