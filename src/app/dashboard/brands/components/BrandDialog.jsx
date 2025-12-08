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
} from "@mui/material";

import { useAddBrand, useUpdateBrand } from "@/hooks/useBrand";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { uploadMedia } from "@/api/media";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  note: Yup.string().nullable(),
});

const BrandDialog = ({ open, onClose, brand }) => {
  const isEdit = Boolean(brand);

  const addBrand = useAddBrand();
  const updateBrand = useUpdateBrand();

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
      media_url: brand?.media?.url || "",
    },
  });

  const onSubmit = async (data) => {
    let medium_id = brand?.media?.id ?? null;

    // If new image selected
    if (data.media_file?.[0]) {
      const uploaded = await uploadMedia(data.media_file[0]);
      medium_id = uploaded.id;
    }

    const payload = {
      name: data.name,
      note: data.note,
      medium_id,
    };

    if (isEdit) {
      updateBrand.mutate(
        { id: brand.id, data: payload },
        { onSuccess: () => onClose() }
      );
    } else {
      addBrand.mutate(
        { data: payload },
        { onSuccess: () => onClose() }
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{isEdit ? "Edit Brand" : "Add Brand"}</DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
        <Box sx={{ mt: 1 }}>
          <Avatar
            src={brand?.media?.url}
            sx={{ width: 90, height: 90, borderRadius: 2 }}
          />
        </Box>

        {/* FILE UPLOAD */}
        <input type="file" {...register("media_file")} />
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
