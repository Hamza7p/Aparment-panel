"use client";

import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function ProductCard({ product, onAddToCart, onToggleFavorite }) {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (onToggleFavorite) onToggleFavorite(product.id, !isFavorite);
  };

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(product.id);
  };

  const truncatedDescription =
    product.description?.length > 80
      ? product.description.substring(0, 80) + "..."
      : product.description;

  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: 4,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: theme.shadows[3],
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: 240,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />

        {/* Favorite Button */}
        <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
          <IconButton
            onClick={handleFavoriteClick}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            {isFavorite ? (
              <Favorite sx={{ color: theme.palette.secondary.main }} />
            ) : (
              <FavoriteBorder sx={{ color: theme.palette.grey[600] }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Product Info */}
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            color: theme.palette.text.primary,
          }}
        >
          {product.name}
        </Typography>

        {/* Prices */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, color: theme.palette.primary.main }}
          >
            ${product.base_price.toFixed(2)}
          </Typography>
          {product.prev_price && (
            <Typography
              variant="body2"
              sx={{
                textDecoration: "line-through",
                color: theme.palette.text.secondary,
              }}
            >
              ${product.prev_price.toFixed(2)}
            </Typography>
          )}
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mt: 1,
          }}
        >
          {truncatedDescription}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<ShoppingCart />}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
