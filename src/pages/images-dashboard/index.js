import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ImageDetails } from "../../routes/constants";

const ENDPOINT = (pageNumber) => `https://pixabay.com/api/?key=43066239-2590ab41bc2eb921f3434dca6&page=${pageNumber}`

export default function ImagesDashboard() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);
  const debounceTimeout = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINT(page)).then((resp) => resp.json());

        const data = response;
        const sortedData = data.hits.sort((a, b) => a.id - b.id);
        // console.log("sortedData", sortedData)
        setImages((prevImages) => [...prevImages, ...sortedData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        if (
          containerRef.current &&
          window.innerHeight + window.scrollY >=
            containerRef.current.offsetTop + containerRef.current.offsetHeight
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimeout.current);
    };
  }, []);

  const onImageClick = (id, data) => {
    navigate(ImageDetails.replace(":id", id), { state: data });
  };

  const matchXSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const matchPhones = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const matchSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const matchMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const matchLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const imageColumns = () => {
    if (matchXSmall || matchPhones) {
      // extra small screens (xs)
      return 1;
    } else if (matchSmall) {
      return 2;
    } else if (matchMedium) {
      // medium screens (md-lg)
      return 3;
    } else if (matchLarge) {
      // large screens (lg and up)
      return 4;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        marginTop: "100px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          // width: '100ch',
          display: "flex",
          justifyContent: "center",
        }}
        ref={containerRef}
      >
        <ImageList variant="quilted" cols={imageColumns()} gap={10}>
          {images.map((item, i) => (
            <ImageListItem
              onClick={() => onImageClick(item.id, item)}
              key={i}
              sx={{
                height: "100vh",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)",
                position: "relative",
                "&:hover .image-overlay": {
                  opacity: 1,
                },
                cursor: "pointer",
                overflow: "hidden",
                transition: "background-color 0.5s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <img
                src={item.webformatURL}
                alt={item.tags}
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <ImageListItemBar
                className="image-overlay"
                sx={{
                  background: "rgba(0, 0, 0, 0.5)",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                title={item.user}
                subtitle={
                  <React.Fragment>
                    <span>{item.likes}</span>
                    <FavoriteBorderIcon sx={{ fontSize: 15, color: "white" }} />
                  </React.Fragment>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <CircularProgress />
    </Box>
  );
}
