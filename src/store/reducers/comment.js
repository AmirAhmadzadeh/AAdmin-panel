import * as actionTypes from './../action/actionTypes';


const initState = {
    comments: null
}



const commentReducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_APPROVED_COMMENTS_SUCCESS: {


            return {
                ...state,
                comments: action.data
            }
        }

        case actionTypes.FETCH_DISAPPROVED_COMMENTS_SUCCESS: {

            // console.log('hello' , action.data)    
            return {
                ...state,
                comments: action.data
            }
        }
        default:
            return {
                ...state
            }
    }

}


export default commentReducer;  