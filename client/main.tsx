import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { TranslateProvider, initTranslateConfig } from '@/services';

import { StoreProvider } from '@/store';

import { DataProvider } from '@/context';

import App from './App';

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <StoreProvider>
      <DataProvider>
        <TranslateProvider config={await initTranslateConfig()}>
          <App />
        </TranslateProvider>
      </DataProvider>
    </StoreProvider>
  </StrictMode>
);
