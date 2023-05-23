import { TRANSITION } from 'consts/styles';
import { makeStyles } from 'tss-react/mui';

export const usePartnerCardStyles = makeStyles()((theme) => ({
  root: {
    display: 'inline-block',
    width: 660,
    height: 420,
    whiteSpace: 'initial',    
    overflow: 'hidden',
    position: 'relative',
    userSelect: 'none',
    transition: TRANSITION,
    [theme.breakpoints.down('md')]: {
      width: 350,
      height: 340,
    },
    '&:hover': {
      transition: TRANSITION,
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(18, 18, 18, 0.7)',
        justifyContent: 'space-between',
        transition: TRANSITION,
        opacity: 1,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column-reverse',
          background: 'unset',
          justifyContent: 'flex-start',
        },
        '& > div': {
          displya: 'flex',
          transition: TRANSITION,
          opacity: 1,
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        },
        '& > a': {
          display: 'flex',
          opacity: 1,
          transition: TRANSITION,
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        }
      },
    },
  },
  image: { 
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: 'unset',
      height: '100%',
      marginLeft: '-25%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    position: 'relative',
    height: '100%',
    padding: '30px 36px',
  },
  icon: {
    position: 'absolute',
    button: 0,
    display: 'flex',
    '& > picture': {
      display: 'flex',
    },
  },
  description: {
    marginTop: 110,
    display: 'flex',
    opacity: 0,
    flexDirection: 'column',
    gap: '12px',
  },
  button: {
    display: 'none',
    opacity: 0,
  },
}));
