import React, { useEffect } from 'react';
import Layout from './containers/Layout/Layout';
import { useSelector } from 'react-redux' ; 
import Auth from './containers/Auth/Auth' ; 


function app(props) {
   

  const { auth , error} = useSelector(state => state.auth);
  
  useEffect(() => {
        console.log('amir is here auth is ' , auth)  ; 
  }, [auth , error]) ; 
  
  function getContent() {
 
    if (auth) return  <Layout/>     
     return  <Auth />
    // return <Layout/>
   }
  
  return (
    <div className="app" >
      {getContent()}
    </div>
  ) ; 
}



export default app;
