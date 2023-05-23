import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    borderBottom: `1px solid ${theme.colors.gray100}`,
    [theme.breakpoints.down('sm')]: {
      height: 48,
    },
  },
  icon: {
    height: 30,
    [theme.breakpoints.down('sm')]: {
      width: 124,
    },
  },
  text: {
    display: 'flex',
    gap: '48px',
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      gap: '24px',
    },
  }
}));
