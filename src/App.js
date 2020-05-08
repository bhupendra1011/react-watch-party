import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleSubmit("react");
  }, []);

  async function handleSubmit(searchTerm) {
    const repsonse = await youtube.get("search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 5,
        key: "your key", // get own api from https://developers.google.com/youtube/v3
      },
    });
    setVideos(repsonse.data.items);
    setSelectedVideo(repsonse.data.items[0]);
    //console.log(repsonse);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchBar onFormSubmit={handleSubmit} />
      </Grid>
      <Grid item xs={12} md={8}>
        <VideoDetails video={selectedVideo} />
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </Grid>
    </Grid>
  );
}
export default App;
