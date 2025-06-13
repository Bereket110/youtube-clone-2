import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const VideoCard = ({
  videos: {
    id: { videoId },
    snippet: {
      title,
      channelId,
      channelTitle,
      publishedAt,
      thumbnails,
      description,
    },
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        border: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
          image={
            thumbnails?.high?.url ||
            "https://via.placeholder.com/345x140.png?text=No+Thumbnail"
          }
          alt={title}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || "Video Title"}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {channelTitle || demoChannelTitle}

            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
