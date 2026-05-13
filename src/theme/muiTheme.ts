import { createTheme } from "@mui/material/styles";

import { themeColors } from "./themeConfig";

export const muiTheme = createTheme({
  palette: {
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
});