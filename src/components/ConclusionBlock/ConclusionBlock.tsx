import ArrowSVG from '../../assets/arrow.svg';
import { Typography, Button } from "@mui/material"
import { t } from '../../utils/intl';
import { useBaseStyles } from 'components/useBaseStyles';
import { useConclusionBlockStyles } from './useConclusionBlockStyles';
import { useIsSMDown } from 'hooks/useTheme';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { RawLink } from 'components/Link';
import { CONTACT_US } from 'consts/links';

export const ConclusionBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useConclusionBlockStyles();
  const isSMDown = useIsSMDown();

  return (
    <BaseBlock transparent>
      <div className={cx(baseClasses.layout, classes.root)}>
        <Typography className={classes.title} variant="h2" align='center'>
          {t(isSMDown ? 'conclusion-block.title-sm' : 'conclusion-block.title')}
        </Typography>
        <Button component={RawLink} href={CONTACT_US}>
          {t('conclusion-block.contact-us')}
          <ArrowSVG />
        </Button>
      </div>
    </BaseBlock>
  );
}