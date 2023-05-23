import { makeStyles } from 'tss-react/mui';
import { keyframes } from "tss-react";

const FULL_WiDTH = 660 * 4;
const FULL_WiDTH_SM = 350 * 4;

const getAnimation = (width: number) => `${keyframes`
    0% {
      transform: translateX(0) translateZ(0px);    
    }
    100% {
      transform: translateX(-${width}px) translateZ(0px);
    }
  `} 60s linear 0s infinite none running
`

export const usePartnerBlockStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: 100,
    backgroundColor: theme.colors.dark,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 60,
      gap: '18px',
    },
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
  },
  scrollingWrapper: {
    display: 'block',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  subWrapper: {
    animation: getAnimation(FULL_WiDTH),
    [theme.breakpoints.down('sm')]: {
      animation: getAnimation(FULL_WiDTH_SM),
    },
    '&:hover': {
      animationPlayState: 'paused',
    },
  },
}));
