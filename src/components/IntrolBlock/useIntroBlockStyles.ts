import { makeStyles } from 'tss-react/mui';

export const useIntroBlockStyles = makeStyles()((theme) => ({
  baseBlock: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 90px)',
      alignItems: 'center',
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    gap: '33px',
    paddingBottom: 120,
    maxWidth: 'unset',
    [theme.breakpoints.down('sm')]: {
      marginTop: 220,
      gap: '10px',
      paddingBottom: 15,
    }
  },
  subtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  buttons: {
    display: 'flex',
    gap: '24px',
  },
  footer: {
    display: 'none',
    marginTop: 10,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      display: 'unset',
      gap: '10px',
    }
  },
}));
