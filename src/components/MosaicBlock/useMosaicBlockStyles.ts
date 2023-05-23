import { makeStyles } from 'tss-react/mui';

export const useMosaicBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: 32,
    padding: '40px 160px 40px 30px', 
    gap: '18px',
    minHeight: 600,
    backgroundColor: theme.colors.yellow,
    borderRadius: 6,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      marginTop: 60,
      minHeight: 510,
      padding: '24px 18px 0 18px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      height: 1100,
      padding: '24px 18px 0 18px', 
      minHeight: 'unset',
    },
  },
  picture: {
    position: 'absolute',
    right: 0,
    bottom: -100,
    width: '55%',
    maxWidth: 760,
    [theme.breakpoints.down('md')]: {
      top: 18,
      right: 18,
      width: 'unset',
    },
  },
  pictureSm: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: 'calc(50% - 10px)',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 330px)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  titleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    color: theme.colors.black,
    [theme.breakpoints.down('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: 60,
    },
  },
  subTitle: {
    height: 36,
    padding: 12,
    borderRadius: 18,
    backgroundColor: theme.colors.black,
  },
  button: {
    width: 240,
    marginTop: 10,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
    },
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  feature: {
    height: 36,
    padding: 12,
    borderRadius: 18,
    backgroundColor: theme.colors.gray200,
    width: 'fit-content',
  }
}));
