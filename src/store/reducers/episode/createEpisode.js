
import * as actionTypes from '../../action/actionTypes';


const initState = {

    title: '',
    time: 0,
    number: null,
    EpisodeVideoLink: "",
    selectedKindOfEpisode: "free",
    categories: [],
    EpisodeText: "",
    relavantCourse: ""
}


const createEpisodeReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.TITLE_CHANGED_EPISODE:
            return {
                ...state,
                title: action.value
            };

        case actionTypes.TIME_CHANGED_EPISODE:
            return {
                ...state,
                time: action.value
            }

        case actionTypes.SET_NUMBER_EPISODE:
            return {
                ...state,
                number: action.value
            }

        case actionTypes.SET_VIDEO_LINK:
            return {
                ...state,
                EpisodeVideoLink: action.value
            };

        case actionTypes.SET_KINDOF_EPISODE:
            return {
                ...state,
                selectedKindOfEpisode: action.value
            };

        case actionTypes.SET_RELAVANET_COURSE:
            return {
                ...state,
                relavantCourse: action.value
            };

        case actionTypes.TEXT_CHANGED_EPISODE :  
            return { 
                ...state , 
                EpisodeText: action.value
            };

        case actionTypes.CREATE_EPISODE_INIT : 
            return { 
                ...initState
             }    
        default:
            return {
                ...state
            };
    }

}


export default createEpisodeReducer;  