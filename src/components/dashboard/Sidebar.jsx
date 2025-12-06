// components/Sidebar.jsx
"use client";

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { dashboardPages } from "@/utils/pages";

const DRAWER_WIDTH = 260;
const COLLAPSE_WIDTH = 72;

export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const path = usePathname?.() ?? "/";
  const theme = useTheme();

  const navItems = [
    { title: "Home", href: "/dashboard", icon: <HomeIcon /> },
    { title: "Products", href: "/dashboard/products", icon: <ShoppingBagIcon /> },
    { title: "Customers", href: "/dashboard/customers", icon: <PeopleIcon /> },
    { title: "Analytics", href: "/dashboard/analytics", icon: <BarChartIcon /> },
    { title: "Settings", href: "/dashboard/settings", icon: <SettingsIcon /> },
  ];

  const content = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1.5 }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!collapsed && 
          <>
          <Box sx={{ width: 36, height: 36, borderRadius: 1.5, bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>S</Box>
          <Box>
            <Box component="span" sx={{ fontWeight: 700 }}>Store</Box>
            <Box component="div" sx={{ fontSize: 12, color: theme.palette.text.secondary }}>Admin</Box>
          </Box>
          </>
          }
        </Box>

        <IconButton size="small" onClick={onToggleCollapse} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
          {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>

      </Box>

      <Divider sx={{ mx: collapsed ? 1 : 2 }} />

      <List sx={{ flex: 1, px: collapsed ? 0.5 : 1 }}>
        {dashboardPages.map((item) => {
          const active = path === item.href ; // || path?.startsWith(item.href + "/");
          return (
            <Link 
              key={item.href} 
              href={item.href} passHref 
              style={{ textDecoration: "none", color: "inherit" }}
            >
                <ListItemButton
                  selected={active}
                  sx={{
                    py: 1.25,
                    px: collapsed ? 0.75 : 1.5,
                    borderRadius: 2,
                    my: 0.5,
                    justifyContent: collapsed ? "center" : "flex-start",
                    ...(active && {
                      bgcolor: `${theme.palette.primary.main}11`, // subtle
                      borderLeft: collapsed ? "none" : `4px solid ${theme.palette.primary.main}`,
                    }),
                  }}
                >
                  <Tooltip title={collapsed ? item.name : ""} placement="right" disableHoverListener={!collapsed}>
                    <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 1.5, color: theme.palette.text.primary }}>
                      {item.icon}
                    </ListItemIcon>
                  </Tooltip>
                  {!collapsed && <ListItemText primary={item.name} />}
                </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop permanent drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          width: collapsed ? COLLAPSE_WIDTH : DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsed ? COLLAPSE_WIDTH : DRAWER_WIDTH,
            boxSizing: "border-box",
            borderRight: `1px solid ${theme.palette.divider}`,
            bgcolor: theme.palette.background.paper,
            px: 0.5,
          },
        }}
      >
        {content}
      </Drawer>

      {/* Mobile temporary drawer */}
      <Drawer
        open={Boolean(open)}
        onClose={onClose}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: DRAWER_WIDTH },
        }}
      >
        {content}
      </Drawer>
    </>
  );
}
