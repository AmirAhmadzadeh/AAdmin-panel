import React, { useEffect } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateCourse from './CreateCourse/CreateCourse';
import CourseTable from './CourseTable/CourseTable';
import { connect } from 'react-redux';
import { fetchCourse, fetchCategory } from '../../store/action/';
import useValue from './../../hooks/useValue';


function Course(props) {
    const [value, setValue] = useValue();

    useEffect(() => {
        props.loadCourses();
        props.loadCats();
    },[value]) ; 


    function getContent() {


        if (value === 0) {
            return <CourseTable courses={props.courses} />
        }

        return <CreateCourse cats={props.cats} />

    }


    return (
        <div className="menu">
           
            <h1 className="heading__scondary heading">
                دوره ها
        </h1>

            <Tabs
                value={value}
                
                onChange={(e,value) => setValue(value)}
                
                indicatorColor="primary"
                
                textColor="primary"
                
                centered
            >
                
                <Tab label="مشاهده ی لیست دوره ها" className="menu__tab-label" />
                
                <Tab label="ایجاد دوره جدید " className="menu__tab-label" />
            
            </Tabs>
           
            <div className="menu__cmpArea">
              
                {getContent()}
           
            </div>

        </div>
    )

}



const mapDispatchToProps = dispatch => {
    return {
        loadCourses: () => dispatch((fetchCourse())),
        loadCats: () => dispatch(fetchCategory())
    }
}

const mapStateToProps = state => {

    return {
        courses: state.course.courses,
        cats: state.cats.categories
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Course);  