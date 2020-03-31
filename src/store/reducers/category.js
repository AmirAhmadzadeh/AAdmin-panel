import * as actionTypes from './../action/actionTypes';


const initState = {
    categories: null,
    edited: false
}



const categoryReducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_CATEGORY_SUCCESS: {
            return {
                ...state,
                edited: false,
                categories: action.data
            }
        }
        case actionTypes.EDIT_CATEGORY_SUCCESS: {
            return {
                ...state,
                edited: true
            }
        }
        default:
            return {
                ...state
            }
    }

}


export default categoryReducer;  