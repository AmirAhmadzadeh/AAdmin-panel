import React from 'react';
import MenuIcon from '@material-ui/icons/MenuTwoTone';
import Icon from '../Icons/Icons';
import { Fab, TextField } from '@material-ui/core';

const header = (props) => {
    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__navigation--button-brand">
                    {/* <h2 className="heading__first heading"> Dashbord </h2> */}
                    <MenuIcon onClick={props.menuIconClicked} className="header__navigation--menuButton" />
                </div>
                <div className="header__navigation--profile">
                    <Fab className="header__fab">
                        <Icon IconName="headerHumanIcon" classes="header__icon" />
                    </Fab>
                    <Fab className="header__fab">
                        <Icon IconName="headerNotification" classes="header__icon" />
                    </Fab>
                    <Fab className="header__fab">
                        <Icon IconName="dashbord" classes="header__icon" />
                    </Fab>
                    <Fab className="header__fab header__fab--search">
                        <Icon IconName="headerSearch" classes="header__icon header__icon--search" />
                    </Fab>
                    <TextField id="input-with-icon-grid" label="جستوجو" className="header__search-textField" />
                </div>
            </nav>
        </header>
    );
}



export default header;

