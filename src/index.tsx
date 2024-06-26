import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import './i18n';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

declare global {
    interface NodeRequire {
        context: (directory: string, useSubdirectories?: boolean, regExp?: RegExp) => any;
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
          <HashRouter>
              <App />
          </HashRouter>
      </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
