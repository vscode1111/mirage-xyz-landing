import ArrowSVG from '../../assets/arrow.svg';
import { usePartnerCardStyles } from './usePartnerCardStyles';
import { Typography, Button } from "@mui/material"
import { t } from 'utils/intl';
import { RawLink } from 'components/Link';
import { UNREAL_SDK } from 'consts/links';
import { Image } from 'components/Image';

export interface PartnerCardProps {
  icon: React.ReactNode;
  description: string;
  company: string;
  backgroundImage: string;
  url: string;
}   

export const PartnerCard = ({ icon, description, company, backgroundImage, url }: PartnerCardProps) => {
  const { classes } = usePartnerCardStyles();

  return (
    <div className={classes.root}>
      <Image
        className={classes.image}
        src={backgroundImage}
        alt={company} 
      />
      <div className={classes.content}>
        <section className={classes.icon}>
          {icon}
        </section>
        <div className={classes.description}>
          <Typography variant='body1'>
            {description}
          </Typography>
          <Typography variant='h4'>
            {company}
          </Typography>
        </div>
        <Button 
          className={classes.button}
          component={RawLink}
          href={url}
          variant="outlined"
        >
          {t('partner-block.learn-more')}
          <ArrowSVG />
        </Button>
      </div>
    </div>
  )
}