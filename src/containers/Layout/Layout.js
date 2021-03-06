
import Routes from '../../routes/Routes';
import React from 'react'
import Header from './../../components/Header/Header';
import Navigation from './../../components/Navigation/Navigation';
import { useBoolean } from '../../hooks';
import rtl from '../../RtlService';

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

            <Navigation navItemClicked={toggleMenu} classes={navClasses.join(' ')} />

            <div className="layout__content">
                <button onClick={rtl.toggle}>Rtltoggle</button>
                <Header menuIconClicked={toggleMenu} />
                <Routes />
            </div>
        </div>
    )
}

export default Layout;