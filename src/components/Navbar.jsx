"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/Navbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        className={`navbar ${isScrolled ? "scrolled" : "top"}`}
        elevation={0}
      >
        <Toolbar className="toolbar">
          {/* Logo */}
          <Typography variant="h6" className="logo">
            <Link href="/">Logo</Link>
          </Typography>

          {/* Desktop Menu */}
          <Box className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Right Icons */}
          <Box className="icons">
            <IconButton color="inherit">
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => setCartOpen(true)}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          {/* <IconButton
            className="menu-button"
            color="inherit"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 240 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button={true}
                key={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <Link href={item.href} className="mobile-link">
                  <ListItemText primary={item.label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
