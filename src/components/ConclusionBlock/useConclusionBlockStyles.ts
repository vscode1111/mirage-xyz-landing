import { makeStyles } from 'tss-react/mui';

export const useConclusionBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 250,
    gap: '24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 150,
      gap: '18px',
    },
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: 84,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
    },
  },
}));
