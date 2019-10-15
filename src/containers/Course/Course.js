import React, { Component } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateCourse from './CreateCourse/CreateCourse';
import CourseTable from './CourseTable/CourseTable';
import { connect } from 'react-redux';
import { fetchCourse ,fetchCategory } from '../../store/action/';



class Course extends Component {

    state = {
        value: 1
    }

    componentDidMount = () => {

        this.props.loadCourses() ; 
        this.props.loadCats() ; 
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    }



    render() {
        
        let content = null;

        if (this.state.value === 0) {
            content = <CourseTable  courses={this.props.courses}/>
        }
        else if (this.state.value === 1) {
            content = <CreateCourse cats={this.props.cats} />
        }

        return (
            <div className="menu">
                <h1 className="heading__scondary heading">
                دوره ها
            </h1>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="مشاهده ی لیست دوره ها" className="menu__tab-label" />
                        <Tab label="ایجاد دوره جدید " className="menu__tab-label" />
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
        loadCourses: () => dispatch((fetchCourse()))  , 
        loadCats : () => dispatch(fetchCategory())
    }
}

const mapStateToProps = state => {

    return {
        courses: state.course.courses , 
        cats : state.cats.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Course);  