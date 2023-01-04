import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider as TranslateProvider } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';

import { TranslateService } from '@services';

import { store } from '@store';

import App from './App';

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <TranslateProvider i18n={await TranslateService.init()}>
        <App />
      </TranslateProvider>
    </StoreProvider>
  </React.StrictMode>
);
