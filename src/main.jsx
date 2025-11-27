import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import './styles/index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2332',
      light: '#2d3e50',
      dark: '#0e131c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d4af37',
      light: '#e9c84a',
      dark: '#b8952e',
      contrastText: '#1a2332',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#8b95a5',
    },
    success: {
      main: '#28a745',
      light: '#48c764',
      dark: '#1e7e34',
    },
    warning: {
      main: '#ffc107',
      light: '#ffcd39',
      dark: '#d39e00',
    },
    error: {
      main: '#dc3545',
      light: '#e4606d',
      dark: '#bd2130',
    },
    info: {
      main: '#4a90e2',
      light: '#6ba3e8',
      dark: '#357abd',
    },
    grey: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e8eaed',
      300: '#dee2e6',
      400: '#c0c5ce',
      500: '#8b95a5',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#1a2332',
    },
    h2: {
      fontWeight: 700,
      color: '#1a2332',
    },
    h3: {
      fontWeight: 600,
      color: '#1a2332',
    },
    h4: {
      fontWeight: 600,
      color: '#1a2332',
    },
    h5: {
      fontWeight: 600,
      color: '#1a2332',
    },
    h6: {
      fontWeight: 600,
      color: '#1a2332',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(26, 35, 50, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2d3e50 0%, #1a2332 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #d4af37 0%, #b8952e 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #e9c84a 0%, #d4af37 100%)',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e8eaed',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
