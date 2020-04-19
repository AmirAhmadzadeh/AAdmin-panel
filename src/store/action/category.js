import * as actions from './actionTypes';
import axios from './../../axios';




//EDIT CATEGORY 
export const editCategory = (catId, data) => {
    return dispatch => {
        axios.put(`/updateCat/${catId}?api_token=${localStorage.getItem('token')}`, { ...data })
            .then(response => {
                if (response.data.status) {
                    dispatch(editCategorySuccess);
                    dispatch(fetchCategory());
                };
            })
            .catch(err => console.log('Error puccured In Editing the Edit Category!', err));
    }
}
export const editCategorySuccess = () => {
    return {
        type: actions.EDIT_CATEGORY_SUCCESS
    }
};


// FETCH CATEGORY 
export const fetchCategory = () => {

    return dispatch => {
        axios.get(`/getCats?api_token=${localStorage.getItem('token')}`)
            .then(response => {
                dispatch(fetchCategorySuccess(response.data));
            })
            .catch(error => {
                // handleError
                console.log('wht is error', error);
            })
    }
};

// FETECH CATEGORY SUCCESS   
export const fetchCategorySuccess = (data) => {
    return {
        data: data,
        type: actions.FETCH_CATEGORY_SUCCESS
    }
};

// MAKING NEW CATEGORIES   
export const makeNewCat = (data) => {
    return dispatch => {
        axios.post(`/makeNewCat?api_token=${localStorage.getItem('token')}`, { ...data })
            .then(response => {
                console.log(`heyyyy ${response.data}`);

                dispatch(makeNewCatSuccessed());
                dispatch(fetchCategory());
            })
            .catch(err => {
                console.log(`some errors occured in making new Cat action`);
            })
    }
}

// DISPATCHING THE SUCCESS OF MAKING CATEGORY 
export const makeNewCatSuccessed = () => ({ type: actions.MAKE_CATEGORY_SUCCESS });



// DELETEING CATEGORY FETCHED ! 
export const deleteCat = (id) => {
    return dispatch => {
        axios.delete(`/deleteCat/${id}?api_token=${localStorage.getItem('token')}`)
            .then(response => {
                console.log(`heyyyy ${response.data}`);

                dispatch(deleteCatSuccessed());
                dispatch(fetchCategory());
            })
            .catch(err => {
                console.log(`some errors occured in making new Cat action`);
            })
    }
}
// DETETE CATEGORY SUCCESSED ! 
export const deleteCatSuccessed = () => ({ type: actions.delete_CATEGORY_SUCCESS }); 
