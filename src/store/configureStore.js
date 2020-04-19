import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rThunk from 'redux-thunk';
import menuReducer from './reducers/menu';
import commentReducer from './reducers/comment';
import categoryReducer from './reducers/category';
import courseReducer from './reducers/course/course';
import episodeReducer from './reducers/episode/episode';
import authReducer from './reducers/auth';
import postReducer from './reducers/post/post'
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    menu: menuReducer,
    comments: commentReducer,
    cats: categoryReducer,
    course: courseReducer,
    episode: episodeReducer,
    post: postReducer,
});


const composeEnhaunster = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const configureStore = () => {
    return createStore(reducer, composeEnhaunster(applyMiddleware(rThunk)));
}



export default configureStore; 