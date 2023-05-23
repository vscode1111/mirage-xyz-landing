import { COLORS, TRANSITION } from 'consts/styles';
import { makeStyles } from 'tss-react/mui';

export const useFeatureCardStyles = makeStyles<{ count: number }>()((theme, { count}) => ({
  root: {
    display: 'inline-block',
    minWidth: 440,
    width: `calc(100%/${count})`,
    height: 320,
    whiteSpace: 'initial',    
    overflow: 'hidden',
    userSelect: 'none',
    transition: TRANSITION,
    backgroundColor: theme.colors.black,
    [theme.breakpoints.down('md')]: {
      minWidth: 240,
      height: 230,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'flex-end',
    height: '100%',
    padding: 30,
    transition: TRANSITION,
    transform: 'translateY(70px)',
    '& > section': {
      transition: TRANSITION,
      opacity: 0,
    },
    [theme.breakpoints.down('md')]: {
      gap: '9px',
      padding: 15,
    },
    '&:hover': {
      transition: TRANSITION,
      backgroundColor: COLORS.gray,
      transform: 'translateY(0px)',
      '& > section': {
        transition: TRANSITION,
        opacity: 1,
      },
    },
  },
  icon: {
    marginBottom: 5,
  },
  description: {
  }
}));
