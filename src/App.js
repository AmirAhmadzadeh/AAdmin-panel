import React from 'react';
import Layout from './containers/Layout/Layout';
import { useSelector } from 'react-redux';
import Auth from './containers/Auth/Auth';


function app() {
  const { auth } = useSelector(state => state.auth);

  function getContent() {
    if (auth) return <Layout />
    return <Auth />
  }

  return (
    <div className="app" >
      {getContent()}
    </div>
  );
}



export default app;
