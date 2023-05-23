import { makeStyles } from 'tss-react/mui';

export const useCropStyles = makeStyles<{ height: string | number; currentWidth: number}>()((theme, { height, currentWidth}) => ({
  containerV: {
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'absolute',
    height,
  },
  divV: {
    width: '100%',
  },
  containerH: {
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height,
  },
  divH: {
    height: '100%',
    // width: currentWidth,
  },
}));
