import * as styledComponents from 'styled-components';
import GlobalStyle from './globalStyle';
import primaryTheme from './primaryTheme';

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents;

export {
  css,
  createGlobalStyle,
  primaryTheme,
  ThemeProvider,
  GlobalStyle,
};

export default styled;
