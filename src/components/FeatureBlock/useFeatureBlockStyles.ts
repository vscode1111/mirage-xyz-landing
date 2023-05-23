import { makeStyles } from 'tss-react/mui';

export const useFeatureBlockStyles = makeStyles()((theme) => ({
  baseBlock: {
    padding: 0,
  },
  root: {
    display: 'flex',
    marginTop: 80,
    [theme.breakpoints.down('md')]: {
      marginTop: 80,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  scrollingWrapper: {
    display: 'block',
    width: '100%',
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    borderRadius: 6,
    height: 320,
    [theme.breakpoints.down('md')]: {
      borderRadius: 0,
      height: 'unset',
    },
  },
}));
