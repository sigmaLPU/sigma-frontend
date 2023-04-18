import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../../routes";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";
const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      thumbnail:
        "https://via.placeholder.com/150?text=Video+1+Thumbnail",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/watch?v=HoCwa6gnmM0&list=PL3AoN5mK4YnsxJb2ZfFQvAhi-Cunqz0ys&index=8&ab_channel=YRF",
      thumbnail:
        "https://via.placeholder.com/150?text=Video+2+Thumbnail",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      thumbnail:
        "https://via.placeholder.com/150?text=Video+3+Thumbnail",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      thumbnail:
        "https://via.placeholder.com/150?text=Video+4+Thumbnail",
    },
    {
      id: 5,
      title: "Video 5",
      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      thumbnail:
        "https://via.placeholder.com/150?text=Video+5+Thumbnail",
    },
  ];

export default function Ethics() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: "8rem" }} childSX={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Box marginLeft={10} marginRight={10} width="100%" height="0%">
              <Player fluid={true} src={currentVideo.url}>
                <BigPlayButton position="center" />
              </Player>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box height="80vh" padding={2} style={{ overflowY: "scroll" }}>
  <Typography variant="h5" gutterBottom>
    Videos
  </Typography>
  {videos.map((video) => (
    <Paper
      key={video.id}
      style={{ cursor: "pointer", marginBottom: "1rem" }}
      onClick={() => handleVideoClick(video)}
    >
      <Box display="flex" alignItems="center" padding={1}>
        <Box marginRight={1}>
          <img
            src={video.thumbnail}
            alt={video.title}
            width={120}
            height={100}
          />
        </Box>
        <Typography variant="subtitle1">{video.title}</Typography>
      </Box>
    </Paper>
  ))}
</Box>
          </Grid>
        </Grid>
      </NavSideBarLayout>
    </div>
  );
}
