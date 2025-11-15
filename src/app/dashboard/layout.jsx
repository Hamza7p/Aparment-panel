// app/dashboard/layout.jsx
"use client";

import React from "react";
import NavBar from "@/components/dashboard/Navabar";
import Sidebar from "@/components/dashboard/Sidebar";
import Box from "@mui/material/Box";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const handleOpenSidebar = () => setMobileOpen(true);
  const handleCloseSidebar = () => setMobileOpen(false);
  const handleToggleCollapse = () => setCollapsed((s) => !s);

  const drawerWidth = collapsed ? 72 : 260;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={mobileOpen} onClose={handleCloseSidebar} collapsed={collapsed} onToggleCollapse={handleToggleCollapse} />

      <Box sx={{ flex: 1, ml: { md: `${drawerWidth}px` } }}>
        <NavBar onOpenSidebar={handleOpenSidebar} title="Store Admin" />

        <Box component="main" sx={{ p: { xs: 2, md: 3 }, transition: "margin .25s ease" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
