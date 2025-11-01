"use client";

import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function Button({ children, loading = false, disabled, ...props }) {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      fullWidth
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : children}
    </MuiButton>
  );
}

