


export {
   fetchmenu , 
    makeNewMenu , 
    deleteMenu
} from './menu' ; 

export {
    fetchComment , 
    approveComment
} from './comments' ; 


export {
    fetchCategory , 
    makeNewCat , 
    deleteCat
} from './category' ; 


export {
    fetchCourse , 
    createCourse , 
    deleteCourse 
    , createCourseInit 
} from './course' ; 
export {
    titleChanged,
    priceChanged , 
    slugChanged , 
    tagChanged,
    setKindCourse , 
    setCategories , 
    changeContent , 
    setReqPremission, 
    courseImageChanged 
 } from './createCourse' ;

export {
    fetchEpisode , 
    resetEpisodeCreatePage, 
    makeNewEpisode
} from './episode' ; 

export {
    titleChangedEpisode,
    setKindEpisode , 
        
    changeContentEpisode , 
    // setReqPremission, 
    setVideoLink , 
    setNumberVideo , 
    changeTimeVideo,
    setRelaventCourse
 } from './CreateEpisode' ;

export {
    login
} from './auth' ; 


 
