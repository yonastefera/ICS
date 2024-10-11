"use client";

import {
  createTheme,
  outlinedInputClasses,
  ThemeProvider,
} from "@mui/material";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#2563EB" },
    secondary: { main: "#FAFAFA" },
    tertiary: { main: "#082158" },
    warning: { main: "#FCCE2D" },
    info: { main: "#0A0A0B" },
    text: { secondary: "#fff" },
    error: { main: red[200] },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          borderRadius: 1000,
        },
      },
    },
    MuiStack: {
      defaultProps: { direction: "row" },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    MuiChip: {
      styleOverrides: {
        outlined: { fontWeight: 600 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "white",
          color: "white",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
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
