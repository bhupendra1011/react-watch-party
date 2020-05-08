import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem({ video, onVideoSelect }) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumnbail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
