import React, { useEffect } from 'react'
import { Tabs, Tab } from '@material-ui/core';
import CreateCourse from './CreateCourse/CreateCourse';
import CourseTable from './CourseTable/CourseTable';
import { connect } from 'react-redux';
import { fetchCourse, fetchCategory, createCourse , deleteCourse } from '../../store/action/';
import {useValue} from './../../hooks/';


function Course(props) {

    const [value, setValue] = useValue();

    function handleCreateCourse(data) {

        console.log(`handleCreateCourse Function  Course component `);

        props.createCourse(data);

        setValue(0);
    }

    function remove (id) { 
       props.deleteCourse(id) ;       
    }

    useEffect(() => {

        props.loadCourses();

        props.loadCats();

    }, [value]);


    function getContent() {


        if (value === 0) {

            return <CourseTable deleteCourse={remove}  courses={props.courses} />

        }

        return <CreateCourse makeNewCourse={handleCreateCourse} cats={props.cats} created={props.created} />

    }


    return (

        <div className="menu">

            <h1 className="heading__scondary heading">
                دوره ها

        </h1>

            <Tabs

                value={value}


                onChange={(e, value) => setValue(value)}


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

        loadCats: () => dispatch(fetchCategory()),

        createCourse: (data) => dispatch(createCourse(data)) ,  

        deleteCourse : (_id) => dispatch(deleteCourse(_id))
    }
}

const mapStateToProps = state => {

    return {

        courses: state.course.courses,

        error: state.course.error,

        created: state.course.created,

        cats: state.cats.categories

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Course);  