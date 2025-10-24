"use client";

import React from "react";
import { Drawer, Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CartDrawer({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Your cart is empty.
        </Typography>
      </Box>
    </Drawer>
  );
}
