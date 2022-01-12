import React from "react";

function Buttons({upvotes, downvotes, handleUpvotes, handleDownvotes}) {
  return (
    <div>
      <button onClick={handleUpvotes}>{upvotes} 👍</button>
      <button onClick={handleDownvotes}>{downvotes} 👎</button>
    </div>
  )
}

export default Buttons