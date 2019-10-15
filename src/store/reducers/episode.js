


import * as actionTypes from './../action/actionTypes';


const initState = {
    episodes: null
}



const episodeReducer = (state = initState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_EPISODE_SUCCESS: {
            // console.log(`amir is her ` , action.data) ;
            return {
                ...state,
                episodes: action.data
            }
        }

       
        default:
            return {
                ...state
            }
    }

}


export default episodeReducer;  