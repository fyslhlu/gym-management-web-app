import { createTheme } from "@mui/material/styles";

import { themeColors } from "./themeConfig";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    success: {
      main: themeColors.success,
    },
    warning: {
      main: themeColors.warning,
    },
    error: {
      main: themeColors.error,
    },
    background: {
      default: themeColors.background,
      paper: themeColors.card,
    },
    text: {
      primary: themeColors.text,
      secondary: themeColors.mutedText,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#111111",
          color: "#FFFFFF",
          borderRadius: "14px",
          "& fieldset": {
            borderColor: "rgba(255,255,255,0.18)",
          },
          "&:hover fieldset": {
            borderColor: "#E50914",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#E50914",
          },
        },
        input: {
          color: "#FFFFFF",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#A3A3A3",
          "&.Mui-focused": {
            color: "#FF4D00",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 800,
          borderRadius: "999px",
        },
      },
    },
  },
});