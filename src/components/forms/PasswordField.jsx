"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useField } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordField({ name, label, ...props }) {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  const isError = Boolean(meta.touched && meta.error);

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      {...field}
      type={showPassword ? "text" : "password"}
      fullWidth
      label={label}
      error={isError}
      helperText={isError ? meta.error : ""}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={toggleVisibility}
              edge="end"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}

