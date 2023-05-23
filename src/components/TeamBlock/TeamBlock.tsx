import CeoPNG from './assets/ceo.png';
import CooPNG from './assets/coo.png';
import CmoPNG from './assets/cmo.png';
import CroPNG from './assets/cro.png';
import { useMemo } from 'react';
import { t } from 'utils/intl';
import { useTeamBlockStyles } from './useTeamBlockStyles';
import { uid } from 'react-uid';
import { TeamCard, TeamCardProps } from './TeamCard';
import { Typography } from '@mui/material';
import { useBaseStyles } from 'components/useBaseStyles';
import { ANCHOR_LINKS } from 'consts/links';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { Image } from 'components/Image';

export const TeamBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useTeamBlockStyles();

  const cards = useMemo(() => [
    {
      icon: <Image className={classes.icon} src={CeoPNG} alt="card-1" />,
      name: t('team-block.card-1.name'),
      position: t('team-block.card-1.position'),
      linkedIn: 'https://www.linkedin.com/in/kylesmithsprofile',
    },
    {
      icon: <Image className={classes.icon} src={CooPNG} alt="card-2" />,
      name: t('team-block.card-2.name'),
      position: t('team-block.card-2.position'),
      linkedIn: 'https://www.linkedin.com/in/taylor-shim-90675242',
    },
    {
      icon: <Image className={classes.icon} src={CmoPNG} alt="card-3" />,
      name: t('team-block.card-3.name'),
      position: t('team-block.card-3.position'),
      linkedIn: 'https://www.linkedin.com/in/carrnicholas',
    },
    {
      icon: <Image className={classes.icon} src={CroPNG} alt="card-4" />,
      name: t('team-block.card-4.name'),
      position: t('team-block.card-4.position'),
      linkedIn: 'https://www.linkedin.com/in/ishanvishnoi',
    },
  ] as TeamCardProps[], [classes])

  return (
    <BaseBlock>
      <a id={ANCHOR_LINKS.TEAM} />
      <div className={cx(baseClasses.layout, classes.root)}>
        <Typography variant="h2">
          {t('team-block.title')}
        </Typography>
        <div className={classes.wrapper}>
          {cards.map(card => (        
            <TeamCard 
              key={uid(card)}
              icon={card.icon}
              name={card.name}
              position={card.position}
              linkedIn={card.linkedIn}
            />
          ))}
        </div>
      </div>
    </BaseBlock>
  )
}