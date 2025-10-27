"use client";
import { Box, Typography, useTheme } from "@mui/material";
import ProductCard from "../Product/ProductCard";


const sampleProduct = {
  id: 1,
  name: "Smart Health Watch PNIRI",
  base_price: 199.99,
  prev_price: 249.99,
  image: "/assets/imgs/category11.jpg",
  description: "Track your health metrics with cutting-edge precision and elegant designTrack your health metrics with cutting-edge precision and elegant design.",
  isFavorite: true,
};

export default function FeatureProducts() {
    const theme = useTheme();
  const handleAddToCart = (id) => console.log("Added to cart:", id);
  const handleToggleFavorite = (id, state) => console.log("Favorite toggled:", id, state);

    let array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box sx={{ py: 10, textAlign: "center", position: "relative" }}>
       <Typography
        variant="h4"
        fontWeight={600}
        mb={6}
        color={theme.palette.primary.dark}
      >
        Feature Products
      </Typography>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: 'wrap',
            padding: "40px",
            gap: "30px"
        }}
        >
        { array.map( (a, index) => (
        <ProductCard
            key={index}
            product={sampleProduct}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
        />
        ))}
        </div>
    </Box>
  );
}
