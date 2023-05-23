import { makeStyles } from 'tss-react/mui';

export const useBaseBlockStyles = makeStyles<{ transparent?: boolean }>()((theme, { transparent }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    padding: '0 60px',
    backgroundColor: transparent ? 'transparent' : theme.colors.dark,
    [theme.breakpoints.down('md')]: {
      padding: '0 24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 12px',
    },
  },
}));
