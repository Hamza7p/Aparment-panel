"use client";

import TextField from "@mui/material/TextField";
import { useField } from "formik";

export default function InputField({ name, label, ...props }) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <TextField
      {...field}
      fullWidth
      label={label}
      error={isError}
      helperText={isError ? meta.error : ""}
      {...props}
    />
  );
}

