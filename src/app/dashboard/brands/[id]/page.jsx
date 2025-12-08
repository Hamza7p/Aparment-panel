"use client";

import { Box, Card, CardContent, Typography, Button, Grid, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

import { useRouter, useParams } from "next/navigation";
import { useBrand } from "@/hooks/useBrand";
import { BrandDialog as EditBrandDialog } from "../components/BrandDialog";
import { useState } from "react";

const BrandDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: brand, isLoading } = useBrand(id);

  const [openEdit, setOpenEdit] = useState(false);

  if (isLoading || !brand) {
    return <Typography sx={{ p: 4 }}>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Title Bar */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          mb: 3 
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Brand Details
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/dashboard/brands")}
        >
          Back
        </Button>
      </Box>

      {/* Main Content */}
      <Grid container spacing={3}>
        
        {/* Image Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Brand Image</Typography>

            <Avatar
              src={brand?.media?.url || null}
              variant="rounded"
              sx={{
                width: "100%",
                height: 250,
                fontSize: "3rem",
                bgcolor: brand?.media?.url ? "transparent" : "secondary.main",
                color: "white",
              }}
            >
              {!brand?.media?.url && brand.name?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Card>
        </Grid>

        {/* Info Card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Brand Information</Typography>

              <Button 
                variant="contained" 
                startIcon={<EditIcon />}
                onClick={() => setOpenEdit(true)}
              >
                Edit
              </Button>
            </Box>

            <CardContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Name:</strong> {brand.name}
              </Typography>

              <Typography variant="body1">
                <strong>Note:</strong> {brand.note ?? "No note available"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* Edit Dialog */}
      <EditBrandDialog 
        open={openEdit} 
        handleClose={() => setOpenEdit(false)} 
        brand={brand}
      />
    </Box>
  );
};

export default BrandDetailsPage;
