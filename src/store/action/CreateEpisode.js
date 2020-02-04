import * as actionTypes from './actionTypes' ; 

export const titleChangedEpisode = (data) => ({ type : actionTypes.TITLE_CHANGED_EPISODE , value:data })  ; 



export const changeTimeVideo = (data) => ({ type : actionTypes.TIME_CHANGED_EPISODE , value:data })  ; 

export const setKindEpisode = (data) => ({ type : actionTypes.SET_KINDOF_EPISODE , value:data })  ; 

export const setRelaventCourse = (data) => ({ type : actionTypes.SET_RELAVANET_COURSE , value:data })  ; 

export const setNumberVideo = (data) => ({  type : actionTypes.SET_NUMBER_EPISODE ,  value : data }) ; 

export const changeContentEpisode = (data) => ({ type :actionTypes.TEXT_CHANGED_EPISODE , value:data }) ; 


export const setVideoLink = (data) => ({ type : actionTypes.SET_VIDEO_LINK , value: data }) ;  



