import LinkedInSVG from './assets/linkedin.svg';
import { useTeamCardStyles } from './useTeamCardStyles';
import { Typography } from "@mui/material"
import { RawLink } from 'components/Link';

export interface TeamCardProps {
  icon: React.ReactNode;
  name: string;
  position: string;
  linkedIn: string;
} 

export const TeamCard = ({ icon, name, position, linkedIn }: TeamCardProps) => {
  const { classes } = useTeamCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        {icon}
      </div>
      <Typography variant='h5'>
        {name}
      </Typography>
      <Typography variant='body1'>
        {position}
      </Typography>
      <RawLink href={linkedIn}>
        <LinkedInSVG />
      </RawLink>
    </div>
  )
}