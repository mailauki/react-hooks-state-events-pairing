import video from "../data/video.js";
import React, {useState} from "react";
import Buttons from "./Buttons";
import Details from "./Details";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [isHidden, setHidden] = useState(false)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <Details views={video.views} createdAt={video.createdAt} />
      <Buttons upvotes={upvotes} downvotes={downvotes} handleUpvotes={() => setUpvotes(upvotes +1)} handleDownvotes={() => setDownvotes(downvotes +1)} />
      <br/>
      <button onClick={() => isHidden ? setHidden(false) : setHidden(true)}>{isHidden ? "Show" : "Hide"} Comments</button>
      <hr/>
      <Comments comments={video.comments} isHidden={isHidden} />
      <br/>
    </div>
  );
}

export default App;
