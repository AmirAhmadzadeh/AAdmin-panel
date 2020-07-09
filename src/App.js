import React from 'react';
import Layout from './containers/Layout/Layout';
import { useSelector } from 'react-redux';
import Auth from './containers/Auth/Auth';

function AuthCheck() {
  const { auth } = useSelector(state => state.auth);
  if (!auth) return <Auth />
  return <Layout />
}

export default function() {
  return (
    <div className="app" >
        <AuthCheck/>
    </div>
  );
}



