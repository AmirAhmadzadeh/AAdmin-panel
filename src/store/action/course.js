
import * as actions from './actionTypes';
import axios from './../../axios/';



export const fetchCourse = () => {

    return dispatch => {
        axios.get('/getCourses')
            .then(response => {

                dispatch(fetchCourseSuccess(response.data));
            })
            .catch(error => {
                // handle errors
                console.log('wht is error', error);
            });


    }
};


export const fetchCourseSuccess = data => ({ data: data, type: actions.FETCH_COURSES_SUCCESS });


export const createCourse = (data) => {

    return dispatch => {

        axios.post('/createCourse', { data })

            .then(response => {

                console.log(response.data);

                if (response.data.status) {

                    dispatch(courseCreatedSuccessFully(response.data))
                    
                }
            })
            .catch(err => {
                console.log(`Error in create course action`)
            })
    }
}

export const courseCreatedSuccessFully = () => ({ status: true, type: actions.CREATE_COURSE_SUCCESS });



export const deleteCourse = (id) => {

    return dispatch => {

        axios.delete(`/deleteCourse/${id}`)

            .then(response => {

                console.log(response.data, 'amir in deletecourse action ');

                dispatch(deleteCreatedSuccessFully());

                dispatch(fetchCourse());

            })

            .catch(err => {

                console.log(`error in dekleting course`);

            })

    }
}

export const deleteCreatedSuccessFully = () => ({ status: true, type: actions.DELETE_COURSE_SUCCESS });
