// app/dashboard/page.jsx
"use client";

import React from "react";
import DataTable from "@/components/dashboard/DataTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function DashboardHome() {
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Product", flex: 1, minWidth: 150 },
    { field: "category", headerName: "Category", width: 140 },
    { field: "price", headerName: "Price", width: 110 },
    { field: "stock", headerName: "Stock", width: 110 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  const rows = [
    { id: 1, name: "Leather Jacket", category: "Apparel", price: "$120", stock: 12, status: "Published" },
    { id: 2, name: "Silk Scarf", category: "Accessories", price: "$45", stock: 34, status: "Published" },
    { id: 3, name: "Sunglasses", category: "Accessories", price: "$80", stock: 7, status: "Draft" },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5">Products</Typography>
        <Button variant="contained">+ Add Product</Button>
      </Box>

      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}
