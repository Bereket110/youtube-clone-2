import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import { Stack } from "@mui/material";
const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ width: "100%", height: "100%" }}
    >
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
      <Videos videos={videos} direction="column" />
    </Stack>
  );
};

export default VideoDetail;
