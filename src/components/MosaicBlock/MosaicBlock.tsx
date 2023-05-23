import AppPNG from './assets/app.png';
import AppSmPNG from './assets/app-sm.png';
import ArrowSVG from '../../assets/arrow.svg';
import { Button, Typography } from "@mui/material"
import { t } from '../../utils/intl';
import { useBaseStyles } from 'components/useBaseStyles';
import { useMosaicBlockStyles } from './useMosaicBlockStyles';
import { useMemo } from 'react';
import { uid } from 'react-uid';
import { useIsSMDown, useIsMDDown } from 'hooks/useTheme';
import { ANCHOR_LINKS, CONTACT_US } from 'consts/links';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { RawLink } from 'components/Link';
import { Image } from 'components/Image';

export const MosaicBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useMosaicBlockStyles();
  const isSMDown = useIsSMDown();
  const isMDDown = useIsMDDown();

  const feature = useMemo(() => [
    t('mosaic-block.feature-1'),
    t('mosaic-block.feature-2'),
    t('mosaic-block.feature-3'),
    t('mosaic-block.feature-4'),
    t('mosaic-block.feature-5'),
    t('mosaic-block.feature-6'),
  ] as string[], [])

  return (
    <BaseBlock>
      <a id={ANCHOR_LINKS.MOSAIC_PLATFORM} />
      <div className={cx(baseClasses.layout, classes.root)}>
        {!isSMDown && <Image 
          pictureClassName={classes.picture}
          className={classes.image}
          src={isMDDown ? AppSmPNG : AppPNG}
          alt="image"
          width={isMDDown ? 315 : 860} 
        /> }
        <div className={classes.content}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h1" color="black">
              {t('mosaic-block.title')}
            </Typography>
            <Typography className={classes.subTitle} variant="h5" color="yellow">
              {t('mosaic-block.sub-title')}
            </Typography>
          </div>
          <Typography variant="h3" color="black">
            {t('mosaic-block.description')}
          </Typography>
          <Button 
            className={classes.button}
            variant="contained"
            component={RawLink}
            href={CONTACT_US}
          >
            {t('mosaic-block.notify-me')}
            <ArrowSVG />
          </Button>
          <div className={classes.features}>
            {feature.map(feature => (
              <Typography 
                key={uid(feature)} 
                className={classes.feature} 
                variant="h5" 
                color="black"
              >
                {feature}
              </Typography>
            ))}
          </div>
          {isSMDown && <Image 
             pictureClassName={classes.pictureSm}
             className={classes.image}
             src={AppSmPNG}
             alt="image"
             width={315} 
           /> }
        </div>
      </div>
    </BaseBlock>
  );
}