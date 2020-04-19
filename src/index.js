import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
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
<<<<<<< HEAD

  <AdminPanel />
  ,
  document.getElementById('root'));





serviceWorker.unregister();
=======
  <AdminPanel />
  , document.getElementById('root'));
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
