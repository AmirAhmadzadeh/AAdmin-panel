


import React, { Component } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateCategory from './CreateCategory/CreateCategory';
import CategoryTable from './CategoryTable/CategoryTable';
import { connect } from 'react-redux';
import { fetchCategory } from '../../store/action/';



class Category extends Component {

    state = {
        value: 0
    }

    componentDidMount = () => {

        this.props.loadCats() ;
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    }

    componentDidUpdate = () => { 
      // console.log(this.props.cats)
    }

    render() {
        
        let content = null;

        if (this.state.value === 0) {
            content = <CategoryTable  cats={this.props.cats}/>
        }
        else if (this.state.value === 1) {
            content = <CreateCategory cats={this.props.cats}/>
        }

        return (
            <div className="menu">
                <h1 className="heading__scondary">
                    دسته ها
            </h1>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="دسته ها" className="menu__tab-label" />
                        <Tab label="ایجاد دسته ی جدید " className="menu__tab-label" />
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
        loadCats: () => dispatch(fetchCategory())
    }
}

const mapStateToProps = state => {

    return {
        cats: state.cats.categories
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Category);  