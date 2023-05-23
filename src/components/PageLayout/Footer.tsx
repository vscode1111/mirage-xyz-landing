import LogoSmSVG from '../../assets/logo-sm.svg';
import AnkrSVG from './assets/ankr.svg';
import { Typography } from "@mui/material";
import { useBaseStyles } from "components/useBaseStyles";
import { useFooterStyles } from "./useFooterStyles";
import { t } from "utils/intl";
import { RawLink } from 'components/Link';
import { ANKR } from 'consts/links';

export const Footer = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useFooterStyles();

  return (
    <div className={cx(baseClasses.border, classes.root)}>
      <div className={classes.icon}>
        <LogoSmSVG/>
      </div>
      <div className={classes.text}>
        <Typography variant="body1">
          {t('footer.all-rights')}
        </Typography>
        <RawLink href={ANKR}>
          <div className={cx(baseClasses.textButton, classes.subText)}>
            <Typography variant="body1">
              {t('footer.powered-by')}
            </Typography>
            <AnkrSVG />
          </div>
        </RawLink>
      </div>
    </div>
  );
}