import React from 'react';
import Layout from './containers/Layout/Layout';
<<<<<<< HEAD
import { useSelector } from 'react-redux' ; 
import Auth from './containers/Auth/Auth' ; 
=======
import { useSelector } from 'react-redux';
import Auth from './containers/Auth/Auth';
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6


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
<<<<<<< HEAD
  ) ; 
=======
  );
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
}



export default app;
