
import * as actions from './actionTypes';
import axios from './../../axios';


// fetch episode 
export const fetchEpisode = () => {

    return dispatch => {
        axios.get(`/getEpisodes?api_token=${localStorage.getItem('token')}`)
            .then(response => {

                dispatch(fetchEpisodeSuccess(response.data));
            })
            .catch(error => {
                // handle errors
                console.log('wht is error', error);
            });
    }
};


export const fetchEpisodeSuccess = (data) => {
    return {
        data: data,
        type: actions.FETCH_EPISODE_SUCCESS
    }
};


// create episode 


export const makeNewEpisode = (data) => {


    console.log('amir is here', data);
    return dispatch => {

        axios.post(`/createEpisode?api_token=${localStorage.getItem('token')}`, {
            data
        })

            .then(response => {

                console.log(response.data);

                if (response.data.status) {

                    dispatch(createEpisodeSuccessFully(response.data))
                    // dispatch(resetEpisodeCreatePage());
                }
            })
            .catch(err => {
                console.log(`Error in create course action`)
            });
    }
}

export const createEpisodeSuccessFully = () => ({ status: true, type: actions.CREATE_NEW_EPISODE_SUCCESS });




