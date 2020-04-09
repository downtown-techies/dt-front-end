import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, primaryTheme, ThemeProvider } from './theme/index';
import App from './app/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={primaryTheme}> 
    <>
      <App />
      <GlobalStyle />
    </>
  </ ThemeProvider>, 
  document.getElementById('root')
);

// unregister service workers with unregister(); --> current may cause cache issues
serviceWorker.unregister();
