"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
  Avatar,
  Stack,
} from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

import { useAddBrand, useUpdateBrand } from "@/hooks/useBrand";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";

import { uploadMedia } from "@/api/media";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  note: Yup.string().nullable(),
});

const BrandDialog = ({ open, onClose, brand }) => {
  const isEdit = Boolean(brand);

  const addBrand = useAddBrand();
  const updateBrand = useUpdateBrand();

  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(brand?.media?.url || null);
  const [mediumId, setMediumId] = useState(brand?.media?.id || null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: brand?.name || "",
      note: brand?.note || "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: brand?.name || "",
        note: brand?.note || "",
      });
      setPreviewUrl(brand?.media?.url || null);
      setMediumId(brand?.media?.id || null);
    }
  }, [open, brand, reset]);

  /* =========================
     IMAGE UPLOAD HANDLER
  ========================= */
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploaded = await uploadMedia(file);
      setMediumId(uploaded.id);
      setPreviewUrl(uploaded.url);
    } finally {
      setUploading(false);
    }
  };

  /* =========================
     FORM SUBMIT
  ========================= */
  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      note: data.note,
      medium_id: mediumId,
    };

    if (isEdit) {
      updateBrand.mutate(
        { id: brand.id, data: payload },
        { onSuccess: onClose }
      );
    } else {
      addBrand.mutate(
        { data: payload },
        { onSuccess: onClose }
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{isEdit ? "Edit Brand" : "Add Brand"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Note"
            multiline
            rows={3}
            {...register("note")}
          />

          {/* IMAGE PREVIEW */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={previewUrl}
              sx={{ width: 90, height: 90, borderRadius: 2 }}
            />

            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
              disabled={uploading}
            >
              Upload Image
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>

            {uploading && <CircularProgress size={22} />}
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>

        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          disabled={addBrand.isPending || updateBrand.isPending}
        >
          {addBrand.isPending || updateBrand.isPending ? (
            <CircularProgress size={20} />
          ) : isEdit ? (
            "Update"
          ) : (
            "Create"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BrandDialog;
