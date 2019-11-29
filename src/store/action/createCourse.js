


import * as actionTypes from './actionTypes' ; 



export const titleChanged = (data) => ({ type : actionTypes.TITLE_CHANGED , value:data })  ; 

export const priceChanged = (data) => ({ type : actionTypes.PRICE_CHANGED , value:data })  ; 


export const tagChanged = (data) => ({ type : actionTypes.TAG_CHANGED , value:data })  ; 


export const slugChanged = (data) => ({ type : actionTypes.SLUG_CHANGED , value:data })  ; 

export const setKindCourse = (data) => ({ type : actionTypes.SET_KINDOFCOURSE , value:data })  ; 
export const setCategories = (data) => ({  type : actionTypes.SET_CATEGORIES ,  value : data }) ; 


export const changeContent = (data) => ({ type :actionTypes.COURSE_TEXT_CHANGED  , value:data }) ; 

export const setReqPremission = (status) => ({ type : actionTypes.PREMISSION_SEND_REQ , value: status }) ;  