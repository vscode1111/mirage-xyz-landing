import { makeStyles } from 'tss-react/mui';

export const useSloganBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 110,
    gap: '18px',
    minHeight: 300,
    backgroundColor: theme.colors.yellow,
    borderRadius: 12,
    [theme.breakpoints.down('md')]: {
      minHeight: 220,
      marginTop: 50,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 220,
      padding: 18,
      minHeight: 290,
    },
  },
  picture: {
    position: 'absolute',
    left: '7%',
    bottom: -9,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      left: 'unset',
      bottom: 'unset',
      width: 'unset',
      top: -218,
    },
  },
  image: {
    maxWidth: 312,
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 170,
      width: 'unset',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '10%',
    maxWidth: 600,
    width: '50%',
    gap: '35px',
    [theme.breakpoints.down('sm')]: {
      position: 'unset',
      width: 'unset',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    color: theme.colors.black,
  }
}));
