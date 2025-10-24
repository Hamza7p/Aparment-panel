"use client";

import React from "react";
import Link from "next/link";
import "@/styles/Footer.css";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
} from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      {/* ===== Top Section ===== */}
      <Grid container spacing={4} className="footer-top">
        {/* Logo */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-logo">
            Logo
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Your trusted e-commerce platform for quality products and fast
            delivery.
          </Typography>
        </Grid>

        {/* Pages */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Pages
          </Typography>
          <Box className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Services
          </Typography>
          <Box className="footer-links">
            <Link href="/support">Support</Link>
            <Link href="/shipping">Shipping Info</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/faq">FAQ</Link>
          </Box>
        </Grid>

        {/* Subscribe */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="footer-title">
            Subscribe
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Get the latest deals and offers right to your inbox.
          </Typography>
          <Box className="subscribe-box">
            <TextField
              size="small"
              placeholder="Enter your email"
              variant="outlined"
              className="subscribe-input"
            />
            <Button variant="contained" className="subscribe-btn">
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* ===== Bottom Section ===== */}
      <Box className="footer-bottom">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
