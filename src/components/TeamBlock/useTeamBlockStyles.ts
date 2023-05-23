import { makeStyles } from 'tss-react/mui';

export const useTeamBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    marginTop: 120,
    [theme.breakpoints.down('md')]: {
      marginTop: 85,
      gap: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 90,
      gap: '20px',
    },
  },
  wrapper: {
    display: 'flex',
    gap: '10px',
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
      gap: '0px',
    },
  },
  icon: {
    width: 180,
    [theme.breakpoints.down('lg')]: {
      width: 170,
    },
    [theme.breakpoints.down(375)]: {
      width: 160,
    },
  }
}));
