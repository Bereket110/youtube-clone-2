import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, i) => (
        <Box key={i}>{video.id.videoId && <VideoCard videos={video} />}</Box>
      ))}
    </Stack>
  );
}

export default Videos;
