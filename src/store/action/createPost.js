import * as actionTypes from './actionTypes';

export const postTitleChanged = (data) => ({
  type: actionTypes.POST_TITLE_CHANGED,
  value: data
});


export const postTagChanged = (data) => ({
  type: actionTypes.TAG_CHANGED_POST,
  value: data
});

export const postSlugChanged = (data) => ({
  type: actionTypes.SLUG_CHANGED_POST,
  value: data
});



export const postSetCategories = (data) => ({
  type: actionTypes.SET_CATEGORIES_POST,
  value: data
});

export const postChangeContent = (data) => ({
  type: actionTypes.POST_TEXT_CHANGED,
  value: data
});

export const postSetReqPremission = (status) => ({
  type: actionTypes.PREMISSION_SEND_REQ_POST,
  value: status
});

export const postCourseImageChanged = (data) => ({
  type: actionTypes.POST_IMAGE_CHANGED,
  value: data
});

