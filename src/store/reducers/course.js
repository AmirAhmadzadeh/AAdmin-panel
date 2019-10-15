


import * as actionTypes from './../action/actionTypes';


const initState = {
    courses: null
}



const commentReducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_COURSES_SUCCESS: {
            // console.log(`amir is her ` , action.data) ;
            return {
                ...state,
                courses: action.data
            }
        }

       
        default:
            return {
                ...state
            }
    }

}


export default commentReducer;  