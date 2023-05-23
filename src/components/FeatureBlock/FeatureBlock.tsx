import LaunchSVG from './assets/launch.svg';
import IntegrateSVG from './assets/integrate.svg';
import CompatibleSVG from './assets/compatible.svg';
import { useMemo } from 'react';
import { t } from 'utils/intl';
import { useFeatureBlockStyles } from './useFeatureBlockStyles';
import { uid } from 'react-uid';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { useBaseStyles } from 'components/useBaseStyles';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';

export const FeatureBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useFeatureBlockStyles();

  const cards = useMemo(() => [
    {
      icon: <LaunchSVG/>,
      title: t('feature-block.card-1.title'),
      description: t('feature-block.card-1.description'),      
    },
    {
      icon: <IntegrateSVG/>,
      title: t('feature-block.card-2.title'),
      description: t('feature-block.card-2.description'), 
    },
    {
      icon: <CompatibleSVG/>,
      title: t('feature-block.card-3.title'),
      description: t('feature-block.card-3.description'), 
    },
  ] as FeatureCardProps[], [])

  return (
    <BaseBlock className={classes.baseBlock}>
      <div className={cx(baseClasses.layout, classes.root)}>
        <div className={classes.scrollingWrapper}>
          {cards.map(card => (        
            <FeatureCard
              key={uid(card)}
              icon={card.icon}
              title={card.title}
              description={card.description}
              count={cards.length}
            />
          ))}
        </div>
      </div>
    </BaseBlock>
  )
}