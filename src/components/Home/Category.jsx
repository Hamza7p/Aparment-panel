"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardActionArea, CardMedia, useTheme, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { red } from "@mui/material/colors";

const categories = [
  { id: 1, name: "Shoes", img: "/assets/imgs/category06.jpg", slug: "shoes" },
  { id: 2, name: "Backpacks", img: "/assets/imgs/category07.jpg", slug: "backpacks" },
  { id: 3, name: "Accessories", img: "/assets/imgs/category08.jpg", slug: "accessories" },
  { id: 4, name: "New Arrivals", img: "/assets/imgs/category09.jpg", slug: "new-arrivals" },
  { id: 5, name: "Outdoor", img: "/assets/imgs/category10.jpg", slug: "outdoor" },
];

function ArrowButton({ direction, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        [direction === "left" ? "left" : "right"]: "-20px",
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "rgba(255,255,255,0.7)",
        "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
      }}
    >
      {direction === "left" ? <ArrowBackIosNew /> : <ArrowForwardIos />}
    </IconButton>
  );
}

export default function Categories() {
  const theme = useTheme();
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 10, textAlign: "center", position: "relative" }}>
      <Typography
        variant="h4"
        fontWeight={600}
        mb={6}
        color={theme.palette.primary.main}
      >
        Shop by Category
      </Typography>

      <Box sx={{ mx: { xs: 1, sm: 3, md: 6 } }}>
        <Slider {...settings}>
          {categories.map((cat) => (
            <Box key={cat.id} px={1}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  mx: "auto",
                  width: 220,
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.5s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardActionArea
                  onClick={() => router.push(`/products?category=${cat.slug}`)}
                >
                  <CardMedia
                    component="img"
                    image={cat.img}
                    alt={cat.name}
                    sx={{
                      height: "100%",
                      width: "100%",
                      m: "auto",
                      backgroundColor: red,
                      objectFit: "cover",
                    //   border: `4px solid ${theme.palette.secondary.main}`,
                    }}
                  />
                </CardActionArea>
              </Card>

              <Typography
                variant="subtitle1"
                fontWeight={600}
                mt={2}
                color={theme.palette.text.primary}
              >
                {cat.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
