import React from "react";

function Details({views, createdAt}) {
  return(
    <div style={{display: "flex", margin: "auto", width: "fit-content"}}>
      <p>{views} Views</p>
      <p style={{paddingRight: "6px", paddingLeft: "6px"}}>|</p>
      <p>Uploaded {createdAt}</p>
    </div>
  )
}

export default Details