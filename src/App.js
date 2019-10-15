import React, { Component } from 'react'; 
import Layout from './containers/Layout/Layout'  ;  
import Auth from './containers/Auth/Auth' ;



class App extends Component {
  

  componentDidMount = () => {
    console.log(`amir is here [ test ]` , localStorage.getItem('accessToken') ) ;
  
  }
 
  render() {
    let content = null ;   
    if (localStorage.getItem('accessToken') ) {
        content = <Layout />
    } else {
       //change it   content = <App />
       content = <Layout /> 
    }
 
    return (
      <div className="app" >
         { content }
      </div>
    );
  }
}



export default App;
