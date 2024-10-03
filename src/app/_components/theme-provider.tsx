"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Palette } from '@mui/icons-material';

// declare module "@mui/material/styles" {
//   interface PaletteColor {
//     dark: 
//   }
// };

export const theme = createTheme({
  palette: {
    primary: { main: "#2563EB" },
    // dark: { main: "#082158" },
    secondary: { main: "#FAFAFA" },
    warning: { main: "#FCCE2D" },
    info: { main: "#0A0A0B" },
    text: { secondary: "#fff" },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 17,
  },
  components: {
    MuiStack: {
      defaultProps: { direction: "row" },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "xl" },
    },
    MuiChip: {
      styleOverrides: {
        outlined: { fontWeight: 600 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        notchedOutline: {
          borderColor: "white",
          color: "white",
          "&::hover": {
            borderColor: "white",
          },
        },
      },
    },
  },
});

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
