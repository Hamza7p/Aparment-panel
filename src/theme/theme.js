"use client";

import { createTheme } from "@mui/material/styles";

// ✅ Color Palette (refined)
const colors = {
  primaryBlue: "#0057FF", // vibrant royal blue - brand color
  accentGreen: "#17C307", //"#00C896", // modern turquoise green accent
  darkBlue: "#002B5B", // deep navy for contrast elements
  white: "#FFFFFF",
  black: "#111111",
  silver: "#E0E0E0",
  grey: "#777777",
  lightGrey: "#F6F7F8",
};

// ✅ Font choice for a premium fashion e-commerce:
// "Outfit" — geometric, modern, strong, readable, luxurious
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primaryBlue,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.accentGreen,
      contrastText: colors.white,
    },
    background: {
      default: colors.lightGrey,
      paper: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.grey,
    },
    divider: colors.silver,
  },

  typography: {
    fontFamily: `"Outfit", "Poppins", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700, letterSpacing: "-0.5px" },
    h2: { fontWeight: 600, letterSpacing: "-0.2px" },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    body1: { lineHeight: 1.6, color: colors.grey },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
  },

  shape: {
    borderRadius: 16, // modern soft corners
  },

  shadows: [
    "none",
    "0px 4px 12px rgba(0,0,0,0.05)",
    "0px 6px 18px rgba(0,0,0,0.08)",
    ...Array(23).fill("0px 4px 16px rgba(0,0,0,0.06)"),
  ],

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "10px 24px",
          fontSize: "0.95rem",
          transition: "all 0.3s ease",
          boxShadow: "0px 4px 12px rgba(0, 87, 255, 0.1)",
        },
        containedPrimary: {
          backgroundColor: colors.primaryBlue,
          "&:hover": {
            backgroundColor: "#0046CC",
            boxShadow: "0px 6px 18px rgba(0, 87, 255, 0.2)",
          },
        },
        containedSecondary: {
          backgroundColor: colors.accentGreen,
          "&:hover": {
            backgroundColor: "#17C307", //"#00A87D",
            boxShadow: "0px 6px 18px rgba(0, 200, 150, 0.2)",
          },
        },
        outlinedPrimary: {
          borderColor: colors.primaryBlue,
          color: colors.primaryBlue,
          "&:hover": {
            borderColor: "#0046CC",
            backgroundColor: "rgba(0,87,255,0.04)",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(16px)",
          boxShadow: "none",
          borderBottom: `1px solid ${colors.silver}`,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: colors.white,
          },
          "& fieldset": {
            borderColor: colors.silver,
          },
          "&:hover fieldset": {
            borderColor: colors.primaryBlue,
          },
          "&.Mui-focused fieldset": {
            borderColor: colors.primaryBlue,
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.silver,
          opacity: 0.6,
        },
      },
    },
  },
});

export default theme;
