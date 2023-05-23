import { TRANSITION } from 'consts/styles';
import { makeStyles } from 'tss-react/mui';

export const useTeamCardStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
    alignItems: 'center',
    marginBottom: 15,
    transition: TRANSITION,
  },
  icon: {
    marginBottom: 5,
  },
}));
