// components/NavBar.jsx
"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 12,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  padding: "6px 10px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 420,
  boxShadow: theme.shadows[1],
}));

export default function NavBar({ onOpenSidebar, title = "Dashboard" }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ zIndex: (t) => t.zIndex.drawer + 1}}>
      <Toolbar sx={{ gap: 2, py: 1.25 }}>
        {/* Mobile menu icon */}
        <IconButton
          edge="start"
          onClick={onOpenSidebar}
          sx={{ display: { xs: "inline-flex", md: "none" }, color: theme.palette.text.primary }}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.contrastText,
            fontWeight: 700
          }}>
            S
          </Box>
          <Typography variant="h6" component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            {title}
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIcon sx={{ mr: 1, opacity: 0.6 }} />
            <InputBase placeholder="Search orders, products, customers..." inputProps={{ "aria-label": "search" }} sx={{ width: "100%" }} />
          </Search>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="Notifications">
            <IconButton>
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account">
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar sx={{ width: 40, height: 40 }}>AH</Avatar>
            </IconButton>
          </Tooltip>

          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} transformOrigin={{ horizontal: "right", vertical: "top" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
