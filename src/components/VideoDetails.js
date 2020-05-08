import React from "react";
import { Paper, Typography } from "@material-ui/core";

function VideoDetails({ video }) {
  if (!video) {
    return <div>Loading... </div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video PLayer"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6}>
        <Typography variant="h4">
          {video.snippet.title}- {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
}

export default VideoDetails;
