// src/app/dashboard/create-product/components/ProductForm.jsx
"use client";

import { useState } from "react";
import { TextField, Button, Grid, Box, Divider } from "@mui/material";
import { useFormik } from "formik";
import { productSchema } from "@/validation/productSchema";
import { useCreateProduct } from "@/hooks/useProducts";
import AttributeSection from "./AttributeSection";
import MediaUploadSection from "./MediaUploadSection";
import VariantSection from "./VariantSection";

export default function ProductForm() {
  const mutation = useCreateProduct();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      base_price: "",
      quantity: "",
      attributes: [],
      variants: [],
      media: [],
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Base Price"
            name="base_price"
            type="number"
            value={formik.values.base_price}
            onChange={formik.handleChange}
            error={formik.touched.base_price && !!formik.errors.base_price}
            helperText={formik.touched.base_price && formik.errors.base_price}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            type="number"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <AttributeSection formik={formik} />
      {/* <VariantSection formik={formik} /> */}
      {/* <MediaUploadSection formik={formik} /> */}

      <Box sx={{ textAlign: "right", mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Saving..." : "Create Product"}
        </Button>
      </Box>
    </Box>
  );
}
