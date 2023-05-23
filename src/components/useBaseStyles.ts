import { MAX_WIDTH, TRANSITION } from 'consts/styles';
import { makeStyles } from 'tss-react/mui';

export const useBaseStyles = makeStyles()((theme) => ({
  layout: {
    zIndex: 1,
    width: '100%',
    maxWidth: MAX_WIDTH,
  },
  border: {
    zIndex: 1,
    margin: '0 60px',
    [theme.breakpoints.down('md')]: {
      margin: '0 24px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 12px',
    },
  },
  textButton: {
    color: theme.colors.white,
    cursor: 'pointer',
    transition: TRANSITION,
    '&:hover': {
      color: theme.colors.yellow,
      '& > svg': {
        color: theme.colors.yellow,
      },
    },
  },
  full: {
    width: 'calc(100% - 60px)',
  },
  padding: {
    padding: '0 60px',
    [theme.breakpoints.down('md')]: {
      padding: '0 24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 12px',
    },
  }
}));
