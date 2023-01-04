import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider as TranslateProvider } from 'react-i18next';

import { TranslateService } from '@services';

import App from './App';

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TranslateProvider i18n={await TranslateService.init()}>
      <App />
    </TranslateProvider>
  </React.StrictMode>
);
