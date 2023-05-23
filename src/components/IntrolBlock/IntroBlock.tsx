import ArrowSVG from '../../assets/arrow.svg';
import { Typography, Button } from "@mui/material"
import { t, tHTML } from '../../utils/intl';
import { useBaseStyles } from 'components/useBaseStyles';
import { useIntroBlockStyles } from './useIntroBlockStyles';
import { useBreakpointDown } from 'hooks/useTheme';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { RawLink } from 'components/Link';
import { UNITY_SDK, UNREAL_SDK } from 'consts/links';

export const IntroBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useIntroBlockStyles();

  const bp = useBreakpointDown();

  return (
    <BaseBlock className={classes.baseBlock} transparent>
      <div className={cx(baseClasses.layout, classes.root)}>
        <Typography variant="h1">
          {tHTML(`intro-block.title-${bp}`)}
        </Typography>
        <Typography className={classes.subtitle} variant="h3">
          {tHTML(`intro-block.subtitle-${bp}`)}
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
        <Typography className={classes.footer} variant="body1">
          {tHTML('intro-block.footer')}
        </Typography>
      </div>
    </BaseBlock>
  );
}