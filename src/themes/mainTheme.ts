import { createTheme, ThemeOptions } from '@mui/material/styles';
import { globalStyles } from 'themes/globalStyles';
import { COLORS, TRANSITION } from 'consts/styles';

const baseTheme = createTheme({
  colors: COLORS,
  typography: {
    fontFamily: [
      'TT Commons',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 685,
      md: 950,
      lg: 1440,
      xl: 1536,
    },
  },
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 500,
          fontSize: 110,
          letterSpacing: '-0.05em',
          lineHeight: '82%',
          [baseTheme.breakpoints.down('md')]: {
            fontSize: 90,
          },
          [baseTheme.breakpoints.down('sm')]: {
            fontSize: 60,
          },
        },
        h2: {
          fontWeight: 500,
          fontSize: 84,
          lineHeight: '90%',
          letterSpacing: '-0.05em',
          [baseTheme.breakpoints.down('md')]: {
            fontSize: 48,
          },
        },
        h3: {
          fontWeight: 500,
          fontSize: 36,
          lineHeight: '100%',
          letterSpacing: '-0.02em',
          [baseTheme.breakpoints.down('md')]: {
            fontSize: 24,
          },
        },
        h4: {
          fontWeight: 700,
          fontSize: 17,
          lineHeight: '24px',
          letterSpacing: '-0.02em',
          [baseTheme.breakpoints.down('sm')]: {
            fineHeight: '18px',
          },
        },
        h5: {
          fontWeight: 600,
          fontSize: 17,
          lineHeight: '18px',
          letterSpacing: '-0.02em',
        },
        body1: {
          fontWeight: 400,
          fontSize: 17,
          lineHeight: '24px',
          letterSpacing: '-0.025em',
          [baseTheme.breakpoints.down('sm')]: {
            lineHeight: '18px',
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          display: 'flex',
          gap: '12px',
          width: 200,
          fontWeight: 600,
          lineHeight: '100%',
          backgroundColor: COLORS.yellow,
          color: COLORS.black,
          textTransform: 'initial',
          transition: TRANSITION,
          '&:hover': {
            backgroundColor: COLORS.white,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
          },
        },

        outlined: {
          backgroundColor: 'transparent',
          color: COLORS.white,
          border: `1px solid ${COLORS.yellow}`,
          '&:hover': {
            opacity: 1,
            color: COLORS.black,
            backgroundColor: COLORS.yellow,
            border: `1px solid ${COLORS.yellow}`,
            '& > svg': {
              color: COLORS.black,
            },
          },
          '&:disabled': {
            opacity: 1,
            backgroundColor: 'transparent',
          },
        },

        contained: {
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          '&:hover': {
            color: COLORS.black,
            backgroundColor: COLORS.white,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
          },
        },
        
        sizeSmall: {
          fontSize: 13,
          borderRadius: 6,
          height: 32,
          width: 32,
          minWidth: 32,
        },

        sizeMedium: {
          fontSize: 17,
          borderRadius: 6,
          height: 54,
        },

        sizeLarge: {
          fontSize: 16,
          borderRadius: 6,
          height: 50,
        },
      },

      variants: [
        {
          props: { size: 'tiny' },
          style: {
            fontSize: 14,
            borderRadius: 20,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 14,
            paddingRight: 14,
            height: 28,
            minWidth: 80,
          },
        },
      ],
    },
  },
});
