//menu 
export {
    fetchmenu,
    makeNewMenu,
    deleteMenu
} from './menu';

// comment 
export {
    fetchComment
} from './comments';


// categories 
export {
    fetchCategory,
    makeNewCat,
    deleteCat,
    editCategory
} from './category';

// posts 
export {
    createPost,
    createPostInit,
    deletePost,
    fetchPosts
} from './post';

//CREATRE POST 
export {
    postChangeContent,
    postCourseImageChanged,
    postSetCategories,
    postSetReqPremission,
    postSlugChanged,
    postTagChanged,
    postTitleChanged
} from './createPost';

// course 
export {
    fetchCourse,
    createCourse,
    deleteCourse
    , createCourseInit
} from './course';

// create Course 
export {
    titleChanged,
    priceChanged,
    slugChanged,
    tagChanged,
    setKindCourse,
    setCategories,
    changeContent,
    setReqPremission,
    courseImageChanged
} from './createCourse';

// episodes 
export {
    fetchEpisode,
    resetEpisodeCreatePage,
    makeNewEpisode
} from './episode';

// create Episode 
export {
    titleChangedEpisode,
    setKindEpisode,
    changeContentEpisode,
    // setReqPremission, 
    setVideoLink,
    setNumberVideo,
    changeTimeVideo,
    setRelaventCourse
} from './CreateEpisode';

// authenticate !! 
export {
    login
} from './auth';



