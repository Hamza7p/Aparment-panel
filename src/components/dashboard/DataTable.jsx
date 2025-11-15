// components/DataTable.jsx
"use client";

import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function DataTable({ columns, rows, pageSize = 10, onRowClick }) {
  const theme = useTheme();

  // Default columns/rows if none passed (demo)
  const defaultColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Product", flex: 1, minWidth: 160 },
    { field: "category", headerName: "Category", width: 140 },
    { field: "price", headerName: "Price", width: 110 },
    { field: "stock", headerName: "Stock", width: 110 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  const defaultRows = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: i % 2 ? "Clothing" : "Accessories",
    price: `$${(19 + i * 7).toFixed(2)}`,
    stock: Math.floor(Math.random() * 50),
    status: i % 3 === 0 ? "Draft" : "Published",
  }));

  return (
    <Box sx={{
      height: 560,
      width: "100%",
      bgcolor: theme.palette.background.paper,
      borderRadius: 2,
      boxShadow: theme.shadows[1],
      p: 2
    }}>
      <DataGrid
        rows={rows ?? defaultRows}
        columns={columns ?? defaultColumns}
        pageSize={pageSize}
        rowsPerPageOptions={[5,10,25,50]}
        checkboxSelection
        disableSelectionOnClick
        onRowClick={onRowClick}
        components={{ Toolbar: GridToolbar }}
        sx={{
          border: "none",
          "& .MuiDataGrid-cell": { borderBottom: `1px solid ${theme.palette.divider}` },
          "& .MuiDataGrid-columnHeaders": {
            background: theme.palette.background.default,
            borderRadius: 1,
            mb: 1,
            borderBottom: `1px solid ${theme.palette.divider}`
          },
          "& .MuiDataGrid-toolbarContainer": { p: 1, gap: 1 },
        }}
      />
    </Box>
  );
}
