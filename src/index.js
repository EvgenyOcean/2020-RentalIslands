import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import DataContextProvider from './contexts/DataContext';

ReactDOM.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
