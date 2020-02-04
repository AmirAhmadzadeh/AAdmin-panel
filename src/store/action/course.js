
import * as actions from './actionTypes';
import axios from './../../axios/';


// Fetch courses  
export const fetchCourse = () => {

    return dispatch => {
        axios.get(`/getCourses?api_token=${localStorage.getItem('token')}`)
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




// create course 
export const createCourse = (data) => {

    return dispatch => {

        axios.post(`/createCourse?api_token=${localStorage.getItem('token')}`, { data })

            .then(response => {

                console.log(response.data);

                if (response.data.status) {

                    dispatch(courseCreatedSuccessFully(response.data))
                    dispatch(createCourseInit()) ;  
                }
            })
            .catch(err => {
                console.log(`Error in create course action`)
            })
    }
}

export const courseCreatedSuccessFully = () => ({ status: true, type: actions.CREATE_COURSE_SUCCESS });
export const createCourseInit = () => ({  type: actions.CREATE_COURSE_INIT });

// delete course 
export const deleteCourse = (id) => {

    return dispatch => {

        axios.delete(`/deleteCourse/${id}?api_token=${localStorage.getItem('token')}`)

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
