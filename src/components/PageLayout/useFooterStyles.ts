import { makeStyles } from 'tss-react/mui';

export const useFooterStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    marginTop: 160,
    padding: '12px 0',
    gap: '24px',
    borderTop: `1px solid ${theme.colors.gray100}`,
    [theme.breakpoints.down('sm')]: {
      marginTop: 120,
      flexDirection: 'column',
      alignItems: 'initial',
    },
  },
  icon: {
    height: 30,
  },
  text: {
    display: 'flex',
    gap: '75px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      gap: '8px',
    },
  },
  subText: {
    display: 'flex',
    gap: '9px',
    minWidth: 160,
  }
}));
