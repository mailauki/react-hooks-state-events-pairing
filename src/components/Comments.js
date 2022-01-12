import React from "react";
import Comment from "./Comment";

function Comments({comments, isHidden}) {
  return (
    <div style={{display: isHidden ? "none" : "inherit"}}>
      <h2>{comments.length} Comments</h2>
      {comments.map(comment => <Comment key={comment.id} user={comment.user} comment={comment.comment} />)}
    </div>
  )
}

export default Comments
