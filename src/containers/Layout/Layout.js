import Routes from '../../routes/Routes';
import React, { Component } from 'react'
import Header from './../../components/Header/Header';
import Navigation from './../../components/Navigation/Navigation';

class Layout extends Component {
   
    state = {
        show : false  ,
        BackDrop:false
    }
    toggleMenu = () => {
        this.setState(prevState => {
            return {
                show : !prevState.show  , 
                BackDrop : !prevState.BackDrop 
            }
        })
    }
   
   
    render() {
        let navClasses = ["layout__navigation"] ; 
        let backDropStyle = null ; 
        if(this.state.show){
            navClasses.push("layout__navigation__show"); 
            backDropStyle  = "layout__navigation__backDrop" ;  
        }
        return (
            <div className="layout">       
                <div className={backDropStyle} onClick={this.toggleMenu}></div>
                <div className={navClasses.join(' ')} >
                    <Navigation navItemClicked={this.toggleMenu} />
                </div>
                <div className="layout__content">
                    <Header menuIconClicked={this.toggleMenu}/>
                    <Routes />
                </div>
            </div>

        )
    }
}




export default Layout;