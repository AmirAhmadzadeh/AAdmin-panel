


import React, { useEffect } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateMenu from './CreateMenu/CreateMenu';
import MenuTable from './MenuTable/MenuTable';
import { connect } from 'react-redux';
import { fetchmenu , makeNewMenu ,deleteMenu } from '../../store/action/';
import { useValue } from './../../hooks/';

function Menu(props) {
    const [value, setValue] = useValue();

    function handleMakeNewMenu(data) { 
         props.makeMenu(data) ;   
         setValue(0)
    }

    useEffect(() => {
        props.loadmenus();
    },[value])
    function handleDeleteMenu(id) { 
        props.deleteMenu(id)
    }
    function getContent() {

        if (value === 0) {
         
            return <MenuTable deleteMenu={handleDeleteMenu} menus={props.menus} />
        
        }
        
        return <CreateMenu createNewMenu={handleMakeNewMenu} menus={props.menus} />

    }

    return (<div className="menu">
        <h1 className="heading__scondary">
            منو ها
        </h1>

        <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="مشاهده ی لیست منو ها" className="menu__tab-label" />
            <Tab label="ایجاد منوی جدید " className="menu__tab-label" />
        </Tabs>
        <div className="menu__cmpArea">
            {getContent()}
        </div>
    </div>)

}




const mapDispatchToProps = dispatch => {
    return {
        loadmenus: () => dispatch(fetchmenu()) , 

        makeMenu: (data) => dispatch(makeNewMenu(data))   , 

        deleteMenu : (id) => dispatch(deleteMenu(id))
    }
}

const mapStateToProps = state => {

    return {
        menus: state.menu.menus
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);  