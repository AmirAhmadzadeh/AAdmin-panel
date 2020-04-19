import * as actionTypes from './actionTypes';
import axios from '../../axios/';


// approve unapprove comments
export const approveComment = (commentID) => {
    return dispatch => {
        axios.get(`/approveComment/${commentID}?api_token=${localStorage.getItem('token')}`)
            .then(response => {
                // dispatch(exportCommentSuccess(response.data));
            })
            .catch(err => {

                console.log(`an err ouccured ` ,err );
            });
    } 
};


// export const exportCommentSuccess = (data) => {
//     return {
//         type: actionTypes.APPROVE_COMMENT_SUCCESS,
//         data: data
//     }
// };


// fetch comments 

export const fetchComment = (approved) => {
    return dispatch => {

        console.log(`hello amir is here in fetch comments `)
        if (approved) {
            axios.get(`/getApprovedComments?api_token=${localStorage.getItem('token')}`)
                .then(response => {
                    dispatch(fetchApprovedCommentSuccess(response.data));
                })
                .catch(err => {

                    console.log(`an err ouccured `);
                });
        } else {
            // console.log(`amir is here `)
            axios.get(`/getDisApprovedComments?api_token=${localStorage.getItem('token')}`)
                .then(response => {
                    dispatch(fetchDisApprovedCommentSuccess(response.data));
                })
                .catch(err => {

                    console.log(`an err ouccured `)

                });
        }

    }

}



export const fetchApprovedCommentSuccess = (data) => {

    return {
        type: actionTypes.FETCH_APPROVED_COMMENTS_SUCCESS,
        data: data
    }
}




export const fetchDisApprovedCommentSuccess = (data) => {
    // console.log(`amir is here `) ;
    return {
        type: actionTypes.FETCH_DISAPPROVED_COMMENTS_SUCCESS,
        data: data
    }
}

