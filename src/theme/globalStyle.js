import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import primaryTheme from './primaryTheme';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    margin: 0;
    padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* end reset */

  /* TODO replace color after flight */

  html {
    font-size: 20px;
    box-sizing: border-box;
    background-color: ${primaryTheme.colors.background};
  }

  body {
    background-color: ${primaryTheme.colors.background};
  }

  #root {
    background-color: ${primaryTheme.colors.background};
  }


  html,
  body,
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: 'Akkurat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${primaryTheme.colors.backgroundDark};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 0;
  }

  em {
    font-style: italic;
    font-weight: 400;
  }

  strong {
    font-style: normal;
    font-weight: 700;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 1em;
    font-weight: inherit;
  }

  h1 {
    font-size: 1.2rem;
  }

  sup {
    /* 'top' matches designs better than 'super' */
    vertical-align: top;
    font-size: smaller;
  }

  /* helper class */
  .is-scroll-locked {
    overflow: hidden;
  }

  /* TODO-figure out why this has bottom padding */
  .slick-track { 
    margin-bottom: -0.75rem;
  }

  .slick-slider {
    top: -1px;
  }

/* Other styles */

  {/* aesthetics matter */}
  .beliefs-content {
    padding: 11rem 0rem 9rem;
    left: 22.5rem;
    text-align: center;
    width: 100vw;
  }
  
  .beliefs-bottom-content {
    padding: 2.5rem 0 5rem;
    text-align: center;
    width: 100vw;
  }
  
  .beliefs-bottom-content__header {
    position: relative;
    line-height: 3.5rem;
  }

  {/* aesthetics matter */}
  .aesthetics-content {
    padding: 10rem 0rem 10rem;
    text-align: right;
    width: 100vw;
  }
  
  .aesthetics-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 6rem;
  }
  
  .aesthetics-content__info {
    position: relative;
    line-height: 1.8rem;
    right: 3rem;
  }
  
  {/* freedom */}
  .information-content {
    padding: 10rem 0rem 10rem;
    text-align: right;
  }
  
  .information-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 8rem;
  }
  
  .information-content__info {
    position: relative;
    line-height: 1.8rem;
    right: 6rem;
  }
  
  {/* well crafted tools */}
  .technology-content {
    padding: 10rem 0rem 10rem;
    text-align: left;
  }
  
  .technology-content__header {
    position: relative;
    line-height: 3.5rem;
    left: 4rem;
  }
  
  .technology-content__info {
    position: relative;
    padding-top: 1rem;
    line-height: 1.8rem;
    left: 8rem;
  }
  
  {/* simplify the complex */}
  .simplify-content {
    padding: 10rem 0rem 10rem;
    text-align: left;
  }
  
  .simplify-content__header {
    position: relative;
    line-height: 3.5rem;
    left: 0rem;
  }
  
  .simplify-content__info {
    position: relative;
    padding-top: 1rem;
    line-height: 1.8rem;
    left: 2rem;
  }

  {/* aesthetics matter */}
  .values-content {
    padding: 7rem 0rem 13rem;
    text-align: center;
    width: 100vw;
  }
  
  .values-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 12rem;
  }

  {/* aesthetics matter */}
  .we-do-content {
    padding: 11rem 0rem 9rem;
    text-align: center;
    width: 100vw;
  }
  
  .we-do-content__header {
    position: relative;
    line-height: 3.5rem;
  }

  .bm-burger-button {
    display: none !important;
  }
  
  .bm-cross-button {
    display: none !important;
  }


`;

export default GlobalStyle;
