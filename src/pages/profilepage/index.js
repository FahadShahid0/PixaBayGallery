import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const imageDetails = location.state;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Avatar
          src={imageDetails.userImageURL}
          alt={imageDetails.user}
          sx={{ width: 80, height: 80, marginRight: "20px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ fontSize: "24px", fontWeight: "bold" }}>
            {imageDetails.user}
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
                position: "relative",
                "&:hover::after": {
                  content: "'Likes'",
                  position: "absolute",
                  padding: "2px",
                  top: "-20px",
                  left: "20px",
                  borderRadius: "5px",
                  background: "lightgrey",
                },
              }}
            >
              <FavoriteBorderIcon sx={{ marginRight: "5px" }} />
              <span>{imageDetails.likes}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
                position: "relative",
                "&:hover::after": {
                  content: "'Comments'",
                  position: "absolute",
                  padding: "2px",
                  top: "-20px",
                  left: "20px",
                  borderRadius: "5px",
                  background: "lightgrey",
                  
                },
              }}
            >
              <ChatBubbleOutlineIcon sx={{ marginRight: "5px" }} />
              <span>{imageDetails.comments}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
                position: "relative",
                "&:hover::after": {
                  content: "'Views'",
                  position: "absolute",
                  padding: "2px",
                  top: "-20px",
                  left: "20px",
                  borderRadius: "5px",
                  background: "lightgrey",
                },
              }}
            >
              <VisibilityIcon sx={{ marginRight: "5px" }} />
              <span>{imageDetails.views}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                "&:hover::after": {
                  content: "'Downloads'",
                  position: "absolute",
                  padding: "2px",
                  top: "-20px",
                  left: "20px",
                  borderRadius: "5px",
                  background: "lightgrey",
                },
              }}
            >
              <GetAppIcon sx={{ marginRight: "5px" }} />
              <span>{imageDetails.downloads}</span>
            </Box>
          </Box>
        </Box>
      </Box>
      <img
        src={imageDetails.largeImageURL}
        alt={imageDetails.tags}
        style={{
          width: "80%",
          height: "50%",
          borderRadius: "3%",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)",
          position: "relative",
        }}
      />
    </Box>
  );
}

export default ProfilePage;
