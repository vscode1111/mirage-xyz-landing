import { makeStyles } from 'tss-react/mui';

export const useSdkBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 30,
    padding: '40px 60px 40px 45%', 
    gap: '18px',
    minHeight: 600,
    backgroundColor: theme.colors.gray,
    borderRadius: 6,
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      padding: '40px 60px 40px 600px', 
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 'unset',
      padding: '30px 18px 30px 50%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '300px 18px 18px 18px', 
    },
  },
  picture: {
    position: 'absolute',
    left: -150,
    bottom: -200,
    width: "100%",
    maxWidth: 760,
    [theme.breakpoints.down('md')]: {
      left: -100,
      bottom: -100,
      maxWidth: 460,
    },
    [theme.breakpoints.down('sm')]: {
      width: 500,
      top: -175,
      left: 'calc((100% - 500px)/2)',
      bottom: 'unset',
    },
  },
  image: {
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      marginBottom: 10,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  buttons: {
    display: 'flex',
    gap: '24px',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      marginTop: 15,
    },
  }
}));
