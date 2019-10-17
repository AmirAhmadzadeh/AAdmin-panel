import React, { useEffect } from 'react';
import Layout from './containers/Layout/Layout';
import Auth from './containers/Auth/Auth';




function App(props) {

  useEffect(() => {
    console.log(`amir is here [ test ]`, localStorage.getItem('accessToken'));
  }) ; 
  
  function getContent() {
  
    if (localStorage.getItem('accessToken'))  return <Layout /> 
  
    return  <Layout />
   
  }

  return (
    <div className="app" >
  
      {getContent}
  
    </div>
  
  ) ; 
}



export default App;
