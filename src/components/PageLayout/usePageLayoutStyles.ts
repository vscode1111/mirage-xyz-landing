import { makeStyles } from 'tss-react/mui';

export const usePageLayoutStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    minHeight: '100vh',
    minWidth: '100%',
  },
  topVideo: {
    position: 'absolute',
    top: 0,
    width: '100%',
    opacity: 0.62,
  },
  bottomVideo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 0.62,
  },
  bottomVideoOver: {
    position: 'absolute',
    bottom: 450,
    width: '100%',
    height: 240,
    background: 'linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0) 100%)',
    [theme.breakpoints.down('sm')]: {
      bottom: 260,
    }
  },
  testContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    height: 600,
  },
  testDiv: {
    width: '100%',
  },
  main: {
    zIndex: 1,
  },
}));
