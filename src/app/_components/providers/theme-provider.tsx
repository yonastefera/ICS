'use client'

import { createTheme, outlinedInputClasses, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary']
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: '#2563EB' },
    secondary: { main: '#FAFAFA' },
    tertiary: { main: '#082158' },
    warning: { main: '#FCCE2D' },
    info: { main: '#0A0A0B' },
    text: {},
    error: { main: red[200] },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
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
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiStack: {
      defaultProps: { direction: 'row' },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiChip: {
      defaultProps: { variant: 'outlined', color: 'primary' },
      styleOverrides: {
        outlined: { fontWeight: 600 },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        colorSecondary:{
          color: 'white'
        },
        notchedOutline: {
          borderColor: 'white',
          color: 'white',
        },
        input: {
          color: 'white',
          
          // '&::placeholder': {
          //   color: 'white',
          // },
        },
        root: {
          color: 'white',
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'white',
          },
        },
      },
    },
  },
})

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
