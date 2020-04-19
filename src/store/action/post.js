import * as actions from './actionTypes';
import axios from './../../axios/';


// Fetch Posts  
export const fetchPosts = () => {
  return dispatch => {
    axios.get(`/getPosts?api_token=${localStorage.getItem('token')}`)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        // handle errors
        console.log('wht is error', error);
      });
  }
};


export const fetchPostsSuccess = data => ({
  data: data,
  type: actions.FETCH_POSTS_SUCCESS
});




// create course 
export const createPost = (data) => {
  return dispatch => {
    axios.post(`/createPost?api_token=${localStorage.getItem('token')}`, { data })
      .then(response => {
        if (response.data.status) {
          dispatch(postCreatedSuccessFully(response.data))
          // dispatch(createPostInit());
        }
      })
      .catch(err => {
        console.log(`Error in create course action`)
      })
  }
}

export const postCreatedSuccessFully = () => ({
  status: true,
  type: actions.CREATE_POST_SUCCESS
});


// delete course 
export const deletePost = (id) => {
  return dispatch => {
    axios.delete(`/deletePost/${id}?api_token=${localStorage.getItem('token')}`)
      .then(response => {
        dispatch(deletePostSuccessFully());
        dispatch(fetchPosts());
      })
      .catch(err => {
        console.log(`error in dekleting course`, err);
      })
  }
}

export const deletePostSuccessFully = () => ({
  status: true,
  type: actions.DELETE_POST_SUCCESS
});
