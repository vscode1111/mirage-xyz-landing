import { useFeatureCardStyles } from './useFeatureCardStyles';
import { Typography } from "@mui/material"

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
} 

export const FeatureCard = ({ icon, title, description, count }: FeatureCardProps) => {
  const { classes } = useFeatureCardStyles({ count });

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.icon}>
          {icon}
        </div>
        <Typography variant='h3'>
          {title}
        </Typography>
        <section className={classes.description}>
          <Typography variant='body1'>
            {description}
          </Typography>
        </section>
      </div>
    </div>
  )
}