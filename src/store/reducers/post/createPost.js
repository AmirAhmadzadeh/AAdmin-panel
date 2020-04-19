import * as actionTypes from '../../action/actionTypes';

const initState = {
  title: '',
  slug: "",
  tag: "",
  categories: [],
  postImage: "",
  canSendReq: false,
  errorMsg: '',
  postContent: ''
}

export default function (state = initState, action) {

  switch (action.type) {
    case actionTypes.POST_TITLE_CHANGED:
      return {
        ...state,
        title: action.value
      };

    case actionTypes.TAG_CHANGED_POST:
      return {
        ...state,
        tag: action.value
      };
    case actionTypes.SLUG_CHANGED_POST:
      return {
        ...state,
        slug: action.value
      };

    case actionTypes.SET_CATEGORIES_POST:
      return {
        ...state,
        categories: action.value
      };
    case actionTypes.POST_TEXT_CHANGED:
      return {
        ...state,
        postContent: action.value
      };
    case actionTypes.PREMISSION_SEND_REQ_POST:
      return {
        ...state,
        canSendReq: action.value
      };

    case actionTypes.POST_IMAGE_CHANGED:
      return {
        ...state,
        postImage: action.value
      }

    case actionTypes.CREATE_POST_INIT:
      return {
        ...initState
      }
    default:
      return {
        ...state
      };
  }
}


