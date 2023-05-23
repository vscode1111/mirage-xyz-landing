import { useMediaQuery, useTheme } from '@mui/material';

export const useIsXSDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('xs'));
};

export const useIsSMDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};

export const useIsMDDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

export const useIsMDUp = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
};

export const useIsLGDown = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('lg'));
};

export const useBreakpointDown = (): string => {
  const theme = useTheme();
  const isMDDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));
  if (isSMDown) {
    return 'sm';
  }
  if (isMDDown) {
    return 'md';
  }
  return 'lg';
};
