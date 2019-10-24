import Routes from '../../routes/Routes';
import React, { Component } from 'react'
import Header from './../../components/Header/Header';
import Navigation from './../../components/Navigation/Navigation';
import useBoolean from './../../hooks/useBoolean';



function Layout(props) {
    const [show, toggleShow] = useBoolean(false);
    const [BackDrop, toggleBackDrop] = useBoolean(false);
    function toggleMenu() {
        toggleShow();
        toggleBackDrop();
    }

    let navClasses = ["layout__navigation"];
    let backDropStyle = null;

    if (show) {
        navClasses.push("layout__navigation__show");
        backDropStyle = "layout__navigation__backDrop";
    }

    return (
        <div className="layout">
            <div className={backDropStyle} onClick={toggleMenu}></div>
            <div className={navClasses.join(' ')} >
                <Navigation navItemClicked={toggleMenu} />
            </div>
            <div className="layout__content">
                <Header menuIconClicked={toggleMenu} />
                <Routes />
            </div>
        </div>

    )

}

export default Layout;