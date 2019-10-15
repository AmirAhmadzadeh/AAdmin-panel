


import React, { Component } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateMenu from './CreateMenu/CreateMenu';
import MenuTable from './MenuTable/MenuTable';
import { connect } from 'react-redux';
import { fetchmenu } from '../../store/action/';



class Menu extends Component {

    state = {
        value: 0
    }

    componentDidMount = () => {
        this.props.loadmenus() ;  
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    }



    render() {
        
        let content = null;

        if (this.state.value === 0) {
            content = <MenuTable  menus={this.props.menus}/>
        }
        else if (this.state.value === 1) {
            content = <CreateMenu menus={this.props.menus}/>
        }

        return (
            <div className="menu">
                <h1 className="heading__scondary">
                    منو ها
            </h1>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="مشاهده ی لیست منو ها" className="menu__tab-label" />
                        <Tab label="ایجاد منوی جدید " className="menu__tab-label" />
                    </Tabs>
                    <div className="menu__cmpArea">
                        {content}
                    </div>


            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadmenus: () => dispatch(fetchmenu())
    }
}

const mapStateToProps = state => {

    return {
        menus: state.menu.menus
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);  