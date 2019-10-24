import React, { useEffect } from 'react';
import Layout from './containers/Layout/Layout';




function App(props) {

  useEffect(() => {
    // console.log(`amir is here [ test ]`, localStorage.getItem('accessToken'));
  }) ; 
  
  function getContent() {
  
    if (localStorage.getItem('accessToken'))  return <Layout /> 
  
    return  <Layout />
   
  }
  console.log(getContent())
  return (
    <div className="app" >
  
      {getContent()}
  
    </div>
  
  ) ; 
}



export default App;
