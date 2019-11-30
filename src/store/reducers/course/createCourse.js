


import * as actionTypes from '../../action/actionTypes';


const initState = {

    title: '',
    price: 0,
    slug: "",
    tag: "",
    kindOfCourse: "free",
    categories: [],
    courseImage: "",
    canSendReq: false,
    errorMsg: '',
    courseText: ''
}



const courseReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.TITLE_CHANGED:
            return {
                ...state,
                title: action.value
            };
        case actionTypes.PRICE_CHANGED : 
          return { 
              ...state , 
              price : action.value 
          } ;
        case actionTypes.TAG_CHANGED : 
           return { 
               ...state , 
               tag : action.value  
           };   
        case actionTypes.SLUG_CHANGED : 
           return { 
               ...state , 
               slug : action.value 
           } ; 

        case actionTypes.SET_KINDOFCOURSE : 
            return { 
                ...state  , 
                kindOfCourse : action.value 
            } ; 
        case actionTypes.SET_CATEGORIES : 
            return { 
                ...state , 
                categories : action.value  
            }; 
        case actionTypes.COURSE_TEXT_CHANGED : 
            return { 
                ...state  , 
                courseText : action.value 
            };     
        case actionTypes.PREMISSION_SEND_REQ : 
            return { 
                ...state  , 
                canSendReq : action.value 
            };  
            
        case actionTypes.COURSE_IMAGE_CHANGED : 
          return { 
              ...state  , 
              courseImage : action.value  
          } 
          
        case actionTypes.CREATE_COURSE_INIT : 
           return { 
               ...initState
           }        
        default:
            return {
                ...state
            };
    }

}


export default courseReducer;  