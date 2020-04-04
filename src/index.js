import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18 from './i18';

const AdminPanel = () => {
  return (
    <I18nextProvider i18n={i18}>
      <Provider store={store}>
        <BrowserRouter basename='/admin'>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  )
}

const store = configureStore();

ReactDOM.render(
  <AdminPanel />
  , document.getElementById('root'));
