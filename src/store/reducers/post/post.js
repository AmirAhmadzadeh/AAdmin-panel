

import * as actionTypes from '../../action/actionTypes';

const initState = {
  posts: null,
  created: null,
  error: false
}

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data.data
      }
    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        created: true
      }
    case actionTypes.CREATE_POST_FAILED:
      return {
        ...state,
        created: false
      }
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}