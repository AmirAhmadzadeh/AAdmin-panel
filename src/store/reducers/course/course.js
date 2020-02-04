


import * as actionTypes from '../../action/actionTypes';


const initState = {
    courses: null , created  : null  , error : false
}



const courseReducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_COURSES_SUCCESS: {
            // console.log(`amir is her ` , action.data) ;
            return {
                ...state,
                courses: action.data
            }
        }

        case actionTypes.CREATE_COURSE_SUCCESS : {
            return { 
                ...state   , created : true 
            }
        }

        case actionTypes.CREATE_COURSE_FAILED : { 
            return {
                 ...state , created  : false , error : true     
            }
        }   
        
        case actionTypes.DELETE_COURSE_SUCCESS : {
            return { ...state }
        }
        
        default:
            return {
                ...state
            }
    }

}


export default courseReducer;  