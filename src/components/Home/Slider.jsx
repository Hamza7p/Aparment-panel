"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/assets/imgs/slider01.jpg",
    title: "Step Into Confidence",
    description: "Discover our premium shoes that blend comfort, performance, and modern style.",
    link: "/shop",
  },
  {
    image: "/assets/imgs/slider02.jpg",
    title: "Carry Your World",
    description: "Backpacks designed for your lifestyle — durable, functional, and beautifully made.",
    link: "/shop",
  },
  {
    image: "/assets/imgs/slider03.jpg",
    title: "Elevate Every Step",
    description: "From casual sneakers to elegant designs — find the perfect fit for any occasion.",
    link: "/shop",
  },
];

export default function HeroSlider() {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    appendDots: dots => (
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          "& ul": { margin: 0, padding: 0, listStyle: "none", display: "flex", gap: "8px" },
          "& li button:before": {
            fontSize: "10px",
            color: theme.palette.grey[200],
            opacity: 0.8,
          },
          "& li.slick-active button:before": {
            color: theme.palette.secondary.main,
            opacity: 1,
          },
        }}
      >
        <ul>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              position: "relative",
            }}
          >
            {/* Diagonal overlay using theme colors */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: { xs: "100%", md: "50%" },
                height: "100%",
                clipPath: {
                  xs: "none",
                  md: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
                },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}E6, ${theme.palette.secondary.main}E6)`,
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "center" },
                px: { xs: 3, md: 8 },
                py: { xs: 6, md: 0 },
                color: theme.palette.common.white,
              }}
            >
              <Box sx={{ maxWidth: 440 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                    textShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.05rem",
                  }}
                >
                  {slide.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href={slide.link}
                  sx={{
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: `0px 6px 20px ${theme.palette.secondary.main}55`,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
