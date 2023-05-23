import MetaApesIconSVG from './assets/meta-apes-icon.svg';
import MetaApesBackPNG from './assets/meta-apes-back.png';
import StarfallArenaIconSVG from './assets/starfall-arena-icon.svg';
import StarfallArenaBackPNG from './assets/starfall-arena-back.png';
import SuperpowerIconSVG from './assets/superpower-icon.svg';
import SuperpowerBackPNG from './assets/superpower-back.png';
import MultiverseIconSVG from './assets/multiverse-icon.svg';
import MultiverseBackPNG from './assets/multiverse-back.png';
import { Typography } from '@mui/material';
import { useBaseStyles } from 'components/useBaseStyles';
import { useMemo } from 'react';
import { t } from 'utils/intl';
import { usePartnerBlockStyles } from './usePartnerBlockStyles';
import { uid } from 'react-uid';
import { PartnerCard, PartnerCardProps } from './PartnerCard';

export const PartnerBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = usePartnerBlockStyles();

  const cards = useMemo(() => [
    {
      icon: <MetaApesIconSVG/>,
      description: t('partner-block.card-1.description'),
      company: t('partner-block.card-1.company'),      
      backgroundImage: MetaApesBackPNG,
      url: 'https://metaapesgame.com',
    },
    {
      icon: <StarfallArenaIconSVG/>,
      description: t('partner-block.card-2.description'),
      company: t('partner-block.card-2.company'), 
      backgroundImage: StarfallArenaBackPNG,
      url: 'http://playstarfall.com',
    },
    {
      icon: <SuperpowerIconSVG />,
      description: t('partner-block.card-3.description'),
      company: t('partner-block.card-3.company'), 
      backgroundImage: SuperpowerBackPNG,
      url: 'https://ssquad.games',
    },
    {
      icon: <MultiverseIconSVG/>,
      description: t('partner-block.card-4.description'),
      company: t('partner-block.card-4.company'),      
      backgroundImage: MultiverseBackPNG,
      url: 'https://entermultiverse.io',
    },
  ] as PartnerCardProps[], []);

  const newCards = useMemo(() => [...cards, ...cards, ...cards, ...cards], [cards]);

  return (
    <div className={classes.root}>
      <Typography 
        className={cx(
          baseClasses.layout,
          baseClasses.full,
          baseClasses.padding,
          classes.title,
        )} 
        variant="h3">
        {t('partner-block.title')}
      </Typography>
      <div className={classes.scrollingWrapper}>
        <div className={classes.subWrapper}>
            {newCards.map((card, index: number) => (        
              <PartnerCard 
                key={`${uid(card)}_${index}`}
                icon={card.icon}
                description={card.description}
                company={card.company}
                backgroundImage={card.backgroundImage}
                url={card.url}
              />
            ))}
        </div>
      </div>
    </div>
  )
}