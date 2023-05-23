import SdkPNG from './assets/sdk.png';
import ArrowSVG from '../../assets/arrow.svg';
import { Button, Typography } from "@mui/material"
import { t } from '../../utils/intl';
import { useBaseStyles } from 'components/useBaseStyles';
import { useSdkBlockStyles } from './useSdkBlockStyles';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { RawLink } from 'components/Link';
import { UNITY_SDK, UNREAL_SDK } from 'consts/links';
import { Image } from 'components/Image';

export const SdkBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useSdkBlockStyles();

  return (
    <BaseBlock>
      <div className={cx(baseClasses.layout, classes.root)}>
        <Image 
          pictureClassName={classes.picture}
          className={classes.image}
          src={SdkPNG}
          alt="image"
        />
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography variant="h2">
              {t('sdk-block.title')}
            </Typography>
          </div>
          <Typography variant="h3">
            {t('sdk-block.description')}
          </Typography>
          <div className={classes.buttons}>
            <Button component={RawLink} href={UNITY_SDK}>
              {t('common.for-unity')}
              <ArrowSVG />
            </Button>
            <Button component={RawLink} href={UNREAL_SDK}>
              {t('common.for-unreal')}
              <ArrowSVG />
            </Button>
          </div>
        </div>
      </div>
    </BaseBlock>
  );
}