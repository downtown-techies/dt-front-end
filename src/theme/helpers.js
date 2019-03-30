import { get } from 'lodash';

export const themeColor = (colorKey) => {
  return (props) => {
    return get(props, `theme.colors.${colorKey}`, '');
  };
};

export const themeBreakpoint = (bpKey) => {
  return (props) => {
    return get(props, `theme.breakpoints.${bpKey}`, '');
  };
};

export const themeSize = (sizeKey) => {
  return (props) => {
    return get(props, `theme.sizes.${sizeKey}`, '');
  };
};

