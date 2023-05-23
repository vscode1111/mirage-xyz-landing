import LogoSVG from '../../assets/logo.svg';
import LogoSmSVG from '../../assets/logo-sm.svg';
import { Typography } from "@mui/material";
import { useBaseStyles } from "components/useBaseStyles";
import { t } from "utils/intl";
import { useHeaderStyles } from "./useHeaderStyles";
import { useIsSMDown } from 'hooks/useTheme';
import { ANCHOR_LINKS } from 'consts/links';

function scrollToIdHref(idHref: string) {
  document.querySelector(`[id="${idHref}"]`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center',
  });
}

export const Header = () => {
  const { classes: baseClasses, cx } = useBaseStyles();
  const { classes } = useHeaderStyles();
  const isSMDown = useIsSMDown();  

  return (
    <div className={cx(baseClasses.border, classes.root)}>
      <div className={classes.icon}>
        {isSMDown ? <LogoSmSVG/> : <LogoSVG />}
      </div>
      <div className={classes.text}>
        <Typography 
          className={baseClasses.textButton} 
          variant="body1" 
          onClick={() => scrollToIdHref(ANCHOR_LINKS.MOSAIC_PLATFORM)}
        >
          {t('header.mosaic-platform')}
        </Typography>
        <Typography 
          className={baseClasses.textButton} 
          variant="body1"
          onClick={() => scrollToIdHref(ANCHOR_LINKS.TEAM)}
        >
          {t('header.team')}
        </Typography>
      </div>
    </div>
  );
}