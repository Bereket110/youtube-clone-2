// import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          Copyright © 2025.
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Typography sx={{ color: "white" }}>
          The feed videos are here
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
