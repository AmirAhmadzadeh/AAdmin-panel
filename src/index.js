import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';


const AdminPanel = () => {
  return (
    <Provider store={store}>

      <BrowserRouter basename='/admin'>
        <App />
      </BrowserRouter>

    </Provider>
  )
}

const store = configureStore();

ReactDOM.render(

  <AdminPanel />
  ,
  document.getElementById('root'));





serviceWorker.unregister();
