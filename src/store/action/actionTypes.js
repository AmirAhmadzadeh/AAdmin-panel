import { EOPNOTSUPP } from "constants";

// menu 
export const FETCH_MENUS = 'FETCH_MENUS'  ; 
export const FETCH_MENUS_SUCCESS = 'FETCH_MENUS_SUCCESS'  ; 
export const FETCH_MENUS_FAILED = 'FETCH_MENUS_FAILED'  ; 

export const MAKE_MENU = 'MAKE_MENU' ;
export const MAKE_MENU_SUCCESS = 'MAKE_MENU_SUCCESS' ;
export const MAKE_MENU_FAILED = 'MAKE_MENU_FAILED' ;

export const delete_MENU = 'delete_MENU' ; 
export const delete_MENU_FAILED = 'delete_MENU_FAILED' ; 
export const delete_MENU_SUCCESS = 'delete_MENU_SUCCESS' ; 

//   comments 

export const FETCH_COMMENTS = 'FETCH_COMMENTS'  ; 
export const FETCH_APPROVED_COMMENTS_SUCCESS = 'FETCH_APPROVED_COMMENTS_SUCCESS'  ; 
export const FETCH_DISAPPROVED_COMMENTS_SUCCESS = 'FETCH_DISAPPROVED_COMMENTS_SUCCESS'  ; 

export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'  ; 


// category 

export const FETCH_CATEGORY = 'FETCH_CATEGORY'  ; 
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'  ; 
export const FETCH_CATEGORY_FAILED = 'FETCH_CATEGORY_FAILED'  ; 


export const MAKE_CATEGORY = 'MAKE_CATEGORY'  ; 
export const MAKE_CATEGORY_SUCCESS = 'MAKE_CATEGORY_SUCCESS'  ; 
export const MAKE_CATEGORY_FAILED = 'MAKE_CATEGORY_FAILED'  ; 

export const delete_CATEGORY = 'delete_CATEGORY'  ; 
export const delete_CATEGORY_SUCCESS = 'delete_CATEGORY_SUCCESS'  ; 
export const delete_CATEGORY_FAILED = 'delete_CATEGORY_FAILED'  ; 

// courses ; 
//fetchcurses ; 
export const FETCH_COURSES = 'FETCH_COURSES'  ; 
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'  ; 
export const FETCH_COURSES_FAILED = 'FETCH_COURSES_FAILED'  ; 

// createCourse
export const TITLE_CHANGED = 'TITLE_CHANGED' ;  
export const PRICE_CHANGED = 'PRICE_CHANGED' ;  
export const TAG_CHANGED =  'TAG_CHANGED' ;  
export const SLUG_CHANGED = 'SLUG_CHANGED' ; 
export const SET_KINDOFCOURSE  = 'SET_KINDOFCOURSE' ; 
export const SET_CATEGORIES =  'SET_CATEGORIES' ;  
export const COURSE_TEXT_CHANGED = 'COURSE_TEXT_CHANGED' ; 
export const PREMISSION_SEND_REQ = 'PREMISSION_SEND_REQ' ;
export const COURSE_IMAGE_CHANGED = 'COURSE_IMAGE_CHANGED' ;
export const CREATE_COURSE_INIT = "CREATE_COURSE_INIT" ; 


//creating course action types 
export const CREATE_COURSE = 'CREATE_COURSE'  ; 
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS'  ; 
export const CREATE_COURSE_FAILED = 'CREATE_COURSE_FAILED'  ; 
//delete post 
export const DELETE_COURSE = 'DELETE_COURSE' ; 
export const DELETE_COURSE_FAILED = 'DELETE_COURSE_FAILED' ; 
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS' ; 
 
//Epsiodes
// fetch Episodes 
export const FETCH_EPISODE = 'FETCH_EPISODE'  ; 
export const FETCH_EPISODE_SUCCESS = 'FETCH_EPISODE_SUCCESS'  ; 
export const FETCH_EPISODE_FAILED = 'FETCH_EPISODE_FAILED'  ; 


// create episode Actions

export const CREATE_NEW_EPISODE = 'CREATE_NEW_EPISODE' ;  
export const CREATE_NEW_EPISODE_SUCCESS =  'CREATE_NEW_EPISODE_SUCCESS' ;
export const CREATE_NEW_EPISODE_FAILED   = 'CREATE_NEW_EPISODE_FAILED' ; 

// createEpisode 
export const TITLE_CHANGED_EPISODE = 'TITLE_CHANGED_EPISODE' ;  
export const TAG_CHANGED_EPISODE =  'TAG_CHANGED' ;  
export const TIME_CHANGED_EPISODE = 'TIME_CHANGED_EPISODE' ; 
export const SET_KINDOF_EPISODE  = 'SET_KINDOF_EPISODE' ; 
export const SET_RELAVANET_COURSE  = 'SET_RELAVANET_COURSE' ;  
export const SET_NUMBER_EPISODE =  'SET_NUMBER_EPISODE' ;  
export const TEXT_CHANGED_EPISODE = 'TEXT_CHANGED_EPISODE' ; 
export const PREMISSION_SEND_REQ_EPISODE = 'PREMISSION_SEND_REQ_EPISODE' ;
export const SET_VIDEO_LINK = 'SET_VIDEO_LINK' ;
export const CREATE_EPISODE_INIT = 'CREATE_EPISODE_INIT' ; 

// auth 

export const LOGIN = 'LOGIN'  ; 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'  ; 
export const LOGIN_FAILED = 'LOGIN_FAILED'  ; 
