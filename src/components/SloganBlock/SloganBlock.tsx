import MonkeyPNG from './assets/monkey.png';
import AnkrSVG from './assets/ankr.svg';
import CrossSVG from './assets/cross.svg';
import MetaApesSVG from './assets/meta-apes.svg';
import { Typography } from "@mui/material"
import { t } from '../../utils/intl';
import { useBaseStyles } from 'components/useBaseStyles';
import { useSloganBlockStyles } from './useSloganBlockStyles';
import { BaseBlock } from 'components/BaseBlock/BaseBlock';
import { Image } from 'components/Image';

export const SloganBlock = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useSloganBlockStyles();

  return (
    <BaseBlock>
      <div className={cx(baseClasses.layout, classes.root)}>
        <Image 
          pictureClassName={classes.picture}
          className={classes.image} 
          src={MonkeyPNG}
          alt="monkey"
        />
        <div className={classes.content}>
          <div className={classes.icons}>
            <AnkrSVG />
            <CrossSVG />
            <MetaApesSVG />
          </div>
          <Typography variant="h3" color="black">
            {t('slogan-block.title')}
          </Typography>
        </div>
      </div>
    </BaseBlock>
  );
}